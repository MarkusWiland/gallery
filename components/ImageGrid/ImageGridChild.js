import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
const ImageGridChild = ({ setSelectedImg, categories }) => {
  return (
    <section className="section">
      <div className={styles.gridChilds}>
        {categories.map((category, i) => {
          return (
            <>
              <div key={category.img} onClick={() => setSelectedImg(category)}>
                <Image
                  src={`https://wkvxfukoitljukptneli.supabase.co/storage/v1/object/public/gallery/${category.category}/${category.categoryChild}/${category.img}`}
                  width={200}
                  height={200}
                  alt={category.img}
                />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ImageGridChild;
