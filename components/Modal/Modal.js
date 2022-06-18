import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Image from "next/image";
const Modal = ({ setSelectedImg, selectedImg }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <>
      <div className="backdrop" onClick={handleClick}>
        <div className="ModalContent">
          <div className="modal-content">
            <FaWindowClose
              onClick={() => setSelectedImg(null)}
              size={"2.5rem"}
              className="closeIcon"
            />
          </div>
          <div className="modalRelative">
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGELINK}${selectedImg.category}/${selectedImg.categoryChild}/${selectedImg.img}`}
              height="100%"
              width="100%"
              layout="fill"
              alt={selectedImg.img}
              objectFit="contain"
              className={cn("dura", isLoading ? "blur" : "notBlur")}
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
          <div className="modalInfo">
            <p>{selectedImg.date}</p>
            <p>
              {selectedImg.taken ? (
                selectedImg.takenasd
              ) : (
                <i>Inget specifieasdasdasdasdrat område.</i>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
