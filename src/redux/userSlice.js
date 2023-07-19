import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use LocalStorage for persistence

const initialState = {
    dni: "",
    name: "",
    userType: "",
}

const userPersistConfig = {
    key: 'user',
    storage,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { dni, name, userType } = action.payload;
            console.log(action.payload);
            state.dni = dni;
            state.name = name;
            state.userType = userType;
        }
    }
});

// Wrap the reducer with persistReducer
const persistedUserReducer = persistReducer(userPersistConfig, userSlice.reducer);

export const { setUser } = userSlice.actions;
export default persistedUserReducer; // Return the persisted reducer
