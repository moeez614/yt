# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!--  -->
Below is a **complete, professional blueprint (frames + details)** for a **Dynamic Hospital Website**.
This is the kind of structure used in **real hospital management systems (HMS)** and **modern MERN / dynamic websites**.

---

## 1. Public Website (Patient-Facing Frames)

### 1.1 Home Page

**Purpose:** First impression & quick access

**Dynamic Sections**

* Hero banner (doctor images, emergency number)
* Live OPD timings
* Today’s available doctors
* Emergency contact (24/7)
* Latest health news / announcements
* Testimonials (from database)

**Features**

* Dynamic content from Admin Panel
* SEO optimized
* Language switch (English / Urdu)

---

### 1.2 About Hospital

**Dynamic Data**

* Hospital history
* Vision & mission
* Infrastructure details
* Certifications & accreditations
* Management team

**Admin Can Update**

* Text
* Images
* Achievements

---

### 1.3 Departments Page

**Examples**

* Cardiology
* Orthopedics
* Neurology
* Pediatrics
* Gynecology

**Dynamic Content**

* Department name
* Description
* Head doctor
* Available services
* Equipment details

---

### 1.4 Doctors Page

**Dynamic Doctor Profiles**

* Name
* Qualification
* Experience
* Specialization
* OPD timing
* Availability status

**Actions**

* Book appointment
* View schedule

---

### 1.5 Appointment Booking

**Dynamic Form**

* Patient name
* CNIC
* Phone / Email
* Department
* Doctor
* Date & Time (auto availability)

**Logic**

* Prevent double booking
* Auto confirmation
* Email / SMS notification

---

### 1.6 Services Page

**Examples**

* Emergency
* ICU
* Lab tests
* Pharmacy
* Ambulance

**Admin Controlled**

* Add/remove services
* Pricing info

---

### 1.7 Contact Page

**Dynamic**

* Google map
* Multiple branches
* Emergency numbers
* Contact form (saved in DB)

---

## 2. Patient Portal (Login Required)

### 2.1 Patient Dashboard

**Features**

* View appointments
* Appointment history
* Medical reports
* Prescriptions
* Bills

---

### 2.2 Online Reports

* Lab reports (PDF)
* X-ray / test results
* Doctor notes

---

### 2.3 Billing & Payments

* Invoice list
* Payment status
* Online payment (Stripe / JazzCash)

---

## 3. Doctor Portal

### 3.1 Doctor Dashboard

* Today’s appointments
* Patient list
* Pending reports

---

### 3.2 Patient Management

* View patient history
* Add diagnosis
* Upload reports
* Write prescriptions

---

### 3.3 Schedule Management

* Set OPD days
* Available hours
* Leave management

---

## 4. Admin Panel (Core of Dynamic Website)

### 4.1 Admin Dashboard

* Total patients
* Doctors
* Appointments
* Revenue stats
* Graphs (monthly/yearly)

---

### 4.2 User Management

* Admins
* Doctors
* Patients
* Roles & permissions

---

### 4.3 Doctor Management

* Add / edit doctors
* Assign departments
* Set availability

---

### 4.4 Appointment Management

* View all bookings
* Approve / cancel
* Emergency overrides

---

### 4.5 Department Management

* Add new departments
* Assign doctors
* Update descriptions

---

### 4.6 CMS (Content Management System)

* Home page banners
* News & announcements
* Testimonials
* SEO metadata

---

### 4.7 Billing & Finance

* Generate invoices
* Payment records
* Insurance support

---

## 5. Database Design (Core Tables)

**Main Collections / Tables**

* Users
* Patients
* Doctors
* Departments
* Appointments
* Reports
* Prescriptions
* Payments
* Roles

---

## 6. Technology Stack

### Frontend

* React.js / Next.js
* Tailwind / Bootstrap
* Recharts (for dashboards)

### Backend

* Node.js
* Express.js
* JWT Authentication
* Role-based access

### Database

* MongoDB (MERN)
  or
* MySQL (Relational)

### Other Integrations

* Email (Nodemailer)
* SMS API
* Cloud storage (reports)
* Payment gateway

---

## 7. Security Features

* JWT authentication
* Role-based authorization
* Encrypted passwords (bcrypt)
* HTTPS
* Data access logs
* Backup system

---

## 9. Pages Summary (Frames List)

**Public**

* Home
* About
* Departments
* Doctors
* Services
* Appointment
* Contact

**Private**

* Patient Dashboard
* Doctor Dashboard
* Admin Panel

---
<!--  -->
Root folder

hospital-management-system/
│
├── client/        (React / Frontend)
├── server/        (Node / Backend)
├── README.md

client/
├── public/
│
├── src/
│   ├── api/                 # Axios API calls
│   │   ├── authApi.js
│   │   ├── doctorApi.js
│   │   ├── appointmentApi.js
│
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProtectedRoute.jsx
│
│   ├── pages/
│   │   ├── public/
│   │   │   ├── Home.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Departments.jsx
│   │   │   ├── Appointment.jsx
│   │
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │
│   │   ├── patient/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Reports.jsx
│   │
│   │   ├── doctor/
│   │   │   ├── DoctorDashboard.jsx
│   │   │   ├── PatientList.jsx
│   │
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── ManageDoctors.jsx
│   │   │   ├── ManageAppointments.jsx
│
│   ├── context/
│   │   ├── AuthContext.jsx
│
│   ├── utils/
│   │   ├── authToken.js
│
│   ├── App.js
│   └── main.jsx



server/
├── config/
│   ├── db.js
│
├── models/
│   ├── User.js
│   ├── Doctor.js
│   ├── Patient.js
│   ├── Appointment.js
│   ├── Report.js
│
├── controllers/
│   ├── authController.js
│   ├── doctorController.js
│   ├── appointmentController.js
│
├── routes/
│   ├── authRoutes.js
│   ├── doctorRoutes.js
│   ├── appointmentRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│
├── utils/
│   ├── generateToken.js
│
├── server.js

<!-- Login Proccess -->
User Login
   ↓
Email & Password
   ↓
Verify from DB
   ↓
JWT Token Generate
   ↓
Token stored (localStorage)
   ↓
Protected Routes Access






# 🔐 JWT Authentication – FULL IMPLEMENTATION

## 🔹 Features

✔ Login
✔ Register
✔ JWT Token
✔ Role-based access
✔ Protected routes

---

# 1️⃣ Backend – JWT Authentication (Node + Express)

## 📦 Install Packages

```bash
npm install express mongoose jsonwebtoken bcryptjs cors dotenv
```

---

## 1.1 User Model – `models/User.js`

```js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["admin", "doctor", "patient"],
    default: "patient"
  }
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", userSchema);
```

---

## 1.2 JWT Token Generator – `utils/generateToken.js`

```js
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

module.exports = generateToken;
```

---

## 1.3 Auth Controller – `controllers/authController.js`

```js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json("User already exists");

  const user = await User.create({ name, email, password, role });

  res.json({
    token: generateToken(user),
    user
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json("Invalid credentials");

  res.json({
    token: generateToken(user),
    user
  });
};
```

---

## 1.4 Auth Routes – `routes/authRoutes.js`

```js
const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
```

---

## 1.5 JWT Middleware – `middleware/authMiddleware.js`

```js
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json("No token");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json("Invalid token");
  }
};
```

---

## 1.6 Role Middleware – `middleware/roleMiddleware.js`

```js
module.exports = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json("Access denied");
    }
    next();
  };
};
```

---

## 1.7 Server Setup – `server.js`

```js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(5000, () => console.log("Server running"));
```

---

# 2️⃣ Frontend – JWT Authentication (React)

## 📦 Install Packages

```bash
npm install axios react-router-dom
```

---

## 2.1 Axios Instance – `src/api/authApi.js`

```js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
```

---

## 2.2 Auth Context – `context/AuthContext.jsx`

```jsx
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

---

## 2.3 Login Page – `pages/auth/Login.jsx`

```jsx
import { useState, useContext } from "react";
import API from "../../api/authApi";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await API.post("/auth/login", {
      email,
      password
    });
    login(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button>Login</button>
    </form>
  );
}
```

---

## 2.4 Protected Route – `components/ProtectedRoute.jsx`

```jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}
```

---

## 2.5 Role-Based Route Example

```jsx
if (user.role !== "admin") {
  return <Navigate to="/" />;
}
```

---

# 🔁 JWT Flow Summary

```
Register/Login
   ↓
JWT Token Generated
   ↓
Stored in localStorage
   ↓
Sent in Headers
   ↓
Backend verifies
   ↓
Access Granted

