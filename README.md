# MediQueue – Tutor Booking System

MediQueue is a modern Tutor Booking Web Application where students can easily find tutors, explore tutor details, and book learning sessions online based on subject, availability, and preferred teaching mode.

## 🌐 Live Website
🔗 

## 📂 Client Repository
🔗 

## 📂 Server Repository
🔗 

---

# 🚀 Features

- 🔐 Secure Authentication using Better Auth, JWT & Google Login
- 📚 Browse and search tutors by subject and tutor name
- 🎯 Advanced filtering system for tutors
- 📅 Book tutoring sessions with automatic slot management
- 🧑‍🏫 Add, update, and delete tutors dynamically
- 🌙 Dark & Light Theme support
- 📱 Fully Responsive for Mobile, Tablet & Desktop
- ⚡ Real-time UI updates without page reload
- 🔒 Protected Private Routes using JWT Authentication
- 🔔 Toast Notifications & Sweet Alerts for all CRUD operations

---

# 🛠️ Technologies Used

## Frontend
- Next.js
- React.js
- Tailwind CSS
- Hero UI
- Framer Motion
- SweetAlert2
- Better Auth

## Backend
- Node.js
- Express.js
- MongoDB
- JWT
- JOSE
- CORS
- dotenv

---

# 🔑 Authentication Features

- Email & Password Login/Register
- Google Authentication
- JWT Token Generation
- JWT Stored on Client Side
- Protected API Routes
- Private Route Protection

---

# 📚 Main Functionalities

## 🏠 Home Page
- Hero Banner Slider
- Featured Tutors Section
- Extra Informative Sections
- Call To Action Buttons

## 👨‍🏫 Tutors Page
- Search Tutors by Name
- Filter Tutors by Subject & Price
- Responsive Tutor Cards
- Tutor Details Navigation

## 📄 Tutor Details Page
- Detailed Tutor Information
- Session Booking System
- Auto Slot Decrease
- Session Availability Validation

## ➕ Add Tutor
Authenticated users can:
- Create Tutor Profiles
- Add Availability
- Add Teaching Mode
- Set Session Date & Fees

## 📋 My Tutors
- View Own Tutors
- Update Tutor Information
- Delete Tutors
- Modal Based CRUD Operations

## 📖 My Booked Sessions
- View Personal Bookings
- Cancel Sessions
- Booking Status Management

---

# 🔎 Search & Filter

### Search
- Case-insensitive tutor search using MongoDB `$regex`

### Filter
- Filter tutors by:
  - Subject
  - Price Range
  - Session Date

---

# 🔐 JWT Implementation

JWT authentication is implemented for:
- Private Routes
- Secure API Calls
- Token Verification Middleware
- Social Login Authentication
- Email/Password Authentication

---

# ⚙️ Environment Variables

## Client Side

```env
NEXT_PUBLIC_API_URL=your_server_url
BETTER_AUTH_URL=your_client_url
BETTER_AUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret