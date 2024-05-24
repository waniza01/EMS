import { createSlice } from "@reduxjs/toolkit";
import { addItem, removeItem, setItem } from "./commonMethods";
import { EQUIPMENT_DATA } from "../data/EquipmentData";

const initialState = { items: EQUIPMENT_DATA, item: {} };
const equipmentSlice = createSlice({
  name: "equipment",
  initialState,
  reducers: {
    addEquipmentItem(state, action) {
      addItem(state.items, action.payload);
    },

    removeEquipmentItem(state, action) {
      removeItem(state.items, action.payload);
    },

    setEquipmentItem(state, action) {
      state.item = setItem(state.items, action.payload);
    },
  },
});

export const equipmentActions = equipmentSlice.actions;

export default equipmentSlice.reducer;
