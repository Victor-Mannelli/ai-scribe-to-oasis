export async function handlePatientCreation(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const toISODate = (value: FormDataEntryValue | null) =>
    value ? new Date(value as string).toISOString() : null;

  const patientData = {
    name: formData.get("name") as string,
    mrn: formData.get("mrn") as string,
    dateOfBirth: toISODate(formData.get("dateOfBirth")),
    startOfCareDate: toISODate(formData.get("startOfCareDate")),
    visitDate: toISODate(formData.get("visitDate")),
    discipline: formData.get("discipline") as string,
    clinician: formData.get("clinician") as string,
    referralSource: formData.get("referralSource") as string,
    physician: formData.get("physician") as string,
    status: formData.get("status") as string,
    primaryInsurance: formData.get("primaryInsurance") as string,
  }

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patients`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patientData),
  })
}