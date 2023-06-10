import React from "react";
import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} className="hover:bg-gray-100 h-7 w-7 rounded-full">
      <IonIcon icon={arrowBackOutline} color="black" />
    </button>
  );
};

export default BackButton;
