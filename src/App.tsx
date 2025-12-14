import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { PasscodeEntry } from './components/PasscodeEntry';
import { LoveQuestion } from './components/LoveQuestion';
import { BirthdayHero } from './components/BirthdayHero';
import { MemoriesSection } from './components/MemoriesSection';
import { BirthdayWishes } from './components/BirthdayWishes';

function App() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
    if (newStep === 2) {
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Audio Control */}
      {/* Audio Control - Visible on all pages */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed z-[9999] flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white shadow-[0_4px_14px_0_rgba(225,29,72,0.5)] transition-all duration-300 hover:scale-110 cursor-pointer w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999,
          borderRadius: '50%',
          padding: 0,
        }}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? <VolumeX className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} /> : <Volume2 className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />}
      </button>

      {isPlaying && (
        <audio
          autoPlay
          loop
          muted={isMuted}
          src={import.meta.env.BASE_URL + "music/birthday_song.mp3"}
          onTimeUpdate={(e) => {
            const audio = e.currentTarget;
            if (audio.currentTime >= 35) {
              audio.currentTime = 0;
              audio.play();
            }
          }}
        />
      )}

      {step === 0 && (
        <PasscodeEntry onCorrectPasscode={() => handleStepChange(1)} />
      )}

      {step === 1 && (
        <LoveQuestion onYesClicked={() => handleStepChange(2)} />
      )}

      {step === 2 && (
        <div className="min-h-screen bg-pink-50">
          <BirthdayHero />
          <MemoriesSection />
          <BirthdayWishes />
        </div>
      )}
    </>
  );
}

export default App;