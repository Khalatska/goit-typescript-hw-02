import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  const hasImages = Array.isArray(images) && images.length > 0;
  return (
    <div>
      <ul className={css.galleryList}>
        {hasImages &&
          images.map((image) => (
            <li key={image.id} className={css.galleryItem}>
              <ImageCard images={image} openModal={openModal} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
