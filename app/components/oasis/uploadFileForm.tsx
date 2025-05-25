"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createNoteWithAudio } from "@/app/hooks/createNoteWithAudio";
import { useTransition } from "react";

export function UploadFileForm({ noNotes = true, patientId, router }: { 
  router: AppRouterInstance;
  noNotes?: boolean;
  patientId: string;
}) {
  const [isPending, startTransition] = useTransition();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    startTransition(async () => {
      try {
        await createNoteWithAudio(file, patientId);
        router.refresh();
      } catch {
        console.log("Failed to process audio.");
      }
    });
  };

  return (
    <>
      {noNotes ? (
        <div className="flex justify-center mt-5">
          <div className="p-5 flex flex-col items-center gap-3 border w-fit rounded-md shadow">
            <p className="text-gray-500">No notes available.</p>
            <label className="block">
              <span className="sr-only">Upload audio file</span>
              <input
                type="file"
                accept="audio/*"
                disabled={isPending}
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
              />
            </label>
            {isPending && <div className="text-gray-500 font-bold">Uploading...</div>}
          </div>
        </div>
      ) : (
        <label className="block">
          <span className="sr-only">Upload audio file</span>
          <input
            type="file"
            accept="audio/*"
            disabled={isPending}
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
          />
        </label>
      )}
    </>
  )
}