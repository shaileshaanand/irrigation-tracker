var cors = require("cors");
const express = require("express");

require("express-async-errors");

const errorHandlerMiddleware = require("./middleware/errorHandler");
const moisturePingRouter = require("./routes/MoisturePing");
const powerEventRouter = require("./routes/PowerEvent");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/power-event", powerEventRouter);
app.use("/api/v1/moisture-ping", moisturePingRouter);

app.use(errorHandlerMiddleware);
module.exports = app;
