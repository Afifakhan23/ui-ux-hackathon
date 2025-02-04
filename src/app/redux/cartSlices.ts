import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define Cart Item Interface
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
}

// Define Cart State Interface
interface CartState {
  items: CartItem[];
}

// Load initial cart state from localStorage
const loadCartFromLocalStorage = (): CartState => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : { items: [] };
  }
  return { items: [] };
};

// Initial State
const initialState: CartState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, size, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push(action.payload);
      }

      // Save updated state to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action: PayloadAction<{ id: string; size: string }>) => {
      state.items = state.items.filter(
        (item) => !(item.id === action.payload.id && item.size === action.payload.size)
      );

      // Save updated state to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },

    // New updateQuantity reducer to update the quantity of a cart item
    updateQuantity: (state, action: PayloadAction<{ id: string; size: string; quantity: number }>) => {
      const { id, size, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity = quantity; // Update the quantity of the existing item
      }

      // Save updated state to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // Define Cart Item Interface
// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
//   size: string;
// }

// // Define Cart State Interface
// interface CartState {
//   items: CartItem[];
// }

// // Load initial cart state from localStorage
// const loadCartFromLocalStorage = (): CartState => {
//   if (typeof window !== "undefined") {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : { items: [] };
//   }
//   return { items: [] };
// };

// // Initial State
// const initialState: CartState = loadCartFromLocalStorage();

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       const { id, size, quantity } = action.payload;
//       const existingItem = state.items.find(
//         (item) => item.id === id && item.size === size
//       );

//       if (existingItem) {
//         existingItem.quantity += quantity;
//       } else {
//         state.items.push(action.payload);
//       }

//       // Save updated state to localStorage
//       localStorage.setItem("cart", JSON.stringify(state));
//     },

//     removeFromCart: (state, action: PayloadAction<{ id: string; size: string }>) => {
//       state.items = state.items.filter(
//         (item) => !(item.id === action.payload.id && item.size === action.payload.size)
//       );

//       // Save updated state to localStorage
//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
