import React from 'react';
import { TranscriptionControls } from './components/TranscriptionControls';
import { TranscriptDisplay } from './components/TranscriptDisplay';
import { useTranscription } from './hooks/useTranscription';

function App() {
  const {
    isRecording,
    finalTranscript,
    interimTranscript,
    startRecording,
    stopRecording,
    saveTranscript
  } = useTranscription();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Real-Time Transcription</h1>
        
        <TranscriptionControls
          isRecording={isRecording}
          onStartRecording={startRecording}
          onStopRecording={stopRecording}
          onSave={saveTranscript}
          canSave={finalTranscript.length > 0}
        />

        <TranscriptDisplay
          finalTranscript={finalTranscript}
          interimTranscript={interimTranscript}
        />
      </div>
    </div>
  );
}

export default App;