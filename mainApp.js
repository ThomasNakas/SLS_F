const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
// =========================================================
const signRouter = require("./app/SignApp");
const logRouter = require("./app/logApp");
const apiRouter = require("./app/apiApp");

// Set the view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
// Serve static files from the "images" directory
app.use(express.static(path.join(__dirname, "images")));

// Define the health check route
app.get("/health", (req, res) => {
    res.sendStatus(200);
});

// Mount the logApp.js middleware
app.use("/", logRouter);

// Mount the signApp.js middleware
app.use("/signup", signRouter);

// Mount the apiApp.js middleware
app.use("/api", apiRouter);

//=========================================================
// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
