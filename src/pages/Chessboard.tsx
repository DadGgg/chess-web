import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createChessboard } from "../state/side-effects/chessboardThunk";
import { useAppDispatch, useAppSelector } from "../state/hooks";


export type ChessboardProps = {
}

export default function Chessboard(props) {
    const [name, setChessboardName] = useState("");
    const dispatch = useAppDispatch();
    const chessboard = useAppSelector(state => state.chessboard);
    const header = <h1>
        Welcome, {chessboard.name} - {chessboard.id}
    </h1>;
    return <div>
        {!!chessboard.name && header}
        <label>Chessboard name:</label><input type="text" value={name} onChange={e => {
            setChessboardName(e.target.value);
        }} />
        
        <button onClick={e => {
            dispatch(createChessboard(name));
            alert(name);
        }}>
            Sign Up
        </button>
    </div>
}