import React, { useState } from 'react';
import { MessageSquare, Send, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const StudentMessages = () => {
  const [messageType, setMessageType] = useState('announcement');
  const [message, setMessage] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');

  const classes = [
    { id: 'all', name: 'All Students' },
    { id: 'cs301', name: 'CS-301 (Data Structures)' },
    { id: 'cs401', name: 'CS-401 (Database Systems)' },
    { id: 'cs501', name: 'CS-501 (Algorithm Analysis)' }
  ];

  const recentMessages = [
    {
      id: 1,
      type: 'alert',
      content: 'Lab session for CS-401 moved to Room B-203',
      class: 'CS-401',
      timestamp: '2 hours ago',
      status: 'sent'
    },
    {
      id: 2,
      type: 'announcement',
      content: 'Assignment deadline extended to March 25th',
      class: 'CS-301',
      timestamp: '1 day ago',
      status: 'delivered'
    },
    {
      id: 3,
      type: 'info',
      content: 'Office hours this week: Monday 2-4 PM',
      class: 'All Students',
      timestamp: '2 days ago',
      status: 'delivered'
    }
  ];

  const messageTypes = [
    { id: 'announcement', label: 'Announcement', icon: Info, color: 'blue' },
    { id: 'alert', label: 'Alert', icon: AlertTriangle, color: 'red' },
    { id: 'info', label: 'Information', icon: CheckCircle, color: 'green' }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic
      setMessage('');
      // Show success feedback
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-6">
        <MessageSquare className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">Student Messages</h2>
      </div>

      {/* Message Composer */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Message Type Selector */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">Message Type</label>
            <div className="flex space-x-2">
              {messageTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setMessageType(type.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      messageType === type.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Class Selector */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">Send To</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id} className="bg-white text-gray-800">
                  {cls.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">Message</label>
          <div className="flex space-x-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={3}
              className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Messages */}
      <div>
        <h3 className="text-gray-800 font-semibold mb-4">Recent Messages</h3>
        <div className="space-y-3">
          {recentMessages.map((msg) => {
            const msgType = messageTypes.find(t => t.id === msg.type);
            const Icon = msgType?.icon || Info;
            
            return (
              <div key={msg.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Icon className={`w-4 h-4 text-${msgType?.color || 'blue'}-600`} />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${msgType?.color || 'blue'}-100 text-${msgType?.color || 'blue'}-700`}>
                      {msgType?.label}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs">{msg.timestamp}</span>
                </div>
                <p className="text-gray-800 mb-2">{msg.content}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">To: {msg.class}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    msg.status === 'delivered' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {msg.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentMessages;