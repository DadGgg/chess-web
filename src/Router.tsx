import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./pages/App";
import Dashboard from "./pages/Dashboard";
import Chessboard from "./pages/Chessboard";
import Games from "./pages/Games";
import BarGraph from "./components/BarGraph";
import { Accounts } from "./pages/Accounts";
import Practice from "./pages/Practice";

export function AppRouter() {
    const router = createBrowserRouter(createRoutesFromElements(<>
        <Route element={<App/>} path="/"/>
        <Route element={<Dashboard/>} path="/dashboard"/>
        <Route element={<Chessboard/>} path="/chessboard"/>
        <Route element={<BarGraph/>} path="/bar-graph"/>
        <Route element={<Accounts/>} path="/accounts"/>
        <Route element={<Games/>} path="/games"/>
        <Route element={<Practice/>} path="/practice"/>
    </>));

    return <RouterProvider router={router}/>;
}

