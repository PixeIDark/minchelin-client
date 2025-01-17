import React from 'react';

interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
}

function Picture({
  src,
  alt,
  fallbackSrc = '/placeholder.png',
  width,
  height,
  ...props
}: PictureProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackSrc;
  };

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      loading='lazy'
      width={width}
      height={height}
      {...props}
    />
  );
}

export default Picture;
