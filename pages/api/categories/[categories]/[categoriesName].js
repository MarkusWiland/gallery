import { data } from "../../../../data";

export default function handler(req, res) {
  console.log(req.query);
  const categories = req.query.categories;
  const categoriesName = req.query.categoriesName;
  console.log("categoriesName", categoriesName);

  const aa = data.categories.find(
    (o) => o.category === categoriesName
  ).pictures;
  const ee = aa.find((o) => o.category === categories);
  console.log(ee);

  // const find = data?.categories.pictures.find(
  //   (o) => o.category.toLowerCase() === categoriesName.toLowerCase()
  // );

  if (req.method === "GET") {
    res.status(200).json(ee.images);
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
