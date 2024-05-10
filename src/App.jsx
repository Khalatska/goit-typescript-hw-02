import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { UnsplashApi } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "8px",
    width: "80%",
    height: "80%",
    maxWidth: "none",
    maxHeight: "none",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [clickedImg, setClickedImage] = useState("");
  const [isLastPage, setLastPage] = useState(false);

  function openModal(clickedImage) {
    setClickedImage(clickedImage);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const unsplashApi = new UnsplashApi();
    if (query.length === 0) return;
    unsplashApi.query = query;
    unsplashApi.currentPage = page;
    async function fetchSerachedImg() {
      try {
        setError(false);
        setIsLoading(true);
        const result = await unsplashApi.fetchImages();
        unsplashApi.totalResult = result.total;
        const maxPage = Math.ceil(unsplashApi.totalResult / 12);
        const lastPage = maxPage <= unsplashApi.currentPage;
        setLastPage(lastPage);

        console.log(result);

        if (page === 1) {
          setImages(result.results);
        } else {
          setImages((prevImages) => [...prevImages, ...result.results]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSerachedImg();
  }, [query, page]);

  const handleSearch = (query) => {
    setImages([]);
    setPage(1);
    setQuery(query);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {Array.isArray(images) && images.length > 0 && !isLastPage && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        customStyles={customStyles}
        clickedImage={clickedImg}
      />
    </div>
  );
}

export default App;
