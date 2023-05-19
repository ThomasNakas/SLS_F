const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
// -----------user import---------------//
const User = require("./extraFunctions/User");

router.use(express.urlencoded({ extended: false }));

router.post("/signData", (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User(name, email, password);

    const dataPath = path.join(__dirname, `../data.json`);

    // Read existing user data from data.json
    let users = [];
    if (fs.existsSync(dataPath)) {
        const data = fs.readFileSync(dataPath);
        users = JSON.parse(data);
    }

    // Check if user with the same email already exists
    const isExistingUser = users.some((user) => user.email === email);

    if (isExistingUser) {
        return res.render(path.join(__dirname, "../views/signUpF"));
    }
    

    
    // Make sure users is an array
    if (!Array.isArray(users)) {
        users = [];
    }
    
    // Add new user to the array
    users.push(newUser);
    
    // Save updated user data to data.json file
    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
    res.render(path.join(__dirname, "../views/signUpS"));
});

module.exports = router;
