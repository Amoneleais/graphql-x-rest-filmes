const express = require("express");
const app = express();
const routes = require("./src/routes/router");
const bodyParser = require("body-parser");
const PORT = 3001;

app.use(express.json());
app.use("/api", routes);

const server = app.listen(PORT, () => {
  console.log(
    `\x1b[35m\n🚀 HTTP server running on http://localhost:${PORT}\x1b[34m`
  );
});

module.exports = { app, server };
