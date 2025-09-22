import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import FacultyDashboard from './pages/FacultyDashboard.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import './index.css';

// A simple authentication context to manage user state.
const AuthContext = React.createContext(null);

const AppRoutes = () => {
  const [user, setUser] = React.useState(null);

  const authData = {
    user,
    login: (userData) => {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    },
    logout: () => {
      setUser(null);
      localStorage.removeItem('user');
    }
  };

  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={authData}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<App />} />
          <Route path="/admin" element={user && user.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/faculty" element={user && user.role === 'faculty' ? <FacultyDashboard /> : <Navigate to="/login" />} />
          <Route path="/student" element={user && user.role === 'student' ? <StudentDashboard /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

export const useAuth = () => React.useContext(AuthContext);