// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const { onRequest } = require("firebase-functions/v1/https");
// const { log } = require("console");

// dotenv.config();
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// const app = express();

// app.use(cors({ origin: true }));
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "Success!"
//     });
// });

// app.post("/payment/create", async (req, res) => {
//     const total = parseInt(req.query.total);
//     if (total > 0) {
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: total,
//             currency: "usd",
//         });

//         console.log(paymentIntent);

//         res.status(201).json({
//             clientSecret: paymentIntent.client_secret
//         });
//     } else {
//         res.status(403).json({
//             message: "total must be greater than 0"
//         });
//     };
// });

// // Set global options for this function
// exports.api = functions
//     .runWith({
//         maxInstances: 10,
//     })
//     .https.onRequest(app);
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

const stripe = require("stripe")(process.env.STRIPE_KEY);

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Success!"
    });
});

app.post("/payment/create", async (req, res) => {
    const total = parseInt(req.query.total);
    if (total > 0) {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
        });

        console.log(paymentIntent);

        res.status(201).json({
            clientSecret: paymentIntent.client_secret
        });
    } else {
        res.status(403).json({
            message: "Total must be greater than 0"
        });
    }
});

// Export the API to Firebase Functions
exports.api = functions.https.onRequest(app);
