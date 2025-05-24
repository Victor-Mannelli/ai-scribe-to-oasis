import { Patient } from "../types";

export async function getPatient(id: string): Promise<Patient> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(`${baseUrl}/patients/${id}`)
        .then((res) => res.json())
        .then((data) => resolve(data));
    } catch (error) {
      reject(error);
    }
  });
}
