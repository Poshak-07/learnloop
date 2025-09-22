import React from 'react';
import { useAuth } from '../main';

export default function FacultyDashboard() {
  const { user } = useAuth();
  const [timetable] = useState([
    { course: "Math", room: "Room 101", time: "9:00 AM" },
    { course: "Physics", room: "Room 202", time: "11:00 AM" },
    { course: "Chemistry", room: "Room 404", time: "2:00 PM" }
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Welcome, {user?.name}</h2>
      <p className="text-sm text-gray-600">Here is your schedule and important updates.</p>
      
      {/* Today's Classes */}
      <div className="p-4 rounded-xl bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-2">My Timetable</h3>
        <div className="space-y-2 text-sm text-gray-600">
          {timetable.map((t, i) => (
            <div key={i} className="py-2 px-3 rounded-lg border flex justify-between items-center">
              <div>
                <div className="font-medium">{t.course}</div>
                <div className="text-xs">{t.room} · {t.time}</div>
              </div>
              <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">Active</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="py-3 rounded-lg bg-orange-50 text-orange-700 text-sm font-medium">Request Leave</button>
        <button className="py-3 rounded-lg bg-gray-200 text-gray-700 text-sm font-medium">Set Availability</button>
      </div>
    </div>
  );
}