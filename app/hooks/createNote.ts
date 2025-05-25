import { Patient } from "../types";

export function handleOasisNoteCreation({
  transcription,
  summary,
  patient,
  fields,
}: {
  fields: Record<string, string>;
  transcription: string;
  patient: Patient;
  summary: string;
}) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      transcription,
      summary,
      fields,
      patientId: patient?.id,
    }),
  });
}