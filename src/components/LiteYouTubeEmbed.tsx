import React, { useState } from 'react';
import { motion } from 'motion/react';

interface LiteYouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export const LiteYouTubeEmbed: React.FC<LiteYouTubeEmbedProps> = ({ videoId, title, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`;
  const fallbackThumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div 
      className={`relative bg-black group w-full h-full overflow-hidden flex justify-center items-center cursor-pointer ${className}`}
      onClick={() => setIsLoaded(true)}
      title="Reproduzir vídeo"
    >
      {!isLoaded ? (
        <>
          <picture>
            <source srcSet={thumbnailUrl} type="image/webp" />
            <img 
              src={fallbackThumbnailUrl} 
              alt={title || `Vídeo ${videoId}`} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </picture>
          <div className="absolute z-10 w-16 h-12 bg-red-600 rounded-2xl flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
            <svg 
              version="1.1" 
              viewBox="0 0 68 48" 
              width="68" 
              height="48"
              className="w-8 h-8 fill-white"
            >
              <path d="M45,24 27,14 27,34" fill="#fff"></path>
            </svg>
          </div>
        </>
      ) : (
        <iframe 
          className="absolute inset-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3`} 
          title={title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
