import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AccountState = { 
  id: number | null;
  username: string;
  password: string;
}


const initialState: AccountState = {
  id: null,
  username: "",
  password: ""
}

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    accountCreated(state, action: PayloadAction<AccountState>) {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.password = action.payload.password;
    }
  }
});

export const { accountCreated } = accountsSlice.actions;

export default accountsSlice;