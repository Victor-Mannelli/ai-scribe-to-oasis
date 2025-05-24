export type Patient = {
  id: string;
  name: string;
  mrn: string;
  dateOfBirth: string;
  startOfCareDate: string;
  visitDate: string;
  discipline: string;
  clinician: string;
  referralSource: string;
  physician: string;
  status: string;
  primaryInsurance: string;
  note: PatientNote[];
};

export type PatientNote = {
  id: string;
  interactionTranscription: string;
  interactionSummary: string;
  M1800: number;
  M1810: number;
  M1820: number;
  M1830: number;
  M1840: number;
  M1850: number;
  M1860: number;
  patientId?: string;
}
