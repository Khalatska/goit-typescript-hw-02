import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ handleClick }) => {
  return (
    <div className={css.btnDiv}>
      <button onClick={handleClick} className={css.btnLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
