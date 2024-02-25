import dbConnect from "@/lib/db/connect";
import Shoe from "@/lib/db/models/Shoe";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const shoes = await Shoe.find();
    return response.status(200).json(shoes);
  }
}
