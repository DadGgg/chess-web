import axios from "axios"
import { dataLoaded } from "../appSlice";   // "../gamesSlice" ?
import { RootDispatch, GetRootState, store } from "../store";
import { gameCreated } from "../gamesSlice";

export const createGame = (name: string) => {
    const createGameThunk = async (dispatch: RootDispatch, getState: GetRootState) => {
        const newGame = {
            name: name
        }
        const response = await axios.post("http://localhost:3000/games", newGame);
        dispatch(gameCreated(response.data));
    }
    return createGameThunk;
}