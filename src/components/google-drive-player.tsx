'use client';

interface GoogleDrivePlayerProps {
  fileId: string;
  title: string;
}

export function GoogleDrivePlayer({ fileId, title }: GoogleDrivePlayerProps) {
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="aspect-video w-full bg-black">
      <iframe
        src={embedUrl}
        className="w-full h-full border-none"
        title={title}
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
