import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { connect } from "../dbConfig/dbConfig";
import Homestay from "../model/Homestay";


const sampleHomestays = [
  {
    title: "Mountain View Cottage",
    description: "Beautiful cottage with panoramic mountain views.",
    location: "Tehri, Uttarakhand",
    price: 2500,
    images: ["mountain1.jpg"],
    amenities: ["wifi", "parking", "bonfire"],
    rating: 4.7,
    category: "cottage",
  },
  {
    title: "Lake Side Retreat",
    description: "Peaceful stay near Tehri Lake.",
    location: "New Tehri",
    price: 3200,
    images: ["lake1.jpg"],
    amenities: ["wifi", "kitchen"],
    rating: 4.5,
    category: "homestay",
  },
  {
    title: "Forest Escape",
    description: "Stay surrounded by pine forests.",
    location: "Dhanaulti",
    price: 2800,
    images: ["forest1.jpg"],
    amenities: ["parking", "bonfire"],
    rating: 4.6,
    category: "cottage",
  },
  {
    title: "Sunrise Villa",
    description: "Luxury villa with sunrise view.",
    location: "Mussoorie",
    price: 5000,
    images: ["villa1.jpg"],
    amenities: ["wifi", "parking", "kitchen"],
    rating: 4.8,
    category: "villa",
  },
  {
    title: "River Edge Stay",
    description: "Relax beside the river.",
    location: "Rishikesh",
    price: 3500,
    images: ["river1.jpg"],
    amenities: ["wifi", "bonfire"],
    rating: 4.4,
    category: "homestay",
  }
];

async function seedDatabase() {
  try {
    // prevent accidental run in production — require FORCE_SEED env var
    if (process.env.NODE_ENV === "production" && process.env.FORCE_SEED !== "true") {
      console.error("Refusing to run seed in production without FORCE_SEED=true");
      process.exit(1);
    }

    await connect();

    await Homestay.deleteMany({});
    await Homestay.insertMany(sampleHomestays);

    console.log("Homestays inserted successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Seeding failed:", error);
  }
}

seedDatabase();