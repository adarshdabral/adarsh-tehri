import { connect } from "@/dbConfig/dbConfig";
import Activity from "@/model/Activity";

export async function getLandingActivities() {
  await connect();

  const activities = await Activity.find({
    isActive: true,
  })
    .sort({ createdAt: -1 })
    .limit(6)
    .lean();

  return JSON.parse(JSON.stringify(activities));
}