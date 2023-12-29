import { Schema, model, models } from "mongoose";

const sellerSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Enter user id"],
  },
  firstname: {
    type: String,
    required: [true, "Enter seller firstname"],
  },
  lastname: {
    type: String,
    required: [true, "Enter seller lastname"],
  },
});

const ProductSchema = new Schema(
  {
    id: {
      type: String,
      unique: [true, "Product id exists"],
      required: [true, "Enter Product id"],
    },
    name: {
      type: String,
      unique: [true, "Product id exists"],
      required: [true, "Enter product name"],
    },
    images: {
      type: Array,
      default: [],
    },
    category: {
      type: String,
      required: [true, "Enter product category"],
    },
    price: {
      type: Number,
      required: [true, "Enter product price"],
    },
    quantity: {
      type: Number,
      required: [true, "Enter product quantity"],
    },
    discount: {
      type: Number,
      default: 0,
    },
    seller: sellerSchema,
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;

