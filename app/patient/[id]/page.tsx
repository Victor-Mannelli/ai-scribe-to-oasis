"use client";

import { PatientFields } from "@/app/utils/consts";
import { useEffect, useState, useTransition } from "react";
import { parseIsoToDate } from "@/app/utils/parsers/date";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "@/app/libs/react-icons";
import { getPatient } from "@/app/hooks/getPatient";
import { Patient } from "@/app/types";
import Oasis from "@/app/components/oasis";

export default function PatientPage() {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [patient, setPatient] = useState<Patient>();
  const router = useRouter();

  useEffect(() => {
    startTransition(() => {
      getPatient(params.id as string).then(setPatient);
    });
  }, [params.id]);

  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full bg-white text-black">
      <div className="flex flex-col lg:w-1/3">
        <div className="flex gap-5 items-center border-b h-12 py-1 px-3">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition-all"
          >
            <FaArrowLeft />  Back
          </button>
        </div>
        <div className="flex flex-col items-center gap-3 p-5">
          <h1 className="text-lg font-bold">Patient Chart</h1>
          {isPending || !patient ? (
            <div className="py-10 text-gray-500">Loading patient data...</div>
          ) : (
            <ul>
              {PatientFields.map((field) => (
                <li className="grid grid-cols-2" key={field.name}>
                  <strong>{field.label}:</strong>
                  <p>
                    {field.type === "date"
                      ? parseIsoToDate(patient?.[field.name as keyof Patient] as string)
                      : patient?.[field.name as keyof Patient]?.toString()
                    }
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Oasis isPending={isPending} patient={patient} />
    </main>
  )
}