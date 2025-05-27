import express from 'express';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

dotenv.config();

const app = express();
const upload = multer({ dest: 'uploads/' });
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/applications', upload.single('resume'), async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      birthDate,
      maritalStatus,
      address,
      diploma,
      school,
      gradYear,
      lastJob,
      company,
      jobDuration,
      jobDescription,
      positionWanted,
      contractType,
      availability,
      languages,
      hasLicense,
      motivation,
    } = req.body;

    // Create email content
    const emailContent = `
      New Job Application Received
      
      Personal Information:
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Birth Date: ${birthDate}
      Marital Status: ${maritalStatus}
      Address: ${address}
      
      Education:
      Diploma: ${diploma}
      School: ${school}
      Graduation Year: ${gradYear}
      
      Work Experience:
      Last Job: ${lastJob}
      Company: ${company}
      Job Duration: ${jobDuration}
      Job Description: ${jobDescription}
      
      Position Details:
      Position Wanted: ${positionWanted}
      Contract Type: ${contractType}
      Availability: ${availability}
      Languages: ${languages}
      Has License: ${hasLicense}
      
      Motivation:
      ${motivation}
    `;

    // Prepare email with attachment
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Job Application - ${fullName} for ${positionWanted}`,
      text: emailContent,
      attachments: req.file ? [
        {
          filename: req.file.originalname,
          path: req.file.path
        }
      ] : []
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Clean up uploaded file
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ error: 'Failed to process application' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});