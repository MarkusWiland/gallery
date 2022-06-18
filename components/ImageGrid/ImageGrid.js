import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
const ImageGrid = ({ setSelectedImg, images }) => {
  const [isLoading, setIsLoading] = useState(true);
  console.log("isLoading", isLoading);
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <div className={`${styles.categoriesImage}`}>
      {images?.map((image, i) => {
        return (
          <div key={image.id} className={styles.imgPadding}>
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGELINK}${image.category}/${image.categoryChild}/${image.img}`}
              onClick={() => setSelectedImg(image)}
              width={300}
              height={300}
              alt={image.img}
              objectFit="cover"
              className={cn("dura", isLoading ? "blur" : "notBlur")}
              onLoadingComplete={() => setIsLoading(false)}
            />
            {image.date ? <p>{image.date}</p> : ""}
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
