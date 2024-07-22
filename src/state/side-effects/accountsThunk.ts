import axios from "axios"
import { dataLoaded } from "../appSlice";
import { RootDispatch, GetRootState, store } from "../store";
import { accountCreated, accountCreationFailed } from "../accountsSlice";

export const createAccount = (username: string, password: string) => {
    const createAccountThunk = async (dispatch: RootDispatch, getState: GetRootState) => {
        const newUser = {
            username: username,
            password: password
        }
        try {
            const response = await axios.post("http://localhost:3000/accounts", newUser);
            const action = accountCreated(response.data);
            dispatch(action); 
        } catch(error: any) {
            dispatch(accountCreationFailed(error.response.data.message)) 
        }
    }
    return createAccountThunk;
}