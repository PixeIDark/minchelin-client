import React from 'react';

interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
}

function Picture({ src, alt, fallbackSrc = '/placeholder.png', ...props }: PictureProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackSrc;
  };

  return <img src={src} alt={alt} onError={handleError} loading='lazy' {...props} />;
}

export default Picture;
