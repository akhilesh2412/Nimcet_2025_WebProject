'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, X } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  src: string;
  title: string;
  onEnd: () => void;
}

export function VideoPlayer({ src, title, onEnd }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const hideControls = useCallback(() => {
    if (videoRef.current?.paused) return;
    setShowControls(false);
  }, []);

  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(hideControls, 3000);
  }, [hideControls]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => setProgress((video.currentTime / video.duration) * 100);
    const setVideoDuration = () => setDuration(video.duration);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', setVideoDuration);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('volumechange', onVolumeChange);
    video.addEventListener('ended', onEnd);
    
    handleMouseMove();

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', setVideoDuration);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('volumechange', onVolumeChange);
      video.removeEventListener('ended', onEnd);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [src, onEnd, handleMouseMove]);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
  }, []);

  const handleProgressChange = (value: number[]) => {
    if (videoRef.current) {
      const newTime = (value[0] / 100) * duration;
      videoRef.current.currentTime = newTime;
      setProgress(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (videoRef.current) {
      const newVolume = value[0];
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
    }
  };

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      if (!newMuted && videoRef.current.volume === 0) {
        videoRef.current.volume = 1;
      }
    }
  }, []);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [handleFullscreenChange]);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        alert(`Error enabling full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }, []);

  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video bg-black rounded-lg overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={hideControls}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full"
        onClick={togglePlay}
        onDoubleClick={toggleFullscreen}
        autoPlay
      />

      <div className={cn(
        "absolute inset-0 transition-opacity duration-300 flex flex-col",
        showControls ? "opacity-100" : "opacity-0",
      )}>
        <div className="flex-1" onClick={togglePlay}></div>
        <div className="absolute top-2 left-2 right-2 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent p-2 rounded-t-lg">
            <h3 className="text-white text-lg font-bold truncate">{title}</h3>
            <Button variant="ghost" size="icon" onClick={onEnd} className="text-white hover:bg-white/20 hover:text-white">
                <X/>
            </Button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <Button variant="ghost" size="icon" className="w-20 h-20 text-white bg-black/30 backdrop-blur-sm">
            {isPlaying ? <Pause className="w-12 h-12" /> : <Play className="w-12 h-12" />}
          </Button>
        </div>

        <div className="bg-gradient-to-t from-black/50 to-transparent p-4 pb-2 text-white">
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono">{formatTime(videoRef.current?.currentTime ?? 0)}</span>
            <Slider value={[progress]} onValueChange={handleProgressChange} className="w-full" />
            <span className="text-sm font-mono">{formatTime(duration)}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Button variant="ghost" size="icon" onClick={togglePlay} className="hover:bg-white/20 hover:text-white">
              {isPlaying ? <Pause /> : <Play />}
            </Button>
            <div className="flex items-center gap-2 w-28">
              <Button variant="ghost" size="icon" onClick={toggleMute} className="hover:bg-white/20 hover:text-white">
                {isMuted || volume === 0 ? <VolumeX /> : <Volume2 />}
              </Button>
              <Slider value={[isMuted ? 0 : volume]} onValueChange={handleVolumeChange} max={1} step={0.05} />
            </div>
            <div className="flex-grow"/>
            <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="hover:bg-white/20 hover:text-white">
              {isFullscreen ? <Minimize /> : <Maximize />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
