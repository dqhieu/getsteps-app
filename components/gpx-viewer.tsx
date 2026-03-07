"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { parseGpx, type GpxData } from "@/lib/gpx-parser";

function formatDistance(meters: number): string {
  if (meters >= 1000) return (meters / 1000).toFixed(2) + " km";
  return Math.round(meters) + " m";
}

function formatDuration(seconds: number): string {
  if (seconds <= 0) return "N/A";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}h ${m}m ${s}s`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

function formatSpeed(kmh: number): string {
  if (kmh <= 0) return "N/A";
  return kmh.toFixed(1) + " km/h";
}

function formatElevation(meters: number): string {
  return Math.round(meters) + " m";
}

function ElevationChart({ points }: { points: { dist: number; ele: number }[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || points.length < 2) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const padding = { top: 20, right: 16, bottom: 30, left: 50 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const maxDist = points[points.length - 1].dist;
    const eles = points.map((p) => p.ele);
    const minEle = Math.min(...eles);
    const maxEle = Math.max(...eles);
    const eleRange = maxEle - minEle || 1;

    ctx.clearRect(0, 0, w, h);

    // Draw axes
    ctx.strokeStyle = "#d4d4d4";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, h - padding.bottom);
    ctx.lineTo(w - padding.right, h - padding.bottom);
    ctx.stroke();

    // Y-axis labels
    ctx.fillStyle = "#737373";
    ctx.font = "11px sans-serif";
    ctx.textAlign = "right";
    for (let i = 0; i <= 4; i++) {
      const ele = minEle + (eleRange * i) / 4;
      const y = h - padding.bottom - (chartH * i) / 4;
      ctx.fillText(Math.round(ele) + "m", padding.left - 6, y + 4);
      if (i > 0) {
        ctx.strokeStyle = "#e5e5e5";
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        ctx.stroke();
      }
    }

    // X-axis labels
    ctx.textAlign = "center";
    for (let i = 0; i <= 4; i++) {
      const dist = (maxDist * i) / 4;
      const x = padding.left + (chartW * i) / 4;
      const label = dist >= 1000 ? (dist / 1000).toFixed(1) + "km" : Math.round(dist) + "m";
      ctx.fillText(label, x, h - padding.bottom + 18);
    }

    // Draw filled area
    const gradient = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
    gradient.addColorStop(0, "rgba(237, 119, 47, 0.3)");
    gradient.addColorStop(1, "rgba(237, 119, 47, 0.02)");

    ctx.beginPath();
    ctx.moveTo(padding.left, h - padding.bottom);
    for (const p of points) {
      const x = padding.left + (p.dist / maxDist) * chartW;
      const y = h - padding.bottom - ((p.ele - minEle) / eleRange) * chartH;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(padding.left + chartW, h - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw line
    ctx.beginPath();
    ctx.strokeStyle = "#ED772F";
    ctx.lineWidth = 2;
    for (let i = 0; i < points.length; i++) {
      const x = padding.left + (points[i].dist / maxDist) * chartW;
      const y = h - padding.bottom - ((points[i].ele - minEle) / eleRange) * chartH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }, [points]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

function MapView({ gpxData }: { gpxData: GpxData }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let cancelled = false;

    async function initMap() {
      const L = (await import("leaflet")).default;

      // Load Leaflet CSS dynamically
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      if (cancelled || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        scrollWheelZoom: true,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const allLatLngs: [number, number][] = [];

      // Draw tracks
      gpxData.tracks.forEach((track) => {
        track.segments.forEach((seg) => {
          const coords = seg.map((p): [number, number] => [p.lat, p.lon]);
          allLatLngs.push(...coords);
          L.polyline(coords, {
            color: "#ED772F",
            weight: 3,
            opacity: 0.9,
          }).addTo(map);
        });
      });

      // Draw routes
      gpxData.routes.forEach((route) => {
        const coords = route.points.map((p): [number, number] => [p.lat, p.lon]);
        allLatLngs.push(...coords);
        L.polyline(coords, {
          color: "#3B82F6",
          weight: 3,
          opacity: 0.9,
        }).addTo(map);
      });

      // Draw waypoints
      const defaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      gpxData.waypoints.forEach((wpt) => {
        allLatLngs.push([wpt.lat, wpt.lon]);
        const marker = L.marker([wpt.lat, wpt.lon], { icon: defaultIcon }).addTo(map);
        if (wpt.name) {
          marker.bindPopup(`<b>${wpt.name}</b>${wpt.desc ? `<br/>${wpt.desc}` : ""}`);
        }
      });

      // Start/end markers for tracks
      if (gpxData.allPoints.length > 0) {
        const start = gpxData.allPoints[0];
        const end = gpxData.allPoints[gpxData.allPoints.length - 1];

        L.circleMarker([start.lat, start.lon], {
          radius: 8,
          fillColor: "#22C55E",
          color: "#fff",
          weight: 2,
          fillOpacity: 1,
        }).addTo(map).bindPopup("Start");

        L.circleMarker([end.lat, end.lon], {
          radius: 8,
          fillColor: "#EF4444",
          color: "#fff",
          weight: 2,
          fillOpacity: 1,
        }).addTo(map).bindPopup("End");
      }

      // Fit bounds
      if (allLatLngs.length > 0) {
        const bounds = L.latLngBounds(allLatLngs);
        map.fitBounds(bounds, { padding: [30, 30] });
      }

      mapInstanceRef.current = map;
    }

    initMap();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, [gpxData]);

  return <div ref={mapRef} className="w-full h-full rounded-xl" />;
}

export function GpxViewer() {
  const [gpxData, setGpxData] = useState<GpxData | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.name.toLowerCase().endsWith(".gpx")) {
      setError("Please upload a .gpx file");
      return;
    }

    setError("");
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const xml = e.target?.result as string;
        const data = parseGpx(xml);
        if (data.allPoints.length === 0 && data.waypoints.length === 0) {
          setError("No track data found in this GPX file");
          return;
        }
        setGpxData(data);
      } catch {
        setError("Failed to parse GPX file. Please check the file format.");
      }
    };
    reader.readAsText(file);
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const elevationPoints = gpxData
    ? (() => {
        let cumDist = 0;
        const pts: { dist: number; ele: number }[] = [];
        const filtered = gpxData.allPoints.filter((p) => p.ele !== undefined);
        for (let i = 0; i < filtered.length; i++) {
          if (i > 0) {
            const R = 6371000;
            const dLat = ((filtered[i].lat - filtered[i - 1].lat) * Math.PI) / 180;
            const dLon = ((filtered[i].lon - filtered[i - 1].lon) * Math.PI) / 180;
            const a =
              Math.sin(dLat / 2) ** 2 +
              Math.cos((filtered[i - 1].lat * Math.PI) / 180) *
                Math.cos((filtered[i].lat * Math.PI) / 180) *
                Math.sin(dLon / 2) ** 2;
            cumDist += R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          }
          pts.push({ dist: cumDist, ele: filtered[i].ele! });
        }
        // Downsample if too many points
        if (pts.length > 500) {
          const step = Math.ceil(pts.length / 500);
          return pts.filter((_, i) => i % step === 0 || i === pts.length - 1);
        }
        return pts;
      })()
    : [];

  if (!gpxData) {
    return (
      <div>
        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onClick={() => fileInputRef.current?.click()}
          className={`
            border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all
            ${
              isDragging
                ? "border-[#ED772F] bg-[#ED772F]/5"
                : "border-neutral-300 dark:border-neutral-600 hover:border-[#ED772F] hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
            }
          `}
        >
          <div className="text-5xl mb-4">&#x1F5FA;&#xFE0F;</div>
          <p className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
            Drop your GPX file here
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            or click to browse
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            Supports .gpx files from Strava, Garmin, Apple Watch, and more
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".gpx"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
        </div>
        {error && (
          <p className="mt-4 text-sm text-red-500 text-center">{error}</p>
        )}
      </div>
    );
  }

  const { stats } = gpxData;

  return (
    <div className="space-y-6">
      {/* File info bar */}
      <div className="flex items-center justify-between bg-neutral-50 dark:bg-neutral-800/50 rounded-xl px-4 py-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xl">&#x1F5FA;&#xFE0F;</span>
          <div className="min-w-0">
            <p className="text-sm font-medium text-neutral-900 dark:text-white truncate">
              {gpxData.name || fileName}
            </p>
            <p className="text-xs text-neutral-500">
              {stats.totalPoints} points
              {gpxData.waypoints.length > 0 && ` | ${gpxData.waypoints.length} waypoints`}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setGpxData(null);
            setFileName("");
            setError("");
          }}
          className="text-sm text-neutral-500 hover:text-[#ED772F] transition-colors px-3 py-1"
        >
          New file
        </button>
      </div>

      {/* Map */}
      <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 h-[400px] md:h-[500px]">
        <MapView gpxData={gpxData} />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Distance", value: formatDistance(stats.totalDistance) },
          { label: "Duration", value: formatDuration(stats.duration) },
          { label: "Avg Speed", value: formatSpeed(stats.avgSpeed) },
          { label: "Max Speed", value: formatSpeed(stats.maxSpeed) },
          { label: "Elevation Gain", value: formatElevation(stats.elevationGain) },
          { label: "Elevation Loss", value: formatElevation(stats.elevationLoss) },
          { label: "Max Elevation", value: formatElevation(stats.maxElevation) },
          { label: "Min Elevation", value: formatElevation(stats.minElevation) },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-4 text-center"
          >
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
              {stat.label}
            </p>
            <p className="text-lg font-semibold text-neutral-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Elevation Profile */}
      {elevationPoints.length >= 2 && (
        <div className="bg-white dark:bg-neutral-800/50 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 md:p-6">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-white mb-4">
            Elevation Profile
          </h3>
          <div className="h-48 md:h-56">
            <ElevationChart points={elevationPoints} />
          </div>
        </div>
      )}

      {/* Waypoints */}
      {gpxData.waypoints.length > 0 && (
        <div className="bg-white dark:bg-neutral-800/50 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 md:p-6">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-white mb-4">
            Waypoints ({gpxData.waypoints.length})
          </h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {gpxData.waypoints.map((wpt, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 px-3 rounded-lg bg-neutral-50 dark:bg-neutral-700/30"
              >
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    {wpt.name || `Waypoint ${i + 1}`}
                  </p>
                  {wpt.desc && (
                    <p className="text-xs text-neutral-500">{wpt.desc}</p>
                  )}
                </div>
                <p className="text-xs text-neutral-500 font-mono">
                  {wpt.lat.toFixed(5)}, {wpt.lon.toFixed(5)}
                  {wpt.ele !== undefined && ` | ${Math.round(wpt.ele)}m`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
