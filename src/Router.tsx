import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from "./pages/App";
import Dashboard from "./pages/Dashboard";
import BarGraph from "./components/BarGraph";
import { Accounts } from "./pages/Accounts";

export function AppRouter() {
    const router = createBrowserRouter(createRoutesFromElements(<>
        <Route element={<App/>} path="/"/>
        <Route element={<Dashboard/>} path="/dashboard"/>
        <Route element={<BarGraph/>} path="/bar-graph"/>
        <Route element={<Accounts/>} path="/accounts"/>
    </>));

    return <RouterProvider router={router}/>;
}

