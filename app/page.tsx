import { AddPatientModel } from "./components/addPatientModel";
import { getPatients } from "./hooks/getPatients";
import { isoDobToAge } from "./utils/parsers/age";
import { Patient } from "./types";
import Link from "next/link";

export default async function Home() {
  const patients = await getPatients();

  return (
    <div className="flex justify-center min-h-screen w-full bg-white text-black">
      <main className="flex flex-col items-center lg:max-w-[90%] p-5 gap-3">
        <h1 className="font-bold">Patient List</h1>
        <ul className="flex flex-col space-y-2">
          <li className="lg:grid hidden grid-cols-4 items-center pt-4 pb-2 [&>p]:text-center [&>p]:font-bold">
            <p>Name</p>
            <p>Age</p>
            <p>ID</p>
            <p>Status</p>
          </li>
          {patients?.map((patient: Patient) => (
            <li key={patient.id}>
              <Link
                href={`/patient/${patient.id}`}
                className="grid lg:grid-cols-4 grid-cols-1 items-center p-4 gap-3 border rounded-md [&>p]:lg:text-center shadow hover:scale-105 transition-all cursor-pointer"
              >
                <p> <strong className="lg:hidden"> Name: </strong>{patient.name}</p>
                <p> <strong className="lg:hidden"> Age: </strong>{isoDobToAge(patient.dateOfBirth)}</p>
                <p> <strong className="lg:hidden"> ID: </strong>{patient.id}</p>
                <p> <strong className="lg:hidden"> Status: </strong>{patient.status}</p>
              </Link>
            </li>
          ))}
        </ul>
        <AddPatientModel />
      </main>
    </div>
  );
}
