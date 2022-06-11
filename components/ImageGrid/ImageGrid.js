import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
const ImageGrid = ({ setSelectedImg, find }) => {
  return (
    <div className={styles.categoriesImage}>
      {find?.pictures.map((images) => {
        return images.images.map((img, i) => (
          <>
            <div key={img.img} onClick={() => setSelectedImg(img.img)}>
              <Image
                src={img.img}
                onClick={() => setSelectedImg(img.img)}
                width={300}
                height={300}
                key={i}
                alt={img.img}
              />
            </div>
          </>
        ));
      })}
    </div>
  );
};

export default ImageGrid;
