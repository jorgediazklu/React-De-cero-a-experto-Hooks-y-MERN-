import React, { useState } from "react";
import { AddCategories, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (inputValue) => {
    if (categories.includes(inputValue)) return;
    setCategories((prev) => [...prev, inputValue]);
  };
  return (
    <div>
      GitExpertApp
      <br />
      <br />
      <br />
      <AddCategories onAddCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
