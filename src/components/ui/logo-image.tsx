import type { StaticImageData } from "next/image";

interface LogoImageProps {
  src?: string | StaticImageData;
  alt: string;
  className?: string;
}

export function LogoImage({
  src,
  alt,
  className = "",
}: LogoImageProps) {
  if (!src) {
    return (
      <div className={className} />
    );
  }

  return (
    <img
      src={typeof src === "string" ? src : src.src}
      alt={alt}
      className={className}
    />
  );
}