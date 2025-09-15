import React, { useState } from 'react';
import { Target, TrendingUp, User, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const MenteeGoals = () => {
  const [selectedMentee, setSelectedMentee] = useState(null);

  const mentees = [
    {
      id: 1,
      name: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      semester: 'Spring 2024',
      goals: [
        {
          id: 1,
          title: 'Master React Development',
          progress: 75,
          status: 'in-progress',
          deadline: '2024-04-15',
          category: 'Technical'
        },
        {
          id: 2,
          title: 'Complete Capstone Project',
          progress: 45,
          status: 'in-progress',
          deadline: '2024-05-20',
          category: 'Academic'
        }
      ]
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      semester: 'Spring 2024',
      goals: [
        {
          id: 3,
          title: 'Improve GPA to 3.5+',
          progress: 90,
          status: 'completed',
          deadline: '2024-03-30',
          category: 'Academic'
        },
        {
          id: 4,
          title: 'Land Software Internship',
          progress: 60,
          status: 'in-progress',
          deadline: '2024-04-30',
          category: 'Career'
        }
      ]
    },
    {
      id: 3,
      name: 'James Wilson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      semester: 'Spring 2024',
      goals: [
        {
          id: 5,
          title: 'Learn Machine Learning',
          progress: 30,
          status: 'at-risk',
          deadline: '2024-04-10',
          category: 'Technical'
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-700';
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-700';
      case 'at-risk':
        return 'bg-red-500/20 text-red-700';
      default:
        return 'bg-gray-500/20 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'in-progress':
        return <Clock className="w-4 h-4" />;
      case 'at-risk':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-6">
        <Target className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">Mentee Goals</h2>
      </div>

      <div className="space-y-4">
        {mentees.map((mentee) => (
          <div key={mentee.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => setSelectedMentee(selectedMentee === mentee.name ? null : mentee.name)}
            >
              <img
                src={mentee.avatar}
                alt={mentee.name}
                className="w-12 h-12 rounded-full border-2 border-gray-200"
              />
              <div className="flex-1">
                <h3 className="text-gray-800 font-semibold">{mentee.name}</h3>
                <p className="text-gray-600 text-sm">{mentee.semester} • {mentee.goals.length} goals</p>
              </div>
              <div className="text-gray-600">
                {selectedMentee === mentee.name ? '−' : '+'}
              </div>
            </div>

            {selectedMentee === mentee.name && (
              <div className="mt-4 space-y-3">
                {mentee.goals.map((goal) => (
                  <div key={goal.id} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-gray-800 font-medium">{goal.title}</h4>
                        <p className="text-gray-600 text-sm">{goal.category} • Due: {goal.deadline}</p>
                      </div>
                      <span className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                        {getStatusIcon(goal.status)}
                        <span>{goal.status.replace('-', ' ')}</span>
                      </span>
                    </div>
                    
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-all duration-200">
          View All Mentees
        </button>
      </div>
    </div>
  );
};

export default MenteeGoals;