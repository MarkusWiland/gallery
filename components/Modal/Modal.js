import React from "react";

import Image from "next/image";
const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <>
      <div className="backdrop" onClick={handleClick}>
        <div className="ModalContent">
          <Image src={selectedImg} width={600} height={600} alt={"alt"} />
          <p>{selectedImg.date}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
