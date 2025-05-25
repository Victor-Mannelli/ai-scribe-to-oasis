"use client";

import { handlePatientCreation } from "@/app/hooks/createPatient";
import { useRef, useState, useTransition } from "react";
import { PatientFields } from "@/app/utils/consts";
import { useOnClickOutside } from 'usehooks-ts';
import { useRouter } from 'next/navigation';

export function AddPatientModel() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef as React.RefObject<HTMLElement>, () => setIsOpen(false))

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    startTransition(async () => {
      await handlePatientCreation(event);
      setIsOpen(false);
      router.refresh();
    });
  }

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-black text-white w-full py-3 rounded-md hover:scale-105 transition-all"
      >
        Add New Patient
      </button>
      {isOpen && (
        <div className="fixed inset-0 w-full h-full bg-black/50 flex justify-center items-center">
          <div ref={modalRef} className="flex flex-col w-[90%] md:w-fit h-[90%] md:h-fit gap-3 bg-white p-5 rounded-md shadow-lg  overflow-auto">
            <h2 className="text-xl font-bold">Add New Patient</h2>
            <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-2">
              {PatientFields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    required
                    placeholder={`Enter ${field.label}`}
                    className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  />
                </div>
              ))}
              <div className="lg:col-span-2 flex justify-between md:justify-end items-center gap-3">
                <button onClick={() => setIsOpen(false)} className="bg-black text-white py-2 px-4 mt-2 rounded-md hover:scale-105 transition-all">
                  Close
                </button>
                <button type="submit" className="bg-black text-white py-2 px-4 mt-2 rounded-md hover:scale-105 transition-all">
                  {isPending ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}