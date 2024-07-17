import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGame } from "../state/side-effects/gamesThunk";
import { useAppDispatch, useAppSelector } from "../state/hooks";


export type GamesProps = {
}

export default function Games(props) {
    const [name, setGameName] = useState("");
    const dispatch = useAppDispatch();
    const game = useAppSelector(state => state.game);
    const header = <h1>
        Welcome, {game.name} - {game.id}
    </h1>;
    return <div>
        {!!game.name && header}
        <label>Game name:</label><input type="text" value={name} onChange={e => {
            setGameName(e.target.value);
        }} />
        
        <button onClick={e => {
            dispatch(createGame(name));
            alert(name);
        }}>
            Sign Up
        </button>
    </div>
}