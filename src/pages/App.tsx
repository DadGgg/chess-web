import React, { useState } from "react";
import { Chart } from "../components/Chart";
import { data, velocityInFreeFall } from "./data";

import { useAppSelector, useAppDispatch } from '../state/hooks'
import { todoAdded, todoToggled } from '../state/appSlice'
import { loadData } from "../state/side-effects/appThunk";
import { Link } from "react-router-dom";

export function App(props) {
    const [inputText, setInputText] = useState("");
    const [todoId, setTodoId] = useState(1);
    const todos = useAppSelector(state => state.app.todos);
    const exampleData = useAppSelector(state => state.app.exampleData);
    const dispatch = useAppDispatch();
    return <div>
        <h1>Welcome to our website!</h1>
        <button>
            <Link to={"/accounts"}>
                Sign Up
            </Link>
        </button> 
        
        <div style={{width: 1000, height: 450 }}>
            <Chart
                //line={{data: data, name: "Fibonacci"}}
                line={{data: velocityInFreeFall(), name: "Free Fall: Meters per Second"}}
                yAxisLabel="Velocity"
                xAxisLabel="Time"
                xAxisUnits="s"
                yAxisUnits="m/s"
            />
        </div>


        <input value={inputText} onChange={e => {
            setInputText(e.target.value); 
        }}/>
        <button onClick={e => {
            setTodoId(todoId + 1);
            const todoAddedAction = todoAdded({id: todoId, text: inputText});
            dispatch(todoAddedAction);
        }}>Try this!</button>
        {todos.map(todo => <li key={todo.id}>
            {todo.text} <input type="checkbox" checked={todo.completed} onChange={e => dispatch(todoToggled({id: todo.id}))}/>
        </li>)}
        <button onClick={e => dispatch(loadData("", ""))}>Load data!</button>
        {JSON.stringify(exampleData)}
        
    </div>;
}