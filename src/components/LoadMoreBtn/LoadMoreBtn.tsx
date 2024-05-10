import css from "./LoadMoreBtn.module.css";
import { FC } from "react";

interface LoadMoreBtn {
  handleClick: () => void;
}
const LoadMoreBtn: FC<LoadMoreBtn> = ({ handleClick }) => {
  return (
    <div className={css.btnDiv}>
      <button onClick={handleClick} className={css.btnLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
