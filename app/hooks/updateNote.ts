export function updateNote({
  transcription,
  patientId,
  summary,
  fields,
}: {
  fields: { [key: string]: string };
  transcription?: string;
  patientId: string;
  summary?: string;
}) {
  const body: {
    interactionTranscription?: string;
    interactionSummary?: string;
    patientId: string;
    [key: string]: string | number | undefined;
  } = {
    patientId,
  };

  if (transcription) body.interactionTranscription = transcription;
  if (summary) body.interactionSummary = summary;

  Object.entries(fields).forEach(([key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== ""
    ) {
      body[key] = Number(value);
    }
  });

  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/text`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}
