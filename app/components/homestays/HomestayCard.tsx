"use client";

import Link from "next/link";
import { useWishlistStore } from "../../../store/wishlistStore";

type HomestayCardProps = {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
};

export default function HomestayCard({
  id,
  title,
  location,
  price,
  image,
}: HomestayCardProps) {
  const { addToWishlist } = useWishlistStore();

  return (
    <Link href={`/homestays/${id}`}>
      <div
  className="
  bg-white
  rounded-3xl
  overflow-hidden
  shadow-lg
  hover:shadow-2xl
  transition-all
  duration-300
  cursor-pointer
  "
>
    <div className="overflow-hidden">
  <img
    src={image}
    alt={title}
    className="h-64 w-full object-cover transition duration-500 hover:scale-110"
  />
</div>

        <div className="p-6">
         <h2 className="font-bold text-2xl text-gray-900">
            {title}
          </h2>

          <p className="text-gray-500 mt-2">
            {location}
          </p>

          <p className="font-bold text-xl mt-4 text-gray-900">
            ₹{price}/night
          </p>

        <button
  onClick={(e) => {
    e.preventDefault();
    addToWishlist(id);
  }}
  className="
  mt-4
  w-full
  bg-gray-900
  hover:bg-black
  text-white
  py-3
  rounded-xl
  transition
  "
>
  ❤️ Add to Wishlist
</button>
        </div>
      </div>
    </Link>
  );
}