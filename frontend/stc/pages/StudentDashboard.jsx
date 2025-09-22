import React from 'react';
import { useAuth } from '../main';

export default function StudentDashboard() {
  const { user } = useAuth();
  const [timetable] = useState([
    { course: "Biology", room: "Room 303", time: "9:00 AM" },
    { course: "Chemistry", room: "Room 404", time: "11:00 AM" }
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Welcome, {user?.name}</h2>
      <p className="text-sm text-gray-600">Your personalized class schedule.</p>
      
      {/* Course Timetable */}
      <div className="p-4 rounded-xl bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-2">My Timetable</h3>
        <div className="space-y-2 text-sm text-gray-600">
          {timetable.map((t, i) => (
            <div key={i} className="py-2 px-3 rounded-lg border flex justify-between items-center">
              <div>
                <div className="font-medium">{t.course}</div>
                <div className="text-xs">{t.room} · {t.time}</div>
              </div>
              <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">Today</span>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="p-4 rounded-xl bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="p-2 rounded-lg bg-red-50 border-l-4 border-red-300 text-red-700">Math class on Tuesday has been rescheduled.</div>
          <div className="p-2 rounded-lg bg-blue-50 border-l-4 border-blue-300 text-blue-700">Room change for Physics: now in Room 205.</div>
        </div>
      </div>
    </div>
  );
}