import App from "@/App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import { runtimeConfig } from "@/config";
import serialize from "serialize-javascript";
import "@/i18n";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST || "");

const server = express();
server
    .disable("x-powered-by")
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR || ""))
    .get("/*", (req, res) => {
        const context: any = {};
        const markup = renderToString(
            <StaticRouter context={context} location={req.url}>
                <App />
            </StaticRouter>
        );

        if (context.url) {
            res.redirect(context.url);
        } else {
            res.status(200).send(
                `<!doctype html>
    <html lang="">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
            assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ""
        }
        ${
            process.env.NODE_ENV === "production"
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
      </head>
      <body>
        <script>window.env = ${serialize(runtimeConfig)};</script>   
          <div id="root">${markup}</div>
      </body>
    </html>`
            );
        }
    });

export default server;
