import React from "react";

export const GridItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url.url} alt="" />
      <p>{title}</p>
    </div>
  );
};
