import React from 'react';

interface TranscriptDisplayProps {
  finalTranscript: string;
  interimTranscript: string;
}

export function TranscriptDisplay({ finalTranscript, interimTranscript }: TranscriptDisplayProps) {
  return (
    <div className="mt-4 p-4 border rounded-lg bg-white h-[400px] overflow-y-auto">
      <div className="whitespace-pre-wrap">
        {finalTranscript}
        <span className="text-gray-500">{interimTranscript}</span>
      </div>
    </div>
  );
}