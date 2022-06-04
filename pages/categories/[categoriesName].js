import { useRouter } from "next/router";
import React from "react";
import { data } from "../../data";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
export default function Categories() {
  const router = useRouter();

  const routerName = router.query.categoriesName;
  const find = data.categories.find((o) => o.category === routerName);
  const showImgModal = (e) => {
    const target = e.target.src;
    console.log(target);
  };
  return (
    <div className="section">
      <button onClick={() => router.back()}>Tillbaka</button>
      <div className={`${styles.categoriesImage}`}>
        {find?.pictures.map((o, i) => (
          <>
            <figure className={styles.catImg} onClick={showImgModal} key={i}>
              <Image width={500} height={500} src={o.img} key={i} alt={o.img} />
            </figure>
          </>
        ))}
      </div>
    </div>
  );
}
