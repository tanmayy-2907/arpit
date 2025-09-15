import React, { useState } from 'react';
import { Users, Calendar, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';

const FacultyCommunication = () => {
  const [activeTab, setActiveTab] = useState('requests');
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestForm, setRequestForm] = useState({
    faculty: '',
    date: '',
    timeSlot: '',
    reason: '',
    type: 'reschedule'
  });

  const rescheduleRequests = [
    {
      id: 1,
      from: 'Dr. Michael Brown',
      fromDepartment: 'Mathematics',
      date: '2024-03-25',
      originalTime: '10:00 - 11:30',
      proposedTime: '14:00 - 15:30',
      reason: 'Conference presentation conflict',
      status: 'pending',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      from: 'Prof. Emily Davis',
      fromDepartment: 'Physics',
      date: '2024-03-22',
      originalTime: '09:00 - 10:30',
      proposedTime: '11:00 - 12:30',
      reason: 'Lab equipment maintenance',
      status: 'approved',
      timestamp: '1 day ago'
    }
  ];

  const sentRequests = [
    {
      id: 3,
      to: 'Dr. Robert Wilson',
      toDepartment: 'Chemistry',
      date: '2024-03-28',
      originalTime: '15:00 - 16:30',
      proposedTime: '13:00 - 14:30',
      reason: 'Student presentation schedule conflict',
      status: 'pending',
      timestamp: '3 hours ago'
    }
  ];

  const facultyList = [
    'Dr. Michael Brown (Mathematics)',
    'Prof. Emily Davis (Physics)',
    'Dr. Robert Wilson (Chemistry)',
    'Prof. Lisa Anderson (Biology)',
    'Dr. David Martinez (History)'
  ];

  const handleSubmitRequest = () => {
    if (requestForm.faculty && requestForm.date && requestForm.timeSlot && requestForm.reason) {
      // Handle request submission
      setShowRequestForm(false);
      setRequestForm({
        faculty: '',
        date: '',
        timeSlot: '',
        reason: '',
        type: 'reschedule'
      });
    }
  };

  const handleRequestAction = (requestId, action) => {
    // Handle request approval/decline
    console.log(`${action} request ${requestId}`);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-800">Faculty Communication</h2>
        </div>
        <button
          onClick={() => setShowRequestForm(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 flex items-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span>New Request</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-2 mb-6">
        {[
          { id: 'requests', label: 'Incoming Requests', count: rescheduleRequests.filter(r => r.status === 'pending').length },
          { id: 'sent', label: 'Sent Requests', count: sentRequests.length }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{tab.label}</span>
            {tab.count > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'requests' && (
        <div className="space-y-4">
          {rescheduleRequests.map((request) => (
            <div key={request.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-gray-800 font-semibold">{request.from}</h3>
                  <p className="text-gray-600 text-sm">{request.fromDepartment} • {request.timestamp}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  request.status === 'pending' 
                    ? 'bg-yellow-100 text-yellow-700'
                    : request.status === 'approved'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {request.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Date: {request.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Current: {request.originalTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Proposed: {request.proposedTime}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium mb-2">Reason:</h4>
                  <p className="text-gray-600 text-sm">{request.reason}</p>
                </div>
              </div>

              {request.status === 'pending' && (
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleRequestAction(request.id, 'approve')}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200 flex items-center space-x-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Approve</span>
                  </button>
                  <button
                    onClick={() => handleRequestAction(request.id, 'decline')}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-200 flex items-center space-x-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>Decline</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'sent' && (
        <div className="space-y-4">
          {sentRequests.map((request) => (
            <div key={request.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-gray-800 font-semibold">To: {request.to}</h3>
                  <p className="text-gray-600 text-sm">{request.toDepartment} • {request.timestamp}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  request.status === 'pending' 
                    ? 'bg-yellow-100 text-yellow-700'
                    : request.status === 'approved'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {request.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Date: {request.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Current: {request.originalTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Proposed: {request.proposedTime}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium mb-2">Reason:</h4>
                  <p className="text-gray-600 text-sm">{request.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Request Form Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Send Reschedule Request</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Faculty</label>
                <select
                  value={requestForm.faculty}
                  onChange={(e) => setRequestForm({...requestForm, faculty: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select faculty</option>
                  {facultyList.map((faculty, index) => (
                    <option key={index} value={faculty}>{faculty}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={requestForm.date}
                  onChange={(e) => setRequestForm({...requestForm, date: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Proposed Time Slot</label>
                <input
                  type="text"
                  value={requestForm.timeSlot}
                  onChange={(e) => setRequestForm({...requestForm, timeSlot: e.target.value})}
                  placeholder="e.g., 14:00 - 15:30"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Reason</label>
                <textarea
                  value={requestForm.reason}
                  onChange={(e) => setRequestForm({...requestForm, reason: e.target.value})}
                  placeholder="Please explain why you need to reschedule..."
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleSubmitRequest}
                className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all duration-200"
              >
                Send Request
              </button>
              <button
                onClick={() => setShowRequestForm(false)}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyCommunication;