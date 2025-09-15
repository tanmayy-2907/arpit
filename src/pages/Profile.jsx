import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit, Save, X } from 'lucide-react';

const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user.name,
    department: user.department,
    email: user.email,
    phone: '+1 (555) 123-4567',
    office: 'Room CS-205, Computer Science Building',
    officeHours: 'Monday & Wednesday: 2:00 PM - 4:00 PM',
    joinDate: 'September 2018',
    specializations: ['Data Structures', 'Database Systems', 'Algorithm Analysis'],
    bio: 'Passionate educator with over 15 years of experience in computer science education. Specialized in database systems and algorithm design with a focus on practical applications.'
  });

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original data
    setProfileData({
      name: user.name,
      department: user.department,
      email: user.email,
      phone: '+1 (555) 123-4567',
      office: 'Room CS-205, Computer Science Building',
      officeHours: 'Monday & Wednesday: 2:00 PM - 4:00 PM',
      joinDate: 'September 2018',
      specializations: ['Data Structures', 'Database Systems', 'Algorithm Analysis'],
      bio: 'Passionate educator with over 15 years of experience in computer science education. Specialized in database systems and algorithm design with a focus on practical applications.'
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
          <div className="flex space-x-3">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 flex items-center space-x-2"
              >
                <Edit className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-all duration-200 flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-all duration-200 flex items-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Picture & Basic Info */}
          <div className="lg:col-span-1">
            <div className="text-center mb-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200"
              />
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="text-2xl font-bold text-gray-800 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-center w-full"
                />
              ) : (
                <h2 className="text-2xl font-bold text-gray-800">{profileData.name}</h2>
              )}
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.department}
                  onChange={(e) => setProfileData({...profileData, department: e.target.value})}
                  className="text-gray-600 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-center w-full mt-2"
                />
              ) : (
                <p className="text-gray-600 text-lg">{profileData.department}</p>
              )}
            </div>

            <div className="bg-gray-50 rounded-xl p-4 space-y-4 border border-gray-200">
              <h3 className="text-gray-800 font-semibold mb-3">Quick Info</h3>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5" />
                <div>
                  <p className="text-sm text-gray-500">Joined</p>
                  <p>{profileData.joinDate}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Office</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.office}
                      onChange={(e) => setProfileData({...profileData, office: e.target.value})}
                      className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-gray-800 w-full"
                    />
                  ) : (
                    <p>{profileData.office}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-gray-800 font-semibold text-xl mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-gray-800"
                      />
                    ) : (
                      <p className="text-gray-800">{profileData.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-gray-800"
                      />
                    ) : (
                      <p className="text-gray-800">{profileData.phone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-gray-800 font-semibold text-xl mb-4">Office Hours</h3>
              {isEditing ? (
                <textarea
                  value={profileData.officeHours}
                  onChange={(e) => setProfileData({...profileData, officeHours: e.target.value})}
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 resize-none"
                  rows={2}
                />
              ) : (
                <p className="text-gray-800">{profileData.officeHours}</p>
              )}
            </div>

            {/* Specializations */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-gray-800 font-semibold text-xl mb-4">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm border border-purple-200"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-gray-800 font-semibold text-xl mb-4">About</h3>
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-gray-800 resize-none"
                  rows={4}
                />
              ) : (
                <p className="text-gray-800 leading-relaxed">{profileData.bio}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;