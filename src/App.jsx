import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Resources from './pages/Resources';

function App() {
  const [currentUser] = useState({
    name: 'Dr. Sarah Johnson',
    department: 'Computer Science',
    email: 'sarah.johnson@university.edu',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  });

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400">
        <Navbar user={currentUser} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard user={currentUser} />} />
            <Route path="/profile" element={<Profile user={currentUser} />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;