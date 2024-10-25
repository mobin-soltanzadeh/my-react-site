import React from "react";
import { useState, useRoutes } from "react-router";



import routes from "./routes"

export default function App() {
    let router = useRoutes(routes);

    return (
        <div className="App">
            {router}
        </div>
    );
}
