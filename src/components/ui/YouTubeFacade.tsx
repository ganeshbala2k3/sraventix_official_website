"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function YouTubeFacade({
  youtubeId,
  caption,
}: {
  youtubeId: string;
  caption: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-card bg-navy">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={caption}
          className="h-full w-full"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${caption}`}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-card bg-navy shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={caption}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-md transition-transform duration-200 group-hover:scale-110">
          <Play className="h-6 w-6 translate-x-0.5 text-blue" fill="currentColor" strokeWidth={0} />
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 px-4 pb-4 text-left text-sm font-semibold text-white">
        {caption}
      </span>
    </button>
  );
}
