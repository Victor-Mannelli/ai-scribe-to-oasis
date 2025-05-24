export type PatientField = {
  label: string;
  name: string;
  type: string;
};

export const PatientFields: PatientField[] = [
  { label: "Name", name: "name", type: "text" },
  { label: "MRN", name: "mrn", type: "text" },
  { label: "Date of Birth", name: "dateOfBirth", type: "date" },
  { label: "Start of Care Date", name: "startOfCareDate", type: "date" },
  { label: "Visit Date", name: "visitDate", type: "date" },
  { label: "Discipline", name: "discipline", type: "text" },
  { label: "Clinician", name: "clinician", type: "text" },
  { label: "Referral Source", name: "referralSource", type: "text" },
  { label: "Physician", name: "physician", type: "text" },
  { label: "Status", name: "status", type: "text" },
  { label: "Primary Insurance", name: "primaryInsurance", type: "text" },
];

export const OASISFields: Record<string, Record<string, string>> = {
  M1800: {
    "0": "Able to groom self unaided, with or without the use of assistive devices or adapted methods.",
    "1": "Grooming utensils must be placed within reach before able to complete grooming activities.",
    "2": "Someone must assist the patient to groom self.",
    "3": "Patient depends entirely upon someone else for grooming needs.",
  },
  M1810: {
    "0": "Able to get clothes out of closets and drawers, put them on and remove them from the upper body without assistance.",
    "1": "Able to dress upper body without assistance if clothing is laid out or handed to the patient.",
    "2": "Someone must help the patient put on upper body clothing.",
    "3": "Patient depends entirely upon another person to dress the upper body.",
  },
  M1820: {
    "0": "Able to obtain, put on, and remove clothing and shoes without assistance.",
    "1": "Able to dress lower body without assistance if clothing and shoes are laid out or handed to the patient.",
    "2": "Someone must help the patient put on undergarments, slacks, socks or nylons, and shoes.",
    "3": "Patient depends entirely upon another person to dress lower body.",
  },
  M1830: {
    "0": "Able to bathe self in shower or tub independently, including getting in and out of tub/shower.",
    "1": "With the use of devices, is able to bathe self in shower or tub independently, including getting in and out of the tub/shower.",
    "2": "Able to bathe in shower or tub with the intermittent assistance of another person: a. for intermittent supervision or encouragement or reminders, OR b. to get in and out of the shower or tub, OR c. for washing difficult to reach areas.",
    "3": "Able to participate in bathing self in shower or tub, but requires presence of another person throughout the bath for assistance or supervision.",
    "4": "Unable to use the shower or tub, but able to bathe self independently with or without the use of devices at the sink, in chair, or on commode.",
    "5": "Unable to use the shower or tub, but able to participate in bathing self in bed, at the sink, in bedside chair, or on commode, with the assistance or supervision of another person.",
    "6": "Unable to participate effectively in bathing and is bathed totally by another person.",
  },
  M1840: {
    "0": "Able to get to and from the toilet and transfer independently with or without a device.",
    "1": "When reminded, assisted, or supervised by another person, able to get to and from the toilet and transfer.",
    "2": "Unable to get to and from the toilet but is able to use a bedside commode (with or without assistance).",
    "3": "Unable to get to and from the toilet or bedside commode but is able to use a bedpan/urinal independently.",
    "4": "Is totally dependent in toileting.",
  },
  M1845: {
    "0": "Able to manage toileting hygiene and clothing management without assistance.",
    "1": "Able to manage toileting hygiene and clothing management without assistance if supplies/implements are laid out for the patient.",
    "2": "Someone must help the patient to maintain toileting hygiene and/or adjust clothing.",
    "3": "Patient depends entirely upon another person to maintain toileting hygiene.",
  },
  M1850: {
    "0": "Able to independently transfer.",
    "1": "Able to transfer with minimal human assistance or with use of an assistive device.",
    "2": "Able to bear weight and pivot during the transfer process but unable to transfer self.",
    "3": "Unable to transfer self and is unable to bear weight or pivot when transferred by another person.",
    "4": "Bedfast, unable to transfer but is able to turn and position self in bed.",
    "5": "Bedfast, unable to transfer and is unable to turn and position self.",
  },
  M1860: {
    "0": "Able to independently walk on even and uneven surfaces and negotiate stairs with or without railings (specifically: needs no human assistance or assistive device).",
    "1": "With the use of a one-handed device (for example, cane, single crutch, hemi-walker), able to independently walk on even and uneven surfaces and negotiate stairs with or without railings.",
    "2": "Requires use of a two-handed device (for example, walker or crutches) to walk alone on a level surface and/or requires human supervision or assistance to negotiate stairs or steps or uneven surfaces.",
    "3": "Able to walk only with the supervision or assistance of another person at all times.",
    "4": "Chairfast, unable to ambulate but is able to wheel self independently.",
    "5": "Chairfast, unable to ambulate and is unable to wheel self.",
    "6": "Bedfast, unable to ambulate or be up in a chair.",
  },
};