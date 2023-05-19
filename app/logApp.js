const express = require("express");
const router = express.Router();
const users = require("../data.json");
const path = require("path");

router.use(express.urlencoded({ extended: false }));
router.get("/", (req, res) => {
    // Handle the root URL ("/") request
    res.sendFile(path.join(__dirname, "../public/login/login.html"));
});

router.post("/logData", (req, res) => {
    const { email, password } = req.body;

    // Check if user with the given email exists
    const user = users.find((user) => user.email === email);

    // If user doesn't exist or password is incorrect, return an error message
    if (!user || user.password !== password) {
        return res.status(401).render(path.join(__dirname, "../views/inv"));
    }
  
    // Authentication successful, return success message or perform further actions
    res.status(200).render(path.join(__dirname, "../views/success"));
});

module.exports = router;
