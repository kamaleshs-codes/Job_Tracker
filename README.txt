---JOBTRACK-PRO

# Job Tracker - Full Stack Job Application Management System

A modern full-stack Job Application Tracker built with React.js, Node.js, Express.js, MongoDB, and JWT Authentication. It helps users organize, track, and manage their job applications efficiently through a clean, responsive dashboard.

---

## 🚀 Features

### User Features

- **User Authentication**: Secure registration and login using JWT Authentication
- **Dashboard Overview**: View total job applications and application status summary
- **Job Management**: Create, view, update, and delete job applications
- **Application Status Tracking**: Track applications as Pending, Interview, Rejected, or Offer
- **Profile Management**: Update personal profile information and upload resume (PDF)
- **Analytics Dashboard**: Visualize job application statistics
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Technical Features

- JWT Authentication & Protected Routes
- RESTful API Architecture
- MongoDB Database with Mongoose ODM
- React Context API for Authentication
- Axios API Integration
- File Upload using Multer
- Responsive Dashboard Layout
- Modern UI built with Tailwind CSS

---

# 📁 Project Structure

```text
job-tracker/
├── backend/
│   ├── config/
│   │   └── db.js                     # MongoDB connection
│   ├── controllers/
│   │   ├── authControllers.js
│   │   ├── jobControllers.js
│   │   ├── profileControllers.js
│   │   └── analyticsControllers.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── upload.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Job.js
│   │   └── Profile.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── jobRoutes.js
│   │   ├── profileRoutes.js
│   │   └── analyticsRoutes.js
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── axios.js
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Sidebar.jsx
    │   │   ├── ProtectedRoute.jsx
    │   │   ├── ProfileCard.jsx
    │   │   └── StatCard.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── layout/
    │   │   └── DashboardLayout.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── Jobs.jsx
    │   │   ├── AddJob.jsx
    │   │   ├── Analytics.jsx
    │   │   ├── Profile.jsx
    │   │   ├── Login.jsx
    │   │   └── Register.jsx
    │   ├── routes/
    │   │   └── AppRoutes.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

# 🛠️ Installation & Setup

## Prerequisites

- Node.js (v18 or above)
- MongoDB Atlas or Local MongoDB
- npm

---

## Step 1 : Clone Repository

```bash
git clone https://github.com/yourusername/job-tracker.git

cd job-tracker
```

---

## Step 2 : Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=7d
```

Start Backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

## Step 3 : Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🎯 Usage

### User Flow

1. Register a new account.
2. Login using your credentials.
3. Access your Dashboard.
4. Add new job applications.
5. Update application status.
6. Manage your profile.
7. View analytics of job applications.
8. Logout securely.

---

# 🔐 Authentication

The application uses **JWT Authentication**.

Protected Routes include:

- Dashboard
- Jobs
- Add Job
- Analytics
- Profile

Unauthenticated users are redirected to the Login page.

---

# 🌐 API Endpoints

## Authentication

```
POST /api/auth/register
```

Register new user

```
POST /api/auth/login
```

Login user

```
GET /api/auth/me
```

Get current logged-in user

---

## Jobs

```
GET /api/jobs
```

Get all jobs

```
POST /api/jobs
```

Create Job

```
GET /api/jobs/:id
```

Get Single Job

```
PUT /api/jobs/:id
```

Update Job

```
DELETE /api/jobs/:id
```

Delete Job

---

## Profile

```
GET /api/profile
```

Get Profile

```
PUT /api/profile
```

Update Profile

---

## Analytics

```
GET /api/analytics
```

Get Job Statistics

---

# 🔧 API Testing (Postman)

## Register

```
POST /api/auth/register
```

```json
{
  "name":"Kamalesh",
  "email":"kamalesh@gmail.com",
  "password":"123456"
}
```

---

## Login

```
POST /api/auth/login
```

```json
{
  "email":"kamalesh@gmail.com",
  "password":"123456"
}
```

Copy the returned JWT Token.

---

## Create Job

```
POST /api/jobs
```

Authorization

```
Bearer YOUR_TOKEN
```

```json
{
    "company":"Google",
    "position":"Frontend Developer",
    "location":"Bangalore",
    "status":"Interview",
    "notes":"Technical Round Completed"
}
```

---

# 📊 Dashboard Features

- Total Applications
- Pending Applications
- Interview Applications
- Rejected Applications
- Offers Received

All statistics are automatically calculated from MongoDB.

---

# 👤 Profile Features

Users can update

- Full Name
- Email
- About
- Skills
- Experience
- Resume Upload (PDF)

---

# 🔒 Security Features

- Password Hashing using bcrypt.js
- JWT Authentication
- Protected Backend Routes
- Authorization Middleware
- User-specific Data Access
- Resume Upload Validation (PDF only)

---

# 📦 Deployment

## Backend

Hosted on **Render**

Requirements

- Environment Variables
- MongoDB Atlas
- JWT Secret

---

## Frontend

Hosted on **Render**

Environment Variable

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

---

# 🚀 Future Enhancements

Ready to implement

- Search Jobs
- Filter by Status
- Sort Applications
- Company Logo Upload
- Resume Preview
- Email Notifications
- Dark Mode
- Interview Calendar
- Notes History
- Export Applications to PDF / Excel

---

# 🐛 Troubleshooting

## MongoDB Connection Error

- Verify MongoDB Atlas Network Access
- Check MONGO_URI

---

## JWT Authentication Issues

- Ensure Authorization Header

```
Bearer TOKEN
```

- Verify JWT_SECRET

---

## API Not Working After Deployment

- Verify `VITE_API_URL`
- Ensure `/api` is included
- Check Render Environment Variables

---

## Resume Upload Issue

- Only PDF files are accepted.
- Verify Multer configuration.

---

# 📄 License

This project is open source and created for learning and portfolio purposes.

---

# 🤝 Contributing

Contributions, improvements, and suggestions are welcome.

Feel free to fork the repository and submit a Pull Request.

---

# 👨‍💻 Author

**Kamalesh S**

MERN Stack Developer

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

---

⭐ If you found this project useful, don't forget to give it a Star.