import path from "path";
import fs from "fs";

import express from "express";
import ReactDOMServer from "react-dom/server.js";

import App from "./App.js";

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/", (req, res) => {
  const page = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve("../client/dist/index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Internal server error.");
    }

    // return res.status(200).send("Ok");

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${page}</div>`)
    );
  });
});

app.use(express.static("../client/dist"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
