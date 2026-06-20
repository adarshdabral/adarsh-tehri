import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide product name"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Please provide description"],
    },

    price: {
      type: Number,
      required: [true, "Please provide price"],
      min: [0, "Price cannot be negative"],
    },

    mrp: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      default: "",
    },

    vendor: {
      type: String,
      required: [true, "Please provide vendor name"],
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    stock: {
      type: Number,
      default: 0,
    },

    category: {
      type: String,
      default: "local-product",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.products ||
  mongoose.model("products", productSchema);

export default Product;