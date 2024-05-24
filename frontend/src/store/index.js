import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./FoodSlice";
import equipmentReducer from "./EquipmentSlice";
import venueReducer from "./VenueSlice";
import authReducer from "./AuthSlice";
import modalReducer from "./ModalSlice";

const store = configureStore({
  reducer: {
    food: foodReducer,
    equipment: equipmentReducer,
    venue: venueReducer,
    auth: authReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
