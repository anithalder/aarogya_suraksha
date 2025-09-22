// function Login() {
//   return <h1>Login Page</h1>;
// }

// function PatientDashboard() {
//   return <h1>Patient Dashboard</h1>;
// }

// function DoctorDashboard() {
//   return <h1>Doctor Dashboard</h1>;
// }

// function AdminDashboard() {
//   return <h1>Admin Dashboard</h1>;
// }

// function PatientConference() {
//   return <h1>Patient WebRTC Conference</h1>;
// }
// function PatientCall() {
//   return <h1>Patient Video Call Page</h1>;
// }

// function DoctorCall() {
//   return <h1>Doctor Video Call Page</h1>;
// }

// function AdminCall() {
//   return <h1>Admin Video Call Page</h1>;
// }
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import { Home } from 'lucide-react';

// function Patient() {
//   return <h1>Patient Page</h1>;
// }

// function Doctor() {
//   return <h1>Doctor Page</h1>;
// }

// function Admin() {
//   return <h1>Admin Page</h1>;
// }

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import ConferenceRoom from "./pages/Room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/room" element={<ConferenceRoom />} />
      {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
      {/* <Route path="/patient/conference" element={<PatientConference />} /> */}
      {/* <Route path="/doctor/conference" element={<DoctorConference />} /> */}
    </Routes>
  );
}

export default App
