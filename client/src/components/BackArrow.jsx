import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} className="hover:bg-gray-100 h-7 w-7 rounded-full">
      &#8592;
    </button>
  );
};

export default BackButton;
