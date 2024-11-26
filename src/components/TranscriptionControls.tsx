import React from 'react';
import { PlayIcon, StopIcon, DownloadIcon } from '@radix-ui/react-icons';

interface TranscriptionControlsProps {
  isRecording: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onSave: () => void;
  canSave: boolean;
}

export function TranscriptionControls({
  isRecording,
  onStartRecording,
  onStopRecording,
  onSave,
  canSave
}: TranscriptionControlsProps) {
  return (
    <div className="flex gap-2">
      {!isRecording ? (
        <button
          onClick={onStartRecording}
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          <PlayIcon /> Start
        </button>
      ) : (
        <button
          onClick={onStopRecording}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          <StopIcon /> Stop
        </button>
      )}
      <button
        onClick={onSave}
        disabled={!canSave}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <DownloadIcon /> Save
      </button>
    </div>
  );
}