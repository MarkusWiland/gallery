import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Home.module.css";
import ModalImage from "react-modal-image";
import { useAuth } from "../Auth/Auth";
const ImageGrid = ({ images }) => {
  const { user, signOut } = useAuth();

  // const cn = (...classes) => {
  //   return classes.filter(Boolean).join(" ");
  // };
  const deleteImage = (id) => {
    console.log(id);
  };
  return (
    <div className={`${styles.categoriesImage}`}>
      {images?.map((image, i) => {
        return (
          <>
            <motion.div layout key={image.id} className={styles.galleryItem}>
              <div className={styles.galleryImage} key={image.id}>
                <ModalImage
                  small={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGELINK}${image.category}/${image.categoryChild}/${image.img}`}
                  large={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGELINK}${image.category}/${image.categoryChild}/${image.img}`}
                  alt={
                    image.alt ? `${image.alt} - ${image.date}` : `${image.date}`
                  }
                  hideDownload={true}
                  hideZoom={true}
                  className={styles.galleryImg}
                />
              </div>
              {user ? (
                <>
                  <div className={styles.galleryText}>@MarkusWiland</div>
                  <button
                    className={styles.galleryButton}
                    onClick={() => deleteImage(image.id)}
                  >
                    delete
                  </button>
                </>
              ) : (
                <div className={styles.galleryText}>@MarkusWiland</div>
              )}
            </motion.div>
          </>
        );
      })}
    </div>
  );
};

export default ImageGrid;

/* <Image
                layout="fill"
                alt="hej"
                width={300}
                src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGELINK}${image.category}/${image.categoryChild}/${image.img}`}
                placeholder={
                  <Image
                    alt="hej"
                    preview={false}
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGELINK}${image.category}/${image.categoryChild}/${image.img}`}
                    width={300}
                  />
                }
              /> */

// <Image
// preview={{ visible: false }}
//  src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGELINK}${image.category}/${image.categoryChild}/${image.img}`}
//  onClick={() => {
//    setSelectedImg(image);
//   showModal();
//   }}
//  onClick={() => setVisible(true)}
//   width={300}
//   height={300}
//   alt={image.img}
//    objectFit="cover"
//    className={cn("dura", isLoading ? "blur" : "notBlur")}
//    onLoadingComplete={() => setIsLoading(false)}
//  />
//   {image.date ? <p>{image.date}</p> : ""}
