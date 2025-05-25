name: AI Scribe – Frontend (Next.js)
description: >
  This is the frontend for the AI Scribe for Home Health OASIS Assessments project.
  It allows users to upload assessment audio files, view transcripts, summaries, and auto-filled OASIS data.

setup_instructions:
  - step: Install dependencies
    command: npm install

  - step: Set up environment variables
    file: .env.local
    example:
      NEXT_PUBLIC_API_URL: "http://localhost:5000"

  - step: Start the development server
    command: npm run dev

assumptions_or_shortcuts:
  - Oasis audio file can only be inserted inside patient page.
  - OASIS field extraction logic is based on fixed model output.

pages_and_features:
  - path: /
    description: Homepage and file uploader

  - path: /patient/[id]
    description: View patient information, transcript, summary, and mapped OASIS fields

tech_stack:
  - Next.js
  - TypeScript
  - Tailwind CSS
  - React Hooks
  - React Icons
