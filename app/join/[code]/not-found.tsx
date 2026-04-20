import Link from "next/link";

export default function InviteNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        This invite is no longer valid.
      </h1>
      <p className="mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
        The group may have been deleted, or the link was mistyped.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-white font-medium hover:bg-orange-600 transition"
      >
        Back to getsteps.app
      </Link>
    </main>
  );
}
