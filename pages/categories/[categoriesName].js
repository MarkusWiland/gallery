import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";
import { data } from "../../data";
import styles from "../../styles/Home.module.css";

import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import Modal from "../../components/Modal/Modal";
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
);
export default function CategoriesName() {
  useEffect(() => {
    async function getdData() {
      let { data } = await supabaseAdmin
        .from("GalleryTable")
        .select("img,category");
      console.log("data", data);
      const filterData = data.filter(
        (category) => category.category === router.query.categoriesName
      );
      console.log(filterData);
    }
    getdData();
  }, []);

  const [selectedImg, setSelectedImg] = useState(null);
  console.log(selectedImg);
  const router = useRouter();
  const routerName = router.query.categoriesName;
  console.log("routerName", router.query);
  const find = data.categories.find((o) => o.category === routerName);

  return (
    <div className="section">
      <div className={styles.buttonsDiv}>
        <button className={styles.button} onClick={() => router.back()}>
          Tillbaka
        </button>
        {find?.pictures.map((o, i) => (
          <button key={o.category} className={styles.button}>
            <Link href={`/categories/${find.category}/${o.category}`} key={i}>
              {o.category}
            </Link>
          </button>
        ))}
      </div>
      <div>
        <ImageGrid setSelectedImg={setSelectedImg} find={find} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </div>
  );
}
