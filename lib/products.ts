import { connect } from "@/dbConfig/dbConfig";
import Product from "@/model/Product";

export async function getLandingProducts() {
  await connect();

  const products = await Product.find({
    isActive: true,
  })
    .sort({ createdAt: -1 })
    .limit(6)
    .lean();

  return JSON.parse(JSON.stringify(products));
}