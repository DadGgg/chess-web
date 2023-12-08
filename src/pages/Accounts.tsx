import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../state/side-effects/accountsThunk";
import { useAppDispatch, useAppSelector } from "../state/hooks";

export function Accounts(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    const account = useAppSelector(state => state.account);
    const header = <h1>
        Welcome, {account.username} - {account.id}
    </h1>;
    return <div>
        {!!account.username && header}
        <label>Username:</label><input type="text" value={username} onChange={e => {
            setUsername(e.target.value);
        }} />
        <label>Password:</label><input type="text" value={password} onChange={e => {
            setPassword(e.target.value);
        }} />
        <button onClick={e => {
            dispatch(createAccount(username, password));
            alert(username+password);
        }}>
            Sign Up
        </button>
    </div>
}