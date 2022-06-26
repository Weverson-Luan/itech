import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "Buscar Usuários",
  async (data: any) => {
    console.log("chegou date", data);
    const id = "d8260605-96b0-47d3-a235-69fcf37175bb";
    return await axios
      .patch(`http://localhost:8080/users/password/${id}`, {
        password: data?.password,
        password_new: data.password_new,
        password_confirmed: data.password_confirmed,
      })
      .then((response) => {
        alert("Atuliazado");
      })
      .catch((error) => console.log("error em atualiza senha!", error));
  }
);

/**
 * Slice
 */
export const slice = createSlice({
  name: "user",
  initialState: {
    data: {},
    isLogged: false,
  },
  reducers: {
    changerUser(state: any, { payload }: any) {
      return { ...state, isLogged: true, name: payload };
    },
    logout(state: any) {
      return {
        ...state,
        isLogged: false,
        name: "",
      };
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled as any]: (state: any, action: any) =>
      (state = action.payload),
  },
});

export const { changerUser, logout } = slice.actions;

export const selectUser = (state: any) => state.user;

export default slice.reducer;
