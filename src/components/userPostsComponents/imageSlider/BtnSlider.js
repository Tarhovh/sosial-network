/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Slider.css";

export default function BtnSlider({ direction, moveSlide }) {

  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? '→' : '←' } />
    </button>
  );
}