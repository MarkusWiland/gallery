import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
export default function CategoriesHeader({ images, setImages }) {
  const router = useRouter();
  const filtData = images.filter(
    (a, i, self) =>
      self.findIndex((o) => o.categoryChild === a.categoryChild) === i
  );
  const [categoryChildSelected, setCategoryChildSelected] = useState(null);
  const filt = images.filter((a) => a.categoryChild === categoryChildSelected);
  useEffect(() => {
    if (filt.length > 0) {
      setImages(filt);
    }
  }, [categoryChildSelected]);
  return (
    <>
      <button className={styles.button} onClick={() => router.back()}>
        Tillbaka
      </button>
      {filtData?.map((o, i) => (
        <div key={o.id} className={styles.button}>
          <button
            // href={`/categories/${routerName}/${o.categoryChild}`}
            onClick={() => setCategoryChildSelected(o.categoryChild)}
          >
            {o.categoryChild}
          </button>
        </div>
      ))}
    </>
  );
}
