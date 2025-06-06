export function parseIsoToDate(isoString: string): string {
  const date = new Date(isoString);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}