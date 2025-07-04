'use client';

interface YoutubePlayerProps {
  videoId: string;
  title: string;
}

export function YoutubePlayer({ videoId, title }: YoutubePlayerProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="aspect-video w-full bg-black">
      <iframe
        src={embedUrl}
        className="w-full h-full border-none"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
