const path = require("path");

// Load .env file first
require("dotenv").config({
    path: path.join(__dirname, ".env")
});

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Debug (remove after testing)
console.log("EMAIL:", process.env.EMAIL);
console.log("PASSWORD:", process.env.PASSWORD ? "Loaded" : "Missing");

// Middleware
app.use(cors());
app.use(express.json());

// Check Environment Variables
if (!process.env.EMAIL || !process.env.PASSWORD) {
    console.error("❌ EMAIL or PASSWORD is missing in .env file.");
    process.exit(1);
}

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Verify Gmail Connection
transporter.verify((error) => {
    if (error) {
        console.log("❌ Gmail Connection Failed");
        console.error(error);
    } else {
        console.log("✅ Gmail Connected Successfully");
    }
});

// Middleware
app.use(express.urlencoded({ extended: true }));

// Contact Route
app.post("/contact", async (req, res) => {

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    const mailOptions = {
        from: process.env.EMAIL,
        replyTo: email,
        to: process.env.EMAIL,
        subject: `Portfolio Contact: ${subject}`,
        html: `
            <h2>📩 New Portfolio Contact Message</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>

            <hr>

            <p>${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);

        console.log(`✅ New message from ${name}`);

        res.status(200).json({
            success: true,
            message: "Message sent successfully."
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: "Failed to send message."
        });
    }
});

// Home Route
app.get("/", (req, res) => {
    res.send("Portfolio Backend Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});