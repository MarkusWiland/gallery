import React, { useEffect, useRef, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Image from "next/image";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const ModalContent = {
    display: "flex",
    flexDirection: "column",
    width: width,
    height: height > 800 ? "80%" : height,
    backgroundColor: "white",
    position: "relative",
    borderRadius: "4px",
  };
  const modalRelative = {
    position: "relative",
    width: width,
    height: height,
  };

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
        <div style={ModalContent}>
          {/* 
          <div className="modal-content">
            <FaWindowClose
              onClick={() => setSelectedImg(null)}
              size={"2.5rem"}
              className="closeIcon"
            />
          </div>*/}
          <div style={modalRelative}>
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGELINK}${selectedImg.category}/${selectedImg.categoryChild}/${selectedImg.img}`}
              layout="fill"
              alt={selectedImg.img}
              id="img"
              objectFit={height > 800 ? "contain" : ""}
              className={cn("dura", isLoading ? "blur" : "notBlur")}
              onLoadingComplete={(e) => {
                setIsLoading(false);
                setHeight(e.naturalHeight);
                setWidth(e.naturalWidth);
              }}
            />
          </div>
        </div>
        <div className="modalInfo">
          <p>{selectedImg.date}</p>
          <p>
            {selectedImg.taken ? (
              selectedImg.takenasd
            ) : (
              <i>Inget specifieasdasdasdasdrat omr??de.</i>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
