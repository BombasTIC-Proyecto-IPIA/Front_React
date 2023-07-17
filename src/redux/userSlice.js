import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dni: "",
    name: "",
    userType: "",
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const{dni, name, userType} = action.payload;
            console.log(action.payload);
            state.dni = dni;
            state.name = name;
            state.userType = userType;
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
