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
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGELINK}${selectedImg.category}/${selectedImg.categoryChild}/${selectedImg.img}`}
            width={600}
            height={600}
            alt={selectedImg.img}
            className="ModalImage"
            priority
          />
          <p>{selectedImg.date}</p>
          <p>
            {selectedImg.taken ? (
              selectedImg.taken
            ) : (
              <i>Inget specifierat område.</i>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
