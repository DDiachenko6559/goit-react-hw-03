import s from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ value, onChange }) => {
  const searchBoxId = useId();

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={s.searchBox}>
      <label htmlFor={searchBoxId}>Find contacts by name</label>
      <input
        type="text"
        placeholder="Search contacts..."
        value={value}
        onChange={handleChange}
        id={searchBoxId}
      />
    </div>
  );
};

export default SearchBox;
