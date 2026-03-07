export interface GpxPoint {
  lat: number;
  lon: number;
  ele?: number;
  time?: Date;
}

export interface GpxWaypoint {
  lat: number;
  lon: number;
  ele?: number;
  name?: string;
  desc?: string;
}

export interface GpxTrack {
  name?: string;
  segments: GpxPoint[][];
}

export interface GpxRoute {
  name?: string;
  points: GpxPoint[];
}

export interface GpxStats {
  totalDistance: number; // meters
  elevationGain: number;
  elevationLoss: number;
  maxElevation: number;
  minElevation: number;
  duration: number; // seconds
  avgSpeed: number; // km/h
  maxSpeed: number; // km/h
  totalPoints: number;
}

export interface GpxData {
  name?: string;
  tracks: GpxTrack[];
  waypoints: GpxWaypoint[];
  routes: GpxRoute[];
  stats: GpxStats;
  allPoints: GpxPoint[];
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function haversineDistance(p1: GpxPoint, p2: GpxPoint): number {
  const R = 6371000; // Earth radius in meters
  const dLat = toRad(p2.lat - p1.lat);
  const dLon = toRad(p2.lon - p1.lon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(p1.lat)) *
      Math.cos(toRad(p2.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function parsePoints(parent: Element, tagName: string): GpxPoint[] {
  const points: GpxPoint[] = [];
  const nodes = parent.getElementsByTagName(tagName);
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const lat = parseFloat(node.getAttribute("lat") || "");
    const lon = parseFloat(node.getAttribute("lon") || "");
    if (isNaN(lat) || isNaN(lon)) continue;

    const eleNode = node.getElementsByTagName("ele")[0];
    const timeNode = node.getElementsByTagName("time")[0];

    points.push({
      lat,
      lon,
      ele: eleNode ? parseFloat(eleNode.textContent || "") : undefined,
      time: timeNode ? new Date(timeNode.textContent || "") : undefined,
    });
  }
  return points;
}

function getTextContent(parent: Element, tag: string): string | undefined {
  const el = parent.getElementsByTagName(tag)[0];
  return el?.textContent || undefined;
}

function calculateStats(allPoints: GpxPoint[]): GpxStats {
  let totalDistance = 0;
  let elevationGain = 0;
  let elevationLoss = 0;
  let maxElevation = -Infinity;
  let minElevation = Infinity;
  let maxSpeed = 0;

  for (let i = 0; i < allPoints.length; i++) {
    const p = allPoints[i];
    if (p.ele !== undefined) {
      if (p.ele > maxElevation) maxElevation = p.ele;
      if (p.ele < minElevation) minElevation = p.ele;
    }

    if (i > 0) {
      const prev = allPoints[i - 1];
      const dist = haversineDistance(prev, p);
      totalDistance += dist;

      if (p.ele !== undefined && prev.ele !== undefined) {
        const diff = p.ele - prev.ele;
        if (diff > 0) elevationGain += diff;
        else elevationLoss += Math.abs(diff);
      }

      if (p.time && prev.time) {
        const dt = (p.time.getTime() - prev.time.getTime()) / 1000;
        if (dt > 0 && dist > 0) {
          const speed = (dist / 1000) / (dt / 3600); // km/h
          if (speed > maxSpeed && speed < 200) maxSpeed = speed;
        }
      }
    }
  }

  if (maxElevation === -Infinity) maxElevation = 0;
  if (minElevation === Infinity) minElevation = 0;

  let duration = 0;
  if (
    allPoints.length >= 2 &&
    allPoints[0].time &&
    allPoints[allPoints.length - 1].time
  ) {
    duration =
      (allPoints[allPoints.length - 1].time!.getTime() -
        allPoints[0].time!.getTime()) /
      1000;
  }

  const avgSpeed =
    duration > 0 ? (totalDistance / 1000) / (duration / 3600) : 0;

  return {
    totalDistance,
    elevationGain,
    elevationLoss,
    maxElevation,
    minElevation,
    duration,
    avgSpeed,
    maxSpeed,
    totalPoints: allPoints.length,
  };
}

export function parseGpx(xmlString: string): GpxData {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlString, "application/xml");
  const root = doc.documentElement;

  const name = getTextContent(root, "name");

  // Parse tracks
  const tracks: GpxTrack[] = [];
  const trkNodes = root.getElementsByTagName("trk");
  for (let i = 0; i < trkNodes.length; i++) {
    const trk = trkNodes[i];
    const segments: GpxPoint[][] = [];
    const segs = trk.getElementsByTagName("trkseg");
    for (let j = 0; j < segs.length; j++) {
      segments.push(parsePoints(segs[j], "trkpt"));
    }
    tracks.push({ name: getTextContent(trk, "name"), segments });
  }

  // Parse waypoints
  const waypoints: GpxWaypoint[] = [];
  const wptNodes = root.getElementsByTagName("wpt");
  for (let i = 0; i < wptNodes.length; i++) {
    const wpt = wptNodes[i];
    const lat = parseFloat(wpt.getAttribute("lat") || "");
    const lon = parseFloat(wpt.getAttribute("lon") || "");
    if (isNaN(lat) || isNaN(lon)) continue;
    waypoints.push({
      lat,
      lon,
      ele: wpt.getElementsByTagName("ele")[0]
        ? parseFloat(wpt.getElementsByTagName("ele")[0].textContent || "")
        : undefined,
      name: getTextContent(wpt, "name"),
      desc: getTextContent(wpt, "desc"),
    });
  }

  // Parse routes
  const routes: GpxRoute[] = [];
  const rteNodes = root.getElementsByTagName("rte");
  for (let i = 0; i < rteNodes.length; i++) {
    const rte = rteNodes[i];
    routes.push({
      name: getTextContent(rte, "name"),
      points: parsePoints(rte, "rtept"),
    });
  }

  // Collect all points for stats
  const allPoints: GpxPoint[] = [];
  tracks.forEach((t) => t.segments.forEach((s) => allPoints.push(...s)));
  routes.forEach((r) => allPoints.push(...r.points));

  // Sort by time if available
  allPoints.sort((a, b) => {
    if (a.time && b.time) return a.time.getTime() - b.time.getTime();
    return 0;
  });

  return {
    name,
    tracks,
    waypoints,
    routes,
    stats: calculateStats(allPoints),
    allPoints,
  };
}
