import { data } from "../../../data";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
