import React, { useEffect, useState } from "react";
import { GridItem } from "./GridItem";
import { useFetchGifs } from "../hooks";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map(
          (gif) => gif.title.length > 0 && <GridItem key={gif.id} {...gif} />
        )}
      </div>
    </div>
  );
};
