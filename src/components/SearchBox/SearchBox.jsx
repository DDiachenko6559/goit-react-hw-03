import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={s.searchBox}>
      <input
        type="text"
        placeholder="Search contacts..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
