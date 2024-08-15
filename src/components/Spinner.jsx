import React from "react";
import loading from "./loadingumbrella.gif";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <img className="w-60 h-60" src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
