import css from "./ImageCard.module.css";
const ImageCard = ({ images, openModal }) => {
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
