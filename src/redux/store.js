import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import partsReducer from "./features/parts/partsSlice";

const persistConfig = {
  key: "root",
  storage,
};
const persistedPartsReducer = persistReducer(persistConfig, partsReducer);

const store = configureStore({
  reducer: {
    parts: persistedPartsReducer,
  },
});

export const persistor = persistStore(store);
export default store;
