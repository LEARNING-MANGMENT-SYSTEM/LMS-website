import { Volume2, VolumeX } from "lucide-react";
import React, { useState } from "react";

interface VolumeControlProps {
  isMuted: boolean;
  volume: number;
  onToggleMute: () => void;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const VolumeControl: React.FC<VolumeControlProps> = ({
  isMuted,
  volume,
  onToggleMute,
  onVolumeChange,
}) => {
  const [showSlider, setShowSlider] = useState(false);
  return (
    <div
      className="flex items-center  space-x-2"
      onMouseEnter={() => setShowSlider(true)}
      onMouseLeave={() => setShowSlider(false)}
    >
      <button
        onClick={onToggleMute}
        className="hover:text-gray-300 transition-colors"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-white fiil-current" />
        ) : (
          <Volume2 className="w-4 h-4  text-white fiil-current" />
        )}
      </button>
      {showSlider && (
        <div className="w-16 h-1 bg-gray-600 relative">
          <div
            className="h-1 bg-white"
            style={{ width: `${isMuted ? 0 : volume * 100}%` }}
          />
          <input
            type="range"
            max={1}
            min={0}
            step={0.1}
            value={isMuted ? 0 : volume}
            onChange={onVolumeChange}
            className="absolute top-0 left-0 h-1 opacity-0 cursor-pointer"
         
         />
        </div>
      )}
    </div>
  );
};

export default VolumeControl;
