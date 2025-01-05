interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

function Picture({ alt, fallbackSrc = '/placeholder.png', ...props }: PictureProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackSrc;
  };

  return <img alt={alt} onError={handleError} loading='lazy' {...props} />;
}

export default Picture;
