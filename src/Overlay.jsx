import React from "react";
import "./Overlay.css";

const Overlay = ({ isOverlayVisible, onClose }) => {
  if (!isOverlayVisible)
    return (
      <div className="overlay">
        <div className="overlay-content">
          <h1> Overlay</h1>
          <button
            onClick={() => {
              onClose();
            }}
          >
            click
          </button>
        </div>
      </div>
    );
  return null;
};

export default Overlay;
