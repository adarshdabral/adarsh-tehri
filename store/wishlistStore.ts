import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistStore = {
  wishlist: number[];
  addToWishlist: (id: number) => void;
};

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set) => ({
      wishlist: [],

      addToWishlist: (id) =>
        set((state) => ({
          wishlist: [...state.wishlist, id],
        })),
    }),
    {
      name: "wishlist-storage",
    }
  )
);