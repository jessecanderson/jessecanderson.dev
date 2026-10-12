export function readingMinutes(source: string): number {
  const text = source.replace(/<[^>]*>/g, " ");
  const words = [...new Intl.Segmenter("en", { granularity: "word" }).segment(text)]
    .filter((segment) => segment.isWordLike).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric", timeZone: "UTC",
  });
}
