import React, { useState, useEffect } from 'react';
import { X, Users, Clock, MapPin, Save, RotateCcw } from 'lucide-react';

const AttendanceModal = ({ classData, onClose }) => {
  const [students, setStudents] = useState([]);
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  // Generate student data based on class size
  useEffect(() => {
    const generateStudents = () => {
      const studentList = [];
      const startRoll = classData.class === 'CS-301' ? 2101 : 
                       classData.class === 'CS-201' ? 2201 :
                       classData.class === 'CS-401' ? 1901 : 
                       classData.class === 'CS-501' ? 1801 : 2001;
      
      // Use the exact student count from classData
      for (let i = 0; i < parseInt(classData.students); i++) {
        studentList.push({
          id: i + 1,
          rollNo: `${startRoll + i}`,
          name: `${startRoll + i}`,
          isPresent: false
        });
      }
      return studentList;
    };

    setStudents(generateStudents());
  }, [classData]);

  const toggleAttendance = (studentId) => {
    setStudents(students.map(student => 
      student.id === studentId 
        ? { ...student, isPresent: !student.isPresent }
        : student
    ));
  };

  const markAllPresent = () => {
    setStudents(students.map(student => ({ ...student, isPresent: true })));
  };

  const markAllAbsent = () => {
    setStudents(students.map(student => ({ ...student, isPresent: false })));
  };

  const saveAttendance = () => {
    // Here you would typically save to a database
    setAttendanceMarked(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  const presentCount = students.filter(student => student.isPresent).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-purple-600 text-white p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">{classData.title}</h2>
              <p className="text-purple-100">{classData.class}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{classData.time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{classData.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>{classData.students} students</span>
            </div>
          </div>
        </div>

        {/* Attendance Summary */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{presentCount}</div>
                <div className="text-sm text-gray-600">Present</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{absentCount}</div>
                <div className="text-sm text-gray-600">Absent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {((presentCount / students.length) * 100).toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Attendance</div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={markAllPresent}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200 text-sm"
              >
                Mark All Present
              </button>
              <button
                onClick={markAllAbsent}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200 text-sm"
              >
                Mark All Absent
              </button>
            </div>
          </div>
        </div>

        {/* Student Grid */}
        <div className="p-6 overflow-y-auto max-h-96">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {students.map((student) => (
              <div
                key={student.id}
                onClick={() => toggleAttendance(student.id)}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 text-center ${
                  student.isPresent
                    ? 'bg-green-100 border-green-500 text-green-800'
                    : 'bg-red-100 border-red-500 text-red-800'
                }`}
              >
                <div className="font-semibold text-sm">{student.rollNo}</div>
                <div className="text-xs mt-1 opacity-80">
                  {student.isPresent ? 'Present' : 'Absent'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Click on student boxes to toggle attendance
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setStudents(students.map(s => ({ ...s, isPresent: false })))}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-200 flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
              
              <button
                onClick={saveAttendance}
                disabled={attendanceMarked}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>{attendanceMarked ? 'Saved!' : 'Save Attendance'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceModal;