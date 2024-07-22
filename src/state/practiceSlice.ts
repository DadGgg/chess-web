import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PracticeState = { 
  input: string;
}

const initialState: PracticeState = {
  input: ""
}

const practiceSlice = createSlice({
  name: "practice",
  initialState,
  reducers: {
    stuffHappened(state, action: PayloadAction<string>) {
      state.input = action.payload;
    }
  }
});

export const { stuffHappened } = practiceSlice.actions;

export default practiceSlice;