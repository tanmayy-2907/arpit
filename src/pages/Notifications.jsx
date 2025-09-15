import React, { useState } from 'react';
import { Bell, Check, X, AlertTriangle, Info, Calendar, MessageSquare } from 'lucide-react';

const Notifications = () => {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'schedule',
      title: 'Schedule Conflict Alert',
      message: 'Dr. Michael Brown has requested to reschedule their lecture that conflicts with your CS-301 class.',
      timestamp: '2 hours ago',
      read: false,
      urgent: true
    },
    {
      id: 2,
      type: 'message',
      title: 'Student Message Response',
      message: 'Alex Chen responded to your message about the assignment deadline extension.',
      timestamp: '4 hours ago',
      read: false,
      urgent: false
    },
    {
      id: 3,
      type: 'goal',
      title: 'Mentee Goal Update',
      message: 'Maria Rodriguez has completed her goal "Improve GPA to 3.5+" ahead of schedule.',
      timestamp: '1 day ago',
      read: true,
      urgent: false
    },
    {
      id: 4,
      type: 'system',
      title: 'System Maintenance',
      message: 'The faculty portal will undergo maintenance on March 25th from 2:00 AM to 4:00 AM.',
      timestamp: '1 day ago',
      read: true,
      urgent: false
    },
    {
      id: 5,
      type: 'schedule',
      title: 'Room Change Approved',
      message: 'Your request to change the venue for CS-401 lab has been approved. New location: Lab B-203.',
      timestamp: '2 days ago',
      read: true,
      urgent: false
    },
    {
      id: 6,
      type: 'goal',
      title: 'Mentee At Risk',
      message: 'James Wilson is falling behind on his "Learn Machine Learning" goal. Consider scheduling a check-in.',
      timestamp: '2 days ago',
      read: false,
      urgent: true
    }
  ]);

  const notificationTypes = [
    { id: 'all', label: 'All Notifications', icon: Bell },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'message', label: 'Messages', icon: MessageSquare },
    { id: 'goal', label: 'Goals', icon: AlertTriangle },
    { id: 'system', label: 'System', icon: Info }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'schedule':
        return Calendar;
      case 'message':
        return MessageSquare;
      case 'goal':
        return AlertTriangle;
      case 'system':
        return Info;
      default:
        return Bell;
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'schedule':
        return 'blue';
      case 'message':
        return 'green';
      case 'goal':
        return 'orange';
      case 'system':
        return 'purple';
      default:
        return 'gray';
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(notif => notif.type === filter);

  const unreadCount = notifications.filter(notif => !notif.read).length;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Bell className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
              <p className="text-gray-600">
                {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All notifications read'}
              </p>
            </div>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 flex items-center space-x-2"
            >
              <Check className="w-4 h-4" />
              <span>Mark All Read</span>
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {notificationTypes.map((type) => {
            const Icon = type.icon;
            const count = type.id === 'all' 
              ? notifications.length 
              : notifications.filter(n => n.type === type.id).length;
            
            return (
              <button
                key={type.id}
                onClick={() => setFilter(type.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all duration-200 ${
                  filter === type.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{type.label}</span>
                {count > 0 && (
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    filter === type.id
                      ? 'bg-white text-purple-600'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => {
              const Icon = getNotificationIcon(notification.type);
              const color = getNotificationColor(notification.type);
              
              return (
                <div
                  key={notification.id}
                  className={`bg-gray-50 rounded-xl p-4 border transition-all duration-200 hover:bg-gray-100 ${
                    notification.read 
                      ? 'border-gray-200' 
                      : 'border-purple-200 bg-purple-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4 flex-1">
                      <div className={`p-2 rounded-lg bg-${color}-100 flex-shrink-0`}>
                        <Icon className={`w-5 h-5 text-${color}-600`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className={`font-semibold ${
                            notification.read ? 'text-gray-700' : 'text-gray-800'
                          }`}>
                            {notification.title}
                          </h3>
                          {notification.urgent && (
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                              Urgent
                            </span>
                          )}
                          {!notification.read && (
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          )}
                        </div>
                        
                        <p className={`mb-2 ${
                          notification.read ? 'text-gray-600' : 'text-gray-700'
                        }`}>
                          {notification.message}
                        </p>
                        
                        <p className="text-gray-500 text-sm">
                          {notification.timestamp}
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-2 ml-4">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-2 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 transition-all duration-200"
                          title="Mark as read"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-2 rounded-lg bg-gray-200 text-gray-600 hover:bg-red-100 hover:text-red-600 transition-all duration-200"
                        title="Delete notification"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8">
              <Bell className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 text-lg">No notifications found</p>
              <p className="text-gray-500">You're all caught up!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;