import { list } from "@vercel/blob";
import { BUILD_PREFIX, parseBuildPathname, buildInstallUrl } from "@/lib/builds";

export const dynamic = "force-dynamic";

export default async function BuildsPage() {
  const { blobs } = await list({ prefix: BUILD_PREFIX });

  const builds = blobs
    .map((b) => {
      const info = parseBuildPathname(b.pathname);
      if (!info) return null;
      return {
        ...info,
        uploadedAt: b.uploadedAt,
        size: b.size,
        installUrl: buildInstallUrl({ ipaUrl: b.url, version: info.version }),
      };
    })
    .filter((b): b is NonNullable<typeof b> => b !== null)
    .sort((a, b) => +new Date(b.uploadedAt) - +new Date(a.uploadedAt));

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-1 text-2xl font-semibold">Steps builds</h1>
      <p className="mb-6 text-sm text-gray-500">
        Open this page in Safari on a registered iPhone, then tap Install.
      </p>

      {builds.length === 0 ? (
        <p className="text-gray-500">No builds published yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {builds.map((b) => (
            <li
              key={`${b.version}-${b.build}-${b.sha}`}
              className="flex items-center justify-between py-4"
            >
              <div>
                <div className="font-medium">
                  {b.version} <span className="text-gray-400">({b.build})</span>
                </div>
                <div className="text-sm text-gray-500">
                  {b.sha} · {formatDate(b.uploadedAt)} · {formatSize(b.size)}
                </div>
              </div>
              <a
                href={b.installUrl}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white"
              >
                Install
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

function formatDate(d: Date | string): string {
  const date = new Date(d);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${y}/${m}/${day}`;
}

function formatSize(bytes: number): string {
  return `${(bytes / 1_000_000).toFixed(1)} MB`;
}
