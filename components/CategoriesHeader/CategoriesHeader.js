import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
export default function CategoriesHeader({ image }) {
  const filtData = image.filter(
    (a, i, self) =>
      self.findIndex((o) => o.categoryChild === a.categoryChild) === i
  );
  console.log("filtCat", filtData);
  const router = useRouter();
  console.log(router.query);
  const routerName = router.query.categoriesName;
  return (
    <>
      <button className={styles.button} onClick={() => router.back()}>
        Tillbaka
      </button>
      {filtData &&
        filtData.map((o, i) => (
          <button key={i} className={styles.button}>
            <Link href={`/categories/${routerName}/${o.categoryChild}`} key={i}>
              {o.categoryChild}
            </Link>
          </button>
        ))}
    </>
  );
}
