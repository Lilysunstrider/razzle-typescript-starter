import App from "@/App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { hydrate } from "react-dom";
import "@/i18n";

hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
// @ts-ignore
const hot = module.hot;
if (hot) {
    hot.accept();
}
