import React, { useEffect, useRef, useState } from 'react';
import ProgressBarVedio from '../UI/ProgressBarVedio';
import Controls from '../UI/Controls';

interface VideoPlayerProps {
    videoUrl: string;
    poster: string; 
}
const VideoPlayer :React.FC<VideoPlayerProps>= ({
    videoUrl='../../../public/كتب كتاب 1-4-2025.mp',
    poster
}) => {
     const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(85); // 1:25 like in image
  const [duration, setDuration] = useState(555); // 9:15 like in image
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handlePause);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handlePause);
    };
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = parseFloat(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handlePrevious = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, video.currentTime - 10);
  };

  const handleNext = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(duration, video.currentTime + 10);
  };

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleSettingsClick = () => {
    // Settings functionality
  };

  const handleToggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
    return (
        <div className='w-full max-w-4xl mx-auto'>
            <div className='relative round-lg overflow-hidden'>
             <div className="aspect-video flex items-center justify-center relative">
                <video ref={videoRef} className='w-full h-full object-cover ' poster={poster} onClick={handlePlayPause} >
                    <source src={videoUrl} type='video/mp4' />
                </video>

                </div>
                <ProgressBarVedio currentTime={currentTime} duration={duration} onChange={handleTimeChange} />
                <Controls isPlaying={isPlaying}
                   currentTime={currentTime}
          duration={duration}
          isMuted={isMuted}
          volume={volume}
          onPlayPause={handlePlayPause}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onToggleMute={handleToggleMute}
          onVolumeChange={handleVolumeChange}
          onSettingChange={handleSettingsClick}
          onToggleFullScreen={handleToggleFullscreen}  />

             </div>
            </div>
            
    );
}

export default VideoPlayer;
