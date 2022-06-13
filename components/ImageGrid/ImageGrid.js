import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
const ImageGrid = ({ setSelectedImg, images }) => {
  console.log("images", images);
  return (
    <div className={styles.categoriesImage}>
      {images?.map((images, i) => {
        return (
          <>
            <div key={images.img} onClick={() => setSelectedImg(images.img)}>
              <Image
                src={images.img}
                onClick={() => setSelectedImg(images.img)}
                width={300}
                height={300}
                key={i}
                alt={images.img}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ImageGrid;
