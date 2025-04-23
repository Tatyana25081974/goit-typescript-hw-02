import styles from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";

interface Image {
  id: string;
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[]; //масив images
  onImageClick: (image: Image) => void; //
}


const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (images.length === 0) return null;

  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li 
          key={image.id} 
          onClick={() => onImageClick(image)} 
          className={styles.listItem} 
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;