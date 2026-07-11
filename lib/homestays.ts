import { connect } from "@/dbConfig/dbConfig";
import Homestay from "@/model/Homestay";

export async function getLandingHomestays() {
  await connect();

  const homestays = await Homestay.find({
    isActive: true,
  })
    .sort({ createdAt: -1 })
    .limit(4)
    .lean();

  console.log("Homestays fetched:", homestays);

  return JSON.parse(JSON.stringify(homestays));
}