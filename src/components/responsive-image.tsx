
import { getImageProps } from 'next/image';

interface ResponsiveImageProps {
  src: string;
  mobileSrc?: string;
  alt: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
}

/**
 * A responsive image component that uses Art Direction to serve different images
 * for mobile and desktop, ensuring only the necessary asset is downloaded.
 */
export default function ResponsiveImage({
  src,
  mobileSrc,
  alt,
  priority = false,
  className = "",
  containerClassName = ""
}: ResponsiveImageProps) {
  const common = { alt, sizes: "100vw", priority };
  
  // Generate properties for the desktop/default image
  const { props: { srcSet: desktop, ...rest } } = getImageProps({ 
    ...common, 
    src: src, 
    width: 1200, 
    height: 800 
  });
  
  // Generate properties for the mobile image if provided
  let mobileSrcSet: string | undefined = undefined;
  if (mobileSrc) {
    const { props: { srcSet: mobile } } = getImageProps({ 
      ...common, 
      src: mobileSrc, 
      width: 800, 
      height: 1200 
    });
    mobileSrcSet = mobile;
  }

  return (
    <div className={containerClassName}>
      <picture>
        {mobileSrcSet && (
          <source 
            media="(max-width: 767px)" 
            srcSet={mobileSrcSet} 
          />
        )}
        <img 
          {...rest} 
          style={{ width: '100%', height: 'auto' }} 
          className={`block ${className}`}
          aria-label={alt}
        />
      </picture>
    </div>
  );
}
