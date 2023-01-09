import React, { useState } from "react";

export const AddCategories = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onAddCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Buscar gifts"
        value={inputValue}
      />
    </form>
  );
};
