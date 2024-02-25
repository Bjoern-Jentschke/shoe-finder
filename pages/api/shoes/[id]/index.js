import dbConnect from "@/lib/db/connect";
import Shoe from "@/lib/db/models/Shoe";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const shoe = await Shoe.findById(id);

    if (!shoe) {
      response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(shoe);
  }
}
