import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
const ImageGrid = ({ setSelectedImg, images }) => {
  return (
    <div className={styles.categoriesImage}>
      {images?.map((image, i) => {
        return (
          <div key={image.id}>
            <Image
              src={`https://wkvxfukoitljukptneli.supabase.co/storage/v1/object/public/gallery/${image.category}/${image.categoryChild}/${image.img}`}
              onClick={() => setSelectedImg(image)}
              width={300}
              height={300}
              alt={image.img}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
