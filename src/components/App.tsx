import React from "react";
import "reset-css";
import style from "../styles/_global.scss";
import AppRouter from "./AppRouter";

interface AppProps {}

function App({}: AppProps) {
    return <AppRouter />;
}

export default App;
