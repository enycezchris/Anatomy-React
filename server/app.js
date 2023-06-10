const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const setupDb = require("../database/data");
const humanRoutes = require("../routes/human");

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "OPTIONS"],
    preflightContinue: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/human", humanRoutes);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  setupDb();
  console.log(`Listening on port: ${PORT}`);
});
