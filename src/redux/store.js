import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use LocalStorage for persistence
import userReducer from "./userSlice";

const userPersistConfig = {
    key: "user",
    storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        // Add other reducers if you have them
    },
});

export const persistor = persistStore(store);
