import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use default CORS with origin
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { userName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New contact from ${userName}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).send({ message: 'Failed to send email' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
