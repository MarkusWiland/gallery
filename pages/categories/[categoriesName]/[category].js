import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";

import ImageGridChild from "../../../components/ImageGrid/ImageGridChild";
import Modal from "../../../components/Modal/Modal";
export default function Cat() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [categories, setCategories] = useState([]);
  console.log("categoriasdasdes", categories);
  const router = useRouter();
  console.log("router", router);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `/api/categories/${router.query.category}/${router.query.categoriesName}`
      );
      const json = await response.json();
      setCategories(json);
    };
    fetchData();
  }, [router.query.category, router.query.categoriesName]);
  return (
    <>
      <ImageGridChild categories={categories} setSelectedImg={setSelectedImg} />

      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
}
