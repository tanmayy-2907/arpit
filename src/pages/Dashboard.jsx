import React, { useState } from 'react';
import WeeklySchedule from '../components/WeeklySchedule';
import MenteeGoals from '../components/MenteeGoals';
import StudentMessages from '../components/StudentMessages';
import FacultyCommunication from '../components/FacultyCommunication';

const Dashboard = ({ user }) => {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {user.name.split(' ')[1]}!
        </h1>
        <p className="text-gray-600 text-lg">
          Here's what's happening in your academic world today.
        </p>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Schedule */}
        <div className="lg:col-span-2">
          <WeeklySchedule />
        </div>

        {/* Mentee Goals */}
        <div>
          <MenteeGoals />
        </div>

        {/* Student Messages */}
        <div>
          <StudentMessages />
        </div>

        {/* Faculty Communication */}
        <div className="lg:col-span-2">
          <FacultyCommunication />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;