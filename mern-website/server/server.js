const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// CORS Configuration - Updated to be more permissive during development
const allowedOrigins = [
  'http://localhost:3000',
  'https://main.dxw6md2go3m1n.amplifyapp.com', // Amplify domain
  'https://vensken.com',
  'https://www.vensken.com'
];

// Enhanced CORS middleware
// app.use(cors({
//   origin: function(origin, callback) {
//     // allow requests with no origin (like mobile apps or curl requests)
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       return callback(new Error('The CORS policy for this site does not allow access from the specified Origin.'), false);
//     }
//     return callback(null, true);
//   },
//   credentials: false // Change this to false if you don't need cookies
// }));

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., curl, mobile apps)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS policy does not allow this origin'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // only if you need cookies or auth headers
}));
// app.use(cors(corsOption));
// app.options('*', cors(corsOption))

// Handle OPTIONS preflight requests
app.options('*', cors());

app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in environment variables');
  process.exit(1);
}

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  w: 'majority'
})
.then(() => console.log('MongoDB Connected'))
.catch(err => {
  console.error('MongoDB Connection Error:', err);
  process.exit(1);
});

// Import the contact message model
const ContactMessage = require('./models/ContactMessage');

// Contact form endpoint with improved error handling
app.post('/api/contact', async (req, res) => {
  console.log('Contact form submission received:', req.body);
  
  try {
    const { name, email, subject, message } = req.body;
    
    // Add more detailed logging
    console.log('Processing contact form with:', { name, email, subject });
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    const newMessage = new ContactMessage({ name, email, subject, message });
    await newMessage.save();
    console.log('Message saved to database');

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ethindharhariprasath@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Log email sending attempt
    console.log('Attempting to send email notification');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    res.status(201).json({ 
      success: true, 
      message: 'Message received successfully!' 
    });
  } catch (err) {
    console.error('Contact form detailed error:', err);
    res.status(500).json({ 
      success: false, 
      message: process.env.NODE_ENV === 'production' ? 
        'Server error. Please try again later.' : 
        err.message 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ 
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});