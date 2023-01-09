import React from "react";
import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </div>
  );
};
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
FirstApp.defaultProps = {
  name: "No hay nombre",
  //   title: "No hay titulo",
  subTitle: "No hay subtitulo",
};
