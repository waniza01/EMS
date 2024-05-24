import { createSlice } from "@reduxjs/toolkit";
import { removeItem, setItem } from "./commonMethods";
import { VENUE_DATA } from "../data/venueData";

const initialState = { venues: VENUE_DATA, venue: {} };
const venueSlice = createSlice({
  name: "venue",
  initialState,
  reducers: {
    addVenue(state, action) {
      const existingItemIndex = state.venues.findIndex(
        (venue) => venue.id === action.payload.id
      );

      if (existingItemIndex === -1) {
        const { name, place, cost, contact, image } = action.payload;
        const updateVenue = {
          id: "" + Math.floor(Math.random() * 9999),
          name,
          place,
          cost,
          contact,
          image,
        };

        state.venues.push(updateVenue);
      } else {
        state.venues[existingItemIndex] = action.payload;
      }
    },

    removeVenue(state, action) {
      removeItem(state.venues, action.payload);
    },

    setVenue(state, action) {
      state.venue = setItem(state.venues, action.payload);
    },
  },
});

export const venueActions = venueSlice.actions;

export default venueSlice.reducer;
