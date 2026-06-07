export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    "hearing-health": "Hearing Health",
    "eye-care": "Eye Care",
    wellness: "Wellness",
  };
  return labels[category] || category;
}
