const express = require("express");
const router = express.Router();
const axios = require("axios");
const users = require("../data.json");
// -------------dotenv import------------------
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, "../.env") });

router.use(express.urlencoded({ extended: false }));
const private_Key =process.env.PR_KEY;
// ---------------Api Import------------------------

// Define the routes for the API
router.post("/send-email", async (req, res) => {
    // Get the form data from the request body
    const recipient = req.body.recipient;
    const name = users.find((user) => user.email === recipient)?.name;
    const options = {
        method: "POST",
        url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": private_Key,
            "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
        },
        data: {
            personalizations: [
                {
                    to: [
                        {
                            email: recipient,
                        },
                    ],
                    subject: `Regarding your inquiry; ${name}`,
                },
            ],
            from: {
                email: "thomasnakas92@gmail.com",
            },
            content: [
                {
                    type: "text/plain",
                    value: `Thank you, ${name} for your application. We\'ll review it and provide updates promptly. We appreciate your interest in our company.`,
                },
            ],
        },
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        // Send a success response back to the client
        res.status(200).render(path.join(__dirname, "../views/submitS"));
        
    } catch (error) {
        console.error(error);
        // Send an error response back to the client
        res.status(500).render(path.join(__dirname, "../views/submitF"));
    }
});

// Export the router
module.exports = router;
