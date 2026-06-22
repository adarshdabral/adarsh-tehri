type AppState = {
  currentUserId: string;
  wishlist: Array<unknown>;
  cart: Array<{ qty: number }>;
  setRole: (role: string) => void;
};

export const useApp = <T>(selector: (s: AppState) => T): T => {
  const state: AppState = {
    currentUserId: "demo-1",
    wishlist: [],
    cart: [],
    setRole: () => {},
  };

  return selector(state);
};
