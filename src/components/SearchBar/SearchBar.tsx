import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import React, { FC, FormEvent } from "react";

interface SearchBarProps {
  handleSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ handleSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const query = (evt.target as HTMLFormElement).elements.namedItem(
      "query"
    ) as HTMLInputElement;
    if (query.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    handleSearch(query.value);
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
          <button type="submit" className={css.formBtn}>
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
