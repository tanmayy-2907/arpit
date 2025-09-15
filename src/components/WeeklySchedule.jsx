import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, BookOpen, FlaskConical, X } from 'lucide-react';
import AttendanceModal from './AttendanceModal';

const WeeklySchedule = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedClass, setSelectedClass] = useState(null);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);

  const schedule = {
    Monday: [
      {
        id: 1,
        type: 'lecture',
        title: 'Data Structures',
        class: 'CS-301',
        time: '09:00 - 10:30',
        location: 'Room A-101',
        students: 45
      },
      {
        id: 2,
        type: 'lab',
        title: 'Programming Lab',
        class: 'CS-201',
        time: '14:00 - 17:00',
        location: 'Lab B-205',
        students: 30
      }
    ],
    Tuesday: [
      {
        id: 3,
        type: 'lecture',
        title: 'Database Systems',
        class: 'CS-401',
        time: '10:00 - 11:30',
        location: 'Room C-102',
        students: 38
      }
    ],
    Wednesday: [
      {
        id: 4,
        type: 'lecture',
        title: 'Data Structures',
        class: 'CS-301',
        time: '09:00 - 10:30',
        location: 'Room A-101',
        students: 45
      },
      {
        id: 5,
        type: 'lab',
        title: 'Database Lab',
        class: 'CS-401',
        time: '15:00 - 17:00',
        location: 'Lab B-201',
        students: 25
      }
    ],
    Thursday: [
      {
        id: 6,
        type: 'lecture',
        title: 'Algorithm Analysis',
        class: 'CS-501',
        time: '11:00 - 12:30',
        location: 'Room D-103',
        students: 32
      }
    ],
    Friday: [
      {
        id: 7,
        type: 'lecture',
        title: 'Data Structures',
        class: 'CS-301',
        time: '09:00 - 10:30',
        location: 'Room A-101',
        students: 45
      }
    ],
    Saturday: [],
    Sunday: []
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleClassClick = (classItem) => {
    setSelectedClass(classItem);
    setShowAttendanceModal(true);
  };

  const closeAttendanceModal = () => {
    setShowAttendanceModal(false);
    setSelectedClass(null);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Calendar className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-800">Weekly Schedule</h2>
        </div>
        <div className="text-gray-600 text-sm">
          Week of March 18-24, 2024
        </div>
      </div>

      {/* Day Selector */}
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all duration-200 ${
              selectedDay === day
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule Items */}
      <div className="space-y-4">
        {schedule[selectedDay].length > 0 ? (
          schedule[selectedDay].map((item) => (
            <div
              key={item.id}
              onClick={() => handleClassClick(item)}
              className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {item.type === 'lecture' ? (
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  ) : (
                    <FlaskConical className="w-5 h-5 text-green-600" />
                  )}
                  <div>
                    <h3 className="text-gray-800 font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.class}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.type === 'lecture' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {item.type}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{item.students} students</span>
                </div>
              </div>
              
              <div className="mt-3 text-sm text-purple-600 font-medium">
                Click to mark attendance →
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 text-lg">No classes scheduled for {selectedDay}</p>
          </div>
        )}
      </div>

      {/* Attendance Modal */}
      {showAttendanceModal && selectedClass && (
        <AttendanceModal 
          classData={selectedClass}
          onClose={closeAttendanceModal}
        />
      )}
    </div>
  );
};

export default WeeklySchedule;