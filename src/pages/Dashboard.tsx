import React from "react";
import { Chart } from "../components/Chart";
import { velocityInFreeFall } from "./data";

export type DashboardProps = {

}

export default function Dashboard(props: DashboardProps) {
    return <div>
        <h1>Dashboard</h1>
        <h2>hello</h2>
        <div style={{width: 1000, height: 450 }}>
            <Chart
                //line={{data: data, name: "Fibonacci"}}
                line={{data: velocityInFreeFall(), name: "Free Fall: Meters per Second"}}
                yAxisLabel="Velocity"
                xAxisLabel="Time"
                xAxisUnits="seconds"
                yAxisUnits="m/s"
            />
        </div>

    </div>;
}

