import { Patient } from "../types";

export async function getPatients() : Promise<Patient[]>{
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(`${baseUrl}/patients`)
        .then((res) => res.json())
        .then((data) => resolve(data));
    } catch (error) {
      reject(error);
    }
  });
}