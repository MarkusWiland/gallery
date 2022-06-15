import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";

import styles from "../../styles/Home.module.css";

import { createClient } from "@supabase/supabase-js";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import Modal from "../../components/Modal/Modal";
import CategoriesHeader from "../../components/CategoriesHeader/CategoriesHeader";
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
);
export default function CategoriesName({ images }) {
  console.log("IMAGES", images);
  const [selectedImg, setSelectedImg] = useState(null);

  const [image, setImages] = useState(images);
  const [categoryNames, setCategoryNames] = useState(images);

  return (
    <div className="section">
      <div className={styles.buttonsDiv}>
        <CategoriesHeader images={categoryNames} setImages={setImages} />
      </div>
      <div>
        <ImageGrid setSelectedImg={setSelectedImg} images={image} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </div>
  );
}
export const getStaticPaths = async () => {
  const { data, error } = await supabaseAdmin.from("GalleryTable").select("*");
  const paths = data.map((slug) => {
    return {
      params: { categoriesName: slug.category },
    };
  });
  return { paths, fallback: false };
};
export async function getStaticProps({ params }) {
  const { data, error } = await supabaseAdmin
    .from("GalleryTable")
    .select("*")
    .eq("category", params.categoriesName)
    .order("created_at", { ascending: false });

  return {
    props: {
      images: data,
    },
  };
}
