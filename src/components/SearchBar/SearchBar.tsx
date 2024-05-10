import toast, { Toaster } from "react-hot-toast";
import css from './SearchBar.module.css'

const SearchBar = ({ handleSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    if (query.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    handleSearch(query);
    evt.target.reset();
  };

  return (
    <div>
      <header className={css.header}>
        <Toaster position="top-right" reverseOrder={true} />
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.formBtn}>Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
