import { GoSearch } from "react-icons/go";
import { useState } from "react";

function SearchInput({ handleInput, handleSubmit, value, style = "" }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e); // Call the handleSubmit function from props
  };

  return (
    <form className={style} onSubmit={handleFormSubmit}>
      <div className="flex items-center border border-gray-500 rounded focus:border-gray-800">
        <button type="submit">
          <GoSearch className="text-md" />
        </button>
        <input
          id="searchInput"
          type="text"
          placeholder="Search"
          className="bg-white h-8 w-full focus:outline-none"
          onChange={handleInput}
          value={value}
        />
      </div>
    </form>
  );
}

export default SearchInput;
