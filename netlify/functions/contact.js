// netlify/functions/contact.js
const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, message } = data;

    // Create transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use 'smtp.mailtrap.io' for testing
      auth: {
        user: process.env.EMAIL_USER, // set in Netlify environment variables
        pass: process.env.EMAIL_PASS, // set in Netlify environment variables
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL, // set in Netlify environment variables
      subject: `New message from ${name}`,
      text: message,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return { statusCode: 500, body: "Failed to send message" };
  }
};
