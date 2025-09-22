import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const route = location.pathname.substring(1);

  function MobileShell({ children }) {
    return (
      <div className="max-w-sm mx-auto my-6 bg-white rounded-2xl shadow-lg p-4 min-h-[calc(100vh-100px)] flex flex-col justify-between">
        {children}
      </div>
    );
  }

  function Header() {
    return (
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold">
            ST
          </div>
          <div>
            <div className="text-sm font-semibold">SmartTimetable</div>
            <div className="text-xs text-gray-500">Timetable · Management · Portals</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700">Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <MobileShell>
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[92%] max-w-sm">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex justify-between items-center">
            <button onClick={() => navigate('/')} className={`flex-1 py-2 text-center rounded-lg ${route === '' ? 'bg-orange-100 text-orange-700' : ''}`}>Home</button>
            <button onClick={() => navigate('/admin')} className={`flex-1 py-2 text-center rounded-lg ${route === 'admin' ? 'bg-orange-100 text-orange-700' : ''}`}>Admin</button>
            <button onClick={() => navigate('/faculty')} className={`flex-1 py-2 text-center rounded-lg ${route === 'faculty' ? 'bg-orange-100 text-orange-700' : ''}`}>Faculty</button>
            <button onClick={() => navigate('/student')} className={`flex-1 py-2 text-center rounded-lg ${route === 'student' ? 'bg-orange-100 text-orange-700' : ''}`}>Student</button>
          </div>
        </div>
      </MobileShell>
    </div>
  );
}