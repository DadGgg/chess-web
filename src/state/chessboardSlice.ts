import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ChessboardState = { 
  id: number | null;
  name: string;
}


const initialState: ChessboardState = {
  id: null,
  name: ""
}

const chessboardsSlice = createSlice({
  name: "chessboard",
  initialState,
  reducers: {
    chessboardCreated(state, action: PayloadAction<ChessboardState>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
    }
  }
});

export const { chessboardCreated } = chessboardsSlice.actions;

export default chessboardsSlice;