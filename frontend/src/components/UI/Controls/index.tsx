import { Maximize, Pause, Play, Settings, SkipBack, SkipForward  } from 'lucide-react';
import React from 'react';
import VolumeControl from '../VolumeControl';

interface ControlsProps {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    isMuted: boolean;
    volume: number;
    onPlayPause: () => void;
    onPrevious: () => void;
    onNext: () => void;
    onToggleMute: () => void;
    onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSettingChange: () => void;
    onToggleFullScreen: () => void;
}
const Controls:React.FC<ControlsProps> = ({
    isPlaying,
    currentTime,
    duration,
    isMuted,
    volume,
    onPlayPause,
    onPrevious,
    onNext,
    onToggleMute,
    onVolumeChange,
    onSettingChange,
    onToggleFullScreen
}) => {
    const formatTime=(time:number)=>{
        const minutes=Math.floor(time/60);
        const seconds=Math.floor(time%60);
        return `${minutes}:${seconds.toString().padStart(2,'0')}`;
    }
    return (
        <div className='absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent  py-3 px-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <button onClick={onPrevious} className='text-white hover:text-gray-300 transition-colors'>
                        <SkipBack className='w-4 h-4 fill-current'/>
                    </button>
                    <button onClick={onPlayPause} className='text-white hover:text-gray-300 transition-colors'>
                        {isPlaying ? <Pause className='w-4 h-4 fill-current' />: <Play className='h-4 w-4 fill-current'/>}
                    </button>
                    <button onClick={onNext} className='text-white hover:text-gray-300 transition-colors'>
                        <SkipForward className='w-4 h-4  fill-current'/>
                    </button>
                    <span className='text-white text-sm ml-4'>
                        {formatTime(currentTime)}/{formatTime(duration)}
                    </span>
                </div>


                {/* /// Right Controls */}
                <div className='flex items-center space-x-3'>
                    <VolumeControl isMuted={isMuted} volume={volume} onToggleMute={onToggleMute} onVolumeChange={onVolumeChange} />
                    <button className='text-white hover:text-gray-300 transition-colors' onClick={onSettingChange}>
                        <Settings className='w-4 h-4 '/>
                    </button>
                    <button onClick={onToggleFullScreen} className='text-white hover:text-gray-300 transition-colors'>
                        <Maximize className='w-4 h-4  fill-current'/>
                    </button>

                </div>

            </div>
            
        </div>
    );
}

export default Controls;
