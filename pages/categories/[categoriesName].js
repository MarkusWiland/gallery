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
export default function CategoriesName() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [image, setImages] = useState([]);
  const [cat, setCat] = useState([]);

  const router = useRouter();
  const routerName = router.query.categoriesName;
  useEffect(() => {
    async function getdData() {
      let { data } = await supabaseAdmin.from("GalleryTable").select("*");
      const filterData = data.filter(
        (category) => category.category === routerName
      );

      setImages(filterData);
    }
    getdData();
  }, []);

  return (
    <div className="section">
      <div className={styles.buttonsDiv}>
        <CategoriesHeader image={image} />
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
