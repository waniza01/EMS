import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorMessage: "",
  errorModal: false,
  successfulMessage: {},
  successfulModal: false,
};
const ModalSlice = createSlice({
  initialState,
  name: "Modal",
  reducers: {
    openErrorModal(state) {
      state.errorModal = true;
    },

    closeErrorModal(state) {
      state.errorModal = false;
    },

    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },

    openSuccessfulModal(state) {
      state.successfulModal = true;
    },

    closeSuccessModal(state) {
      state.successfulModal = false;
    },

    setSuccessfulMessage(state, action) {
      state.successfulMessage = action.payload;
    },
  },
});

export const ModalActions = ModalSlice.actions;

export default ModalSlice.reducer;
