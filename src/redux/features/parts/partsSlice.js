import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  processor: null,
  ram: null,
  storage: null,
  powerSupply: null,
  monitor: null,
  motherboard: null,
};

const partsSlice = createSlice({
  name: "parts",
  initialState,
  reducers: {
    setMonitor: (state, action) => {
      state.monitor = action.payload;
    },
    setRam: (state, action) => {
      state.ram = action.payload;
    },
    setStorage: (state, action) => {
      state.storage = action.payload;
    },
    setProcessor: (state, action) => {
      state.processor = action.payload;
    },
    setPowerSupply: (state, action) => {
      state.powerSupply = action.payload;
    },
    setMotherboard: (state, action) => {
      state.motherboard = action.payload;
    },
    removeMonitor: (state) => {
      state.monitor = null;
    },
    removeRam: (state) => {
      state.ram = null;
    },
    removeStorage: (state) => {
      state.storage = null;
    },
    removeProcessor: (state) => {
      state.processor = null;
    },
    removePowerSupply: (state) => {
      state.powerSupply = null;
    },
    removeMotherboard: (state) => {
      state.motherboard = null;
    },
  },
});

export const {
  setMonitor,
  setMotherboard,
  setProcessor,
  setPowerSupply,
  setRam,
  setStorage,
  removeMonitor,
  removeMotherboard,
  removePowerSupply,
  removeProcessor,
  removeRam,
  removeStorage,
} = partsSlice.actions;
export default partsSlice.reducer;
