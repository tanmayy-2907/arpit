import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, Search, Filter, FileText, Video, Link as LinkIcon } from 'lucide-react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Data Structures and Algorithms Guide',
      description: 'Comprehensive guide covering all essential data structures with practical examples and complexity analysis.',
      type: 'document',
      category: 'academic',
      url: '#',
      downloadable: true,
      lastUpdated: '2024-03-15'
    },
    {
      id: 2,
      title: 'Database Design Best Practices',
      description: 'Industry standard practices for designing efficient and scalable database systems.',
      type: 'document',
      category: 'academic',
      url: '#',
      downloadable: true,
      lastUpdated: '2024-03-10'
    },
    {
      id: 3,
      title: 'Faculty Handbook 2024',
      description: 'Official faculty handbook containing policies, procedures, and important guidelines.',
      type: 'document',
      category: 'administrative',
      url: '#',
      downloadable: true,
      lastUpdated: '2024-01-15'
    },
    {
      id: 4,
      title: 'Student Evaluation Rubrics',
      description: 'Standardized rubrics for evaluating student assignments and projects.',
      type: 'document',
      category: 'administrative',
      url: '#',
      downloadable: true,
      lastUpdated: '2024-02-20'
    },
    {
      id: 5,
      title: 'Online Teaching Best Practices',
      description: 'Video series covering effective strategies for online and hybrid learning environments.',
      type: 'video',
      category: 'training',
      url: '#',
      downloadable: false,
      lastUpdated: '2024-03-01'
    },
    {
      id: 6,
      title: 'University Learning Management System',
      description: 'Quick access to the university\'s LMS for course management and student interaction.',
      type: 'link',
      category: 'tools',
      url: 'https://lms.university.edu',
      downloadable: false,
      lastUpdated: '2024-03-20'
    },
    {
      id: 7,
      title: 'Research Publication Guidelines',
      description: 'Guidelines and templates for faculty research publications and grant applications.',
      type: 'document',
      category: 'research',
      url: '#',
      downloadable: true,
      lastUpdated: '2024-02-28'
    },
    {
      id: 8,
      title: 'IT Support Portal',
      description: 'Access technical support, software downloads, and IT service requests.',
      type: 'link',
      category: 'tools',
      url: 'https://support.university.edu',
      downloadable: false,
      lastUpdated: '2024-03-18'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Resources', count: resources.length },
    { id: 'academic', label: 'Academic', count: resources.filter(r => r.category === 'academic').length },
    { id: 'administrative', label: 'Administrative', count: resources.filter(r => r.category === 'administrative').length },
    { id: 'training', label: 'Training', count: resources.filter(r => r.category === 'training').length },
    { id: 'research', label: 'Research', count: resources.filter(r => r.category === 'research').length },
    { id: 'tools', label: 'Tools', count: resources.filter(r => r.category === 'tools').length }
  ];

  const getResourceIcon = (type) => {
    switch (type) {
      case 'document':
        return FileText;
      case 'video':
        return Video;
      case 'link':
        return LinkIcon;
      default:
        return FileText;
    }
  };

  const getResourceColor = (type) => {
    switch (type) {
      case 'document':
        return 'blue';
      case 'video':
        return 'red';
      case 'link':
        return 'green';
      default:
        return 'gray';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'academic':
        return 'bg-blue-100 text-blue-700';
      case 'administrative':
        return 'bg-purple-100 text-purple-700';
      case 'training':
        return 'bg-green-100 text-green-700';
      case 'research':
        return 'bg-orange-100 text-orange-700';
      case 'tools':
        return 'bg-pink-100 text-pink-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || resource.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Resources</h1>
              <p className="text-gray-600">Access documents, tools, and educational materials</p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id} className="bg-white text-gray-800">
                  {category.label} ({category.count})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCategoryFilter(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all duration-200 ${
                categoryFilter === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{category.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                categoryFilter === category.id
                  ? 'bg-white text-purple-600'
                  : 'bg-gray-200 text-gray-700'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const Icon = getResourceIcon(resource.type);
            const color = getResourceColor(resource.type);
            
            return (
              <div
                key={resource.id}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${color}-100 flex-shrink-0`}>
                    <Icon className={`w-6 h-6 text-${color}-600`} />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                    {resource.category}
                  </span>
                </div>
                
                <h3 className="text-gray-800 font-semibold text-lg mb-2 line-clamp-2">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Updated: {resource.lastUpdated}</span>
                  <span className="capitalize">{resource.type}</span>
                </div>
                
                <div className="flex space-x-2">
                  {resource.downloadable ? (
                    <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  ) : (
                    <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>Open</span>
                    </button>
                  )}
                  <button className="px-3 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-all duration-200">
                    <BookOpen className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;