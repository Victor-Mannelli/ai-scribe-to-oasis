"use client";

import { UploadFileForm } from "./uploadFileForm";
import { OASISFields } from "@/app/utils/consts";
import { PatientNote } from "@/app/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Oasis({ isPending, notes, patientId }: {
  notes: PatientNote[] | undefined;
  isPending: boolean;
  patientId: string;
}) {
  const [selectedNoteIdx, setSelectedNoteIndex] = useState<number>(0);
  const router = useRouter();

  return (
    <div className="flex flex-col w-full lg:border-l border-t">
      <div className="flex gap-5 items-center h-12 px-3">
        <button className="font-extrabold"> OASIS </button>
      </div>
      {isPending || !notes ? (
        <div className="p-5 text-gray-500">Loading notes...</div>
      ) : notes.length == 0 ? (
        <UploadFileForm patientId={patientId} router={router} />
      ) : (
        <div className="p-5 flex flex-col gap-2">
          <label className="block font-semibold" htmlFor="note-select">
            Select Note
          </label>
          <select
            id="note-select"
            className="bg-gray-50 p-2 rounded w-full cursor-pointer hover:brightness-95 transition-all"
          >
            {notes?.map((note, idx) => (
              <option
                key={note.createdAt || idx}
                onSelect={() => setSelectedNoteIndex(idx)}
                value={idx}
              >
                {note.createdAt ? new Date(note.createdAt).toLocaleString() : `Note ${idx + 1}`}
              </option>
            ))}
          </select>
          <h2 className="font-semibold">Interaction Transcription</h2>
          <p className="bg-gray-50 p-3 rounded w-full">
            {notes[selectedNoteIdx].interactionTranscription}
          </p>
          <h2 className="font-semibold">Interaction Summary</h2>
          <p
            className="bg-gray-50 p-3 rounded w-full"
          >
            {notes[selectedNoteIdx].interactionSummary}
          </p>
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
                {Object.keys(OASISFields).map((field) => {
                  const value = notes[selectedNoteIdx][field as keyof PatientNote] ?? "";
                  const description = OASISFields[field]?.descriptions?.[value] || "";
                  return (
                    <tr key={field} className="[&>td]:px-4 [&>td]:py-2 [&>td]:text-center [&>td]:border">
                      <td className="font-medium">{field}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <h1 className="font-bold"> Add another note </h1>
            <UploadFileForm noNotes={false} patientId={patientId} router={router} />
          </div>
        </div>
      )}
    </div>
  );
}