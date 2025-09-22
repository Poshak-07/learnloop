import React, { useState } from 'react';
import { useAuth } from '../main';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [conflictAlert, setConflictAlert] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  
  const handleUpload = () => {
    setConflictAlert(Math.random() > 0.6); // sometimes show conflict
    setUploaded(true);
  };
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Welcome, Admin</h2>
      <p className="text-sm text-gray-600">Manage timetables, upload data, and view analytics.</p>
      
      {/* Upload Section */}
      <div className="p-4 rounded-xl bg-white shadow-sm space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">Upload Timetable Data</h3>
        <input type="file" className="w-full p-2 rounded-lg border text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" />
        
        {conflictAlert && (
          <div className="mt-3 rounded-lg p-3 bg-red-50 border-l-4 border-red-300 text-red-700 text-sm">Conflict Alerts: Conflicts detected in the timetable. Please resolve.</div>
        )}
        
        <div className="grid grid-cols-2 gap-2">
          <button onClick={handleUpload} className="py-2 rounded-lg bg-orange-500 text-white text-sm">Upload & Generate</button>
          <button className="py-2 rounded-lg border text-sm">Download Template</button>
        </div>
        
        {uploaded && (
          <div className="mt-3 rounded-lg p-3 bg-green-50 border text-green-700 text-sm">Timetable processed and generated successfully.</div>
        )}
      </div>

      {/* Analytics Section */}
      <div className="p-4 rounded-xl bg-white shadow-sm space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">Timetable Analytics</h3>
        
        {/* Room Utilization */}
        <div className="p-3 rounded-lg bg-gray-50 text-sm">
          <div className="flex justify-between items-center mb-2">
            <div className="font-medium">Room Utilization</div>
            <div className="text-xs text-gray-500">This week</div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-orange-200 rounded-full w-3/4"></div>
            <div className="h-3 bg-orange-200 rounded-full w-1/2"></div>
            <div className="h-3 bg-orange-200 rounded-full w-2/3"></div>
          </div>
        </div>
        
        {/* Faculty Workload */}
        <div className="p-3 rounded-lg bg-gray-50 text-sm">
          <div className="font-medium mb-2">Faculty Workload</div>
          <div className="h-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg flex items-center justify-center text-orange-600">Graph Placeholder</div>
        </div>
      </div>
    </div>
  );
}