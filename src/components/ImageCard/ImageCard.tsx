import css from "./ImageCard.module.css";
import { IPhoto } from "../../App";

interface ImageCardProps {
  images: IPhoto;
  openModal: (clickedImage: IPhoto) => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ images, openModal }) => {
  return (
    <div>
      <img
        src={images.urls.small}
        alt={images.alt_description}
        onClick={() => openModal(images)}
        className={css.imgCard}
      />
      <p className={css.textCard}>
        <b>Likes: </b>
        {images.likes}
      </p>
    </div>
  );
};

export default ImageCard;
