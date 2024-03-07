import { createSlice } from "@reduxjs/toolkit";

const initialState = { category: "mobiles" };

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: { selectedCategory: (state, action) => {} },
});

export const { selectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
