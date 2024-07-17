import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type GameState = { 
  id: number | null;
  name: string;
}


const initialState: GameState = {
  id: null,
  name: ""
}

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    gameCreated(state, action: PayloadAction<GameState>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
    }
  }
});

export const { gameCreated } = gamesSlice.actions;

export default gamesSlice;