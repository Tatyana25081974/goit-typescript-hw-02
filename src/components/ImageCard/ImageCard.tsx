import { UnsplashImage } from "../../types/unsplash";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
    image: UnsplashImage;                                                                                                                                                                                                          
}
const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Unsplash Image"}
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;