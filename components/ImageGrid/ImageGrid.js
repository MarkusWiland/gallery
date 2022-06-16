import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
const ImageGrid = ({ setSelectedImg, images }) => {
  return (
    <div className={styles.categoriesImage}>
      {images?.map((image, i) => {
        return (
          <div key={image.id} className={styles.imgPadding}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGELINK}${image.category}/${image.categoryChild}/${image.img}`}
              onClick={() => setSelectedImg(image)}
              width={300}
              height={300}
              className={styles.imageGridImg}
              alt={image.img}
            />
            {image.date ? <p>{image.date}</p> : ""}
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
