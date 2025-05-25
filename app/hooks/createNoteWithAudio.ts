export function createNoteWithAudio(file: File, patientId: string): Promise<{
  fields: { [key: string]: string }
  transcription: string;
  summary: string;
}> {
  return new Promise(async (resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("patientId", patientId)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/audio`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      resolve(data);
      // resolve({
      //   transcription: data.transcription || "",
      //   summary: data.summary || "",
      //   fields: OASIS_KEYS.reduce((acc: Record<string, string>, key: string) => ({
      //     ...acc,
      //     [key]: data.fields?.[key] || ""
      //   }), {})
      // });
    } catch (error) {
      reject(error);
    }
  });
};