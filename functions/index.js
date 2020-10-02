const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_API_KEY);

// API
// APP CONFIG
const app = express();
// MIDDLE WARES
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
app.get('/', (request, response) => response.status(200).send('app is working'))
app.post('/payments/create',async(request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOM!!! for this amount >>>', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
// Listen Command
exports.api = functions.https.onRequest(app);
