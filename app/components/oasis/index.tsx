/* eslint-disable @typescript-eslint/no-explicit-any */
import { Patient } from "@/app/types";
import { OASISFields } from "@/app/utils/consts";

export default function Oasis({ isPending, patient }: { isPending: boolean, patient: Patient | undefined }) {
  console.log(patient);
  return (
    <div className="flex flex-col lg:w-2/3 lg:border-l border-t">
      <div className="flex gap-5 items-center h-12 px-3">
        <button className="font-extrabold"> OASIS </button>
      </div>
      {isPending ? (
        <div className="p-5 text-gray-500">Loading notes...</div>
      ) : patient?.note && patient.note.length > 0 ? (
        <div className="p-5 flex flex-col gap-6">
          <div>
            <h2 className="font-semibold mb-2">Interaction Transcription</h2>
            <p className="bg-gray-50 p-3 rounded">{patient.note[0].interactionTranscription}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Interaction Summary</h2>
            <p className="bg-gray-50 p-3 rounded">{patient.note[0].interactionSummary}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">OASIS Table</h2>
            <table className="min-w-full border border-gray-300 rounded">
              <thead>
                <tr className="bg-gray-100 [&>th]:px-4 [&>th]:py-2 border-b text-start">
                  <th>Item</th>
                  <th>Description</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {(["M1800", "M1810", "M1820", "M1830", "M1840", "M1850", "M1860"] as (keyof typeof patient.note[0])[]).map((field) => (
                  <tr key={field} className="[&>td]:px-4 [&>td]:py-2 [&>td]:text-center [&>td]:border">
                    <td className="font-medium">{field}</td>
                    <td>{OASISFields[field][patient.note[0][field] as keyof typeof OASISFields[typeof field]]}</td>
                    <td>{patient.note[0][field]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="p-5 flex flex-col items-center gap-3">
          <p className="text-gray-500">No notes available.</p>
          <label className="block">
            <span className="sr-only">Upload audio file</span>
            <input
              type="file"
              accept="audio/*"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </label>
        </div>
      )}
    </div>
  );
}