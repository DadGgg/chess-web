import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AccountState = { 
  id: number | null;
  username: string;
  password: string;
  error: string;
}

const initialState: AccountState = {
  id: null,
  username: "",
  password: "",
  error: ""
}

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    accountCreated(state, action: PayloadAction<AccountState>) {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    accountCreationFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
    }
  }
});

export const { accountCreated, accountCreationFailed } = accountsSlice.actions;

export default accountsSlice;