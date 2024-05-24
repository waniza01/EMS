import { createSlice } from "@reduxjs/toolkit";
import { FOOD_DATA } from "../data/FoodData";
import { addItem, removeItem, setItem } from "./commonMethods";

const initialState = { items: FOOD_DATA, item: {} };
const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFoodItem(state, action) {
      addItem(state.items, action.payload);
    },

    removeFoodItem(state, action) {
      removeItem(state.items, action.payload);
    },

    setFoodItem(state, action) {
      state.item = setItem(state.items, action.payload);
    },
  },
});

export const foodAction = foodSlice.actions;

export default foodSlice.reducer;
