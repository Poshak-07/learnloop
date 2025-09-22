import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../main';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    // For this demo, we'll simulate a successful login based on hardcoded users.
    const demoUsers = {
      'admin@example.com': { name: 'Alice Admin', role: 'admin' },
      'faculty@example.com': { name: 'Bob Faculty', role: 'faculty' },
      'student@example.com': { name: 'Charlie Student', role: 'student' }
    };

    if (demoUsers[email] && password === 'password') { // Dummy password
      login(demoUsers[email]);
      navigate('/');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleLogin} className="p-8 bg-white rounded-2xl shadow-lg w-full max-w-sm">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">ST</div>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to SmartTimetable</h1>
        {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button type="submit" className="w-full p-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
          Log In
        </button>
      </form>
    </div>
  );
}