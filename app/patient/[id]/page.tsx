import { parseIsoToDate } from "@/app/utils/parsers/date";
import { FaArrowLeft } from "@/app/libs/react-icons";
import { getPatient } from "@/app/hooks/getPatient";
import { PatientFields } from "@/app/utils/consts";
import { Oasis } from "@/app/components/oasis";
import { Patient } from "@/app/types";
import Link from "next/link";

export default async function PatientPage({ params }: { params: Promise<{ id: string; }>} ) {
  const { id } = await params;
  const patient = await getPatient(id);

  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full bg-white text-black">
      <div className="flex flex-col w-fit">
        <div className="flex gap-5 items-center border-b h-12 py-1 px-3">
          <Link
            href="/"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 transition-all"
          >
            <FaArrowLeft /> Back
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3 p-5">
          <h1 className="text-lg font-bold">Patient Chart</h1>
          {!patient ? (
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
      <Oasis
        patientId={id}
        isPending={false}
        notes={patient?.note}
      />
    </main>
  )
}