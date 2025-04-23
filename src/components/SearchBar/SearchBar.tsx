import { useState, FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps>= ({ onSubmit }) => {
    const [query, setQuery] = useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (query.trim() === "") {
            toast.error("Please enter a search term!");
            return;
        }

        onSubmit(query); //Викликає функцію, передану через пропси, і передає їй текст запиту
        setQuery("");//// очищаємо поле вводу після сабміту
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  setQuery(event.target.value);
};


   return (
  <header className={styles.searchBar}>
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  </header>
);

};

export default SearchBar;