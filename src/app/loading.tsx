export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-cream"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-teal-light border-t-primary" />
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
