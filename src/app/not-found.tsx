import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-mono text-accent-cyan">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This page doesn&apos;t exist yet.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 text-sm font-medium bg-accent-cyan text-black rounded-lg hover:bg-accent-cyan/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
