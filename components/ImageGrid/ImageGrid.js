import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
const ImageGrid = ({ setSelectedImg, images }) => {
  console.log("images", images);
  return (
    <div className={styles.categoriesImage}>
      {images?.map((image, i) => {
        return (
          <>
            <div key={image.img} onClick={() => setSelectedImg(image.img)}>
              <Image
                src={`https://wkvxfukoitljukptneli.supabase.co/storage/v1/object/public/gallery/${image.img}`}
                onClick={() => setSelectedImg(image.img)}
                width={300}
                height={300}
                key={i}
                alt={image.img}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ImageGrid;
