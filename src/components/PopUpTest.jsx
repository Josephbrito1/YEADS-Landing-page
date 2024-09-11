// PopUpTest.jsx
import React, { useState } from "react";
import PopUp from "./PopUp"; // Asegúrate de importar tu componente PopUp

const PopUpTest = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <button
        className="bg-blue-500 text-white p-4 rounded"
        onClick={() => setShowPopUp(true)}
      >
        Mostrar PopUp
      </button>

      <PopUp show={showPopUp} onClose={() => setShowPopUp(false)} />
    </div>
  );
};

export default PopUpTest;
