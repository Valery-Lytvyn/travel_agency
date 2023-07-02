import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

interface LazyImageProps {
  src: string;
  alt: string;
}
const LazyImage = ({ src, alt }: LazyImageProps) => (
  <LazyLoadImage
    alt={alt}
    src={src}
    effect="opacity"
    width={"100%"}
    height={"100%"}
  />
);

export default LazyImage;
