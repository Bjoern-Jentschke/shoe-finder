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

  if (request.method === "PUT") {
    const { isFavorite, ...shoeData } = request.body;
    await Shoe.findByIdAndUpdate(id, { ...shoeData, isFavorite });
    return response.status(200).json({ status: `Shoe ${id} updated` });
  }
}
