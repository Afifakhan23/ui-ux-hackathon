import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/app/redux/cartSlices";

// Create Store
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

// Subscribe to store updates and save cart state to localStorage
store.subscribe(() => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
  }
});

export default store;

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
