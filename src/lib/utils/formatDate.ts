export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("sr-RS", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function calcAge(dateStr: string): string {
  const birth = new Date(dateStr);
  const now = new Date();
  const months =
    (now.getFullYear() - birth.getFullYear()) * 12 +
    now.getMonth() -
    birth.getMonth();
  if (months < 1) return "< 1 mesec";
  if (months < 12) return `${months} mes.`;
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  if (remMonths === 0) return `${years} god.`;
  return `${years} god. ${remMonths} mes.`;
}

