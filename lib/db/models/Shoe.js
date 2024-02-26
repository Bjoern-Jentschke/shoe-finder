import mongoose from "mongoose";
const { Schema } = mongoose;

const shoeSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  weight: { type: Number, required: true },
  runType: { type: String, required: true },
  absorption: { type: String, required: true },
  shoeType: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  // favorite: { type: Boolean, required: false },
});

const Shoe = mongoose.models.Shoe || mongoose.model("Shoe", shoeSchema);

export default Shoe;
