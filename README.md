# VenkSen Company Website

A bilingual (English/Hindi) company website for VenkSen, a nanotechnology-driven diagnostics startup specializing in electrochemical sensing platforms.

## 🌟 Features

- **Bilingual Support**: Full website support in both English and Hindi
- **Responsive Design**: Modern, mobile-first design that works across all devices
- **Interactive Components**: Dynamic showcase of electrochemical sensing platforms
- **Contact Portal**: Secure contact form with email notifications
- **Investor Portal**: Dedicated section for investor information and communication
- **Real-time Updates**: Dynamic content management system
- **Secure Backend**: RESTful APIs with proper authentication and authorization

## 🛠️ Tech Stack

### Frontend
- React.js (81.3%)
- CSS (14.6%)
- HTML (2.2%)
- Modern UI/UX practices
- Responsive design

### Backend
- Node.js
- Express.js
- MongoDB
- RESTful APIs
- Nodemailer for email notifications

### DevOps & Cloud
- AWS Amplify for frontend hosting
- AWS EC2 for backend services
- CI/CD pipeline (configured via amplify.yml)
- Git/GitHub for version control

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- AWS Account (for deployment)

### Installation

1. Clone the repository
```bash
git clone https://github.com/ethindhar/venksen-company.git
cd venksen-company
```

2. Install dependencies
```bash
# Install server dependencies
cd mern-website/server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Environment Setup
Create a `.env` file in the server directory with the following variables:
```env
MONGODB_URI=your_mongodb_uri
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
PORT=5000
NODE_ENV=development
```

4. Start the development servers
```bash
# Start backend server (from server directory)
npm run dev

# Start frontend server (from client directory)
npm start
```

## 📦 Deployment

The application is deployed on AWS:
- Frontend: AWS Amplify
- Backend: AWS EC2
- CI/CD: Configured via amplify.yml

## 🔒 Security Features

- CORS configuration
- Environment variable management
- Error handling middleware
- Secure API endpoints
- Form validation
- Email notification system

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 📧 Contact

H Ethindhar - [ethindharhariprasath@gmail.com](mailto:ethindharhariprasath@gmail.com)

Project Link: [https://github.com/ethindhar/venksen-company](https://github.com/ethindhar/venksen-company)