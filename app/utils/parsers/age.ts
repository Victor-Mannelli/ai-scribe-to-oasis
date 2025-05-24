export function isoDobToAge(isoDob: string): number {
  const dob = new Date(isoDob);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age;
}