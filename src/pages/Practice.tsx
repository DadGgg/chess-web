import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { stuffHappened } from "../state/practiceSlice";

export type PracticeProps = {

}

export default function Practice(props: PracticeProps) {
    const [x, setX] = useState("");
    const dispatch = useAppDispatch();
    const reduxState = useAppSelector(s => s.practice);
    return <div>
        <h1>
            Practice
        </h1>
        <h2>
            {reduxState.input}
        </h2>
        
        <div>
            <label>
                Example    
            </label>

            <input value={x} onChange={(e) => {
                console.log(e.target.value); 
                setX(e.target.value);
            }}/>

            <button onClick={() => {
                const action = stuffHappened(x);
                dispatch(action)
            }}>
                Update Redux
            </button>

        </div>
        
        <button>
            <Link to={"/"}>
                Home Page
            </Link>
        </button> 
    </div>;
}

       