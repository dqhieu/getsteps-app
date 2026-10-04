import Link from "next/link";

export default function InviteNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        This invite is no longer valid.
      </h1>
      <p className="mt-4 max-w-md text-muted text-pretty">
        The group may have been deleted, or the link was mistyped.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-6 py-3 text-white font-medium transition-[background-color,transform] duration-150 hover:opacity-90 active:scale-[0.96]"
      >
        Back to getsteps.app
      </Link>
    </main>
  );
}
