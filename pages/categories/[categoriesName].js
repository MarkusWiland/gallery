import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";

import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import ImageGrid from "../../components/ImageGrid/ImageGrid";

import CategoriesHeader from "../../components/CategoriesHeader/CategoriesHeader";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
);
export default function CategoriesName({ images }) {
  const [image, setImages] = useState(images);
  const [categoryNames, setCategoryNames] = useState(images);
  // const cn = (...classes) => {
  //   return classes.filter(Boolean).join(" ");
  // };
  return (
    <div className="section">
      <div className={styles.buttonsDiv}>
        <CategoriesHeader images={categoryNames} setImages={setImages} />
      </div>
      <motion.div animate={{ opacity: 1 }} initinal={{ opcaity: 0 }} layout>
        <ImageGrid images={image} />
      </motion.div>
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
  try {
    const { data, error } = await supabaseAdmin
      .from("GalleryTable")
      .select("*")
      .eq("category", params.categoriesName)
      .order("created_at", { ascending: false });
    if (error || !data) {
      return { notFound: true };
    }
    return {
      props: {
        images: data,
      },
      revalidate: 10,
    };
  } catch (e) {
    return { notFound: true };
  }
}
