import React from "react";


export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="cosmic-orb">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};