import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { data } from "../data";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
);
export default function Home({ images }) {
  console.log("IMAGES", images);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("/api/categories/categories");
  //     const json = await response.json();
  //     setCategories(json);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="section">
        <h1>{data.name}</h1>
        <h3>{data.location}</h3>
        <section className={styles.grid}>
          {/* {images
            .map((o) => o.category)
            .filter((o, i, self) => self.indexOf(o) === i)
            .map((category, i) => (
              <div className={styles.gridItem} key={i}>
                <h2>{category}</h2>
                <div className={`${styles.pic}`}>
                  {images.map((o, i) => {
                    if (o.category === category) {
                      return (
                        <Link href={`/categories/${o.category}`} key={i}>
                          <span>
                            <Image
                              src={o.img}
                              width={300}
                              height={300}
                              alt={o.img}
                            />
                            <p className={styles.pictureDate}>{o.date}</p>
                          </span>
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            ))} */}
          {/* {categories &&
            categories.categories?.map((category, i) => (
              <div className={styles.gridItem} key={i}>
                <h4 className={styles.categories}>{category.category}</h4>
                <div className={`${styles.main} ${styles.pic}`}>
                
                  {category.pictures.map((picture) =>
                    picture.images.map((picture, ind) => (
                      <Link href={`/categories/${category.category}`} key={ind}>
                        <span>
                          <Image
                            src={picture.img}
                            width={300}
                            height={300}
                            key={ind}
                            alt={picture.img}
                          />
                          <p className={styles.pictureDate}>{picture.date}</p>
                        </span>
                      </Link>
                    ))
                  )} 
                </div>
              </div>
            ))} */}
        </section>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const { data, error } = await supabaseAdmin.storage
    .from("gallery")
    .list("categories/sport", {
      limit: 100,
      offset: 0,
    });
  return {
    props: {
      images: data,
    },
  };
}
// export async function getStaticProps() {
//   const results = await fetch(
//     `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
//     {
//       headers: {
//         Authorization: `Basic ${Buffer.from(
//           process.env.CLOUDINARY_API_KEY +
//             ":" +
//             process.env.CLOUDINARY_API_SECRET
//         ).toString("base64")}`,
//       },
//     }
//   ).then((r) => r.json());

//   const { resources } = results;
//   const images = resources.map((resource) => {
//     return {
//       img: resource.secure_url,
//       url: resource.url,
//       width: resource.width,
//       height: resource.height,
//       id: resource.asset_id,
//       title: resource.public_id,
//       date: resource.created_at,
//     };
//   });
//   console.log("results", results);
//   return {
//     props: {
//       images,
//     },
//   };
// }
