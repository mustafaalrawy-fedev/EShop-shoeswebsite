import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// Define Product type
import { Product } from '@/types/Product';

interface CartState {
  cart: Product[];
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Async thunk to fetch products
export const getProducts = createAsyncThunk<Product[]>(
  'cart/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/data/products.json');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      return data.products;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return rejectWithValue(errorMessage);
    }
  }
);

const initialState: CartState = {
  cart: [],
  products: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProductIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingProductIndex >= 0) {
        // Increase quantity if product already exists
        const updatedCart = [...state.cart];
        const product = { ...updatedCart[existingProductIndex] };
        product.quantity = (product.quantity || 1) + 1;
        updatedCart[existingProductIndex] = product;
        state.cart = updatedCart;
      } else {
        // Add new product with quantity 1
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productIndex = state.cart.findIndex(item => item.id === action.payload);
      if (productIndex >= 0) {
        const product = { ...state.cart[productIndex] };
        if (product.quantity && product.quantity > 1) {
          // Decrease quantity if more than 1
          product.quantity -= 1;
          state.cart[productIndex] = product;
        } else {
          // Remove product if quantity is 1 or undefined
          state.cart = state.cart.filter(p => p.id !== action.payload);
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;