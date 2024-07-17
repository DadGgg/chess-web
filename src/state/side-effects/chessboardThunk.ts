import axios from "axios"
import { dataLoaded } from "../appSlice";   // "../chessboardsSlice" ?
import { RootDispatch, GetRootState, store } from "../store";
import { chessboardCreated } from "../chessboardSlice";

export const createChessboard = (name: string) => {
    const createChessboardThunk = async (dispatch: RootDispatch, getState: GetRootState) => {
        const newChessboard = {
            name: name,
        }
        const response = await axios.post("http://localhost:3000/chessboards", newChessboard);
        dispatch(chessboardCreated(response.data));
    }
    return createChessboardThunk;
}