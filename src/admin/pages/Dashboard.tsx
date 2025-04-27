import React from 'react';
import { 
  Image, 
  FileText, 
  MessageSquare, 
  Video, 
  TrendingUp, 
  Users 
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-neutral-900 mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Total Photos" 
          value="245" 
          change="+12%" 
          trend="up" 
          icon={<Image size={20} />} 
          color="amber"
        />
        <StatCard 
          title="Total Videos" 
          value="48" 
          change="+5%" 
          trend="up" 
          icon={<Video size={20} />} 
          color="purple"
        />
        <StatCard 
          title="Blog Posts" 
          value="32" 
          change="+3%" 
          trend="up" 
          icon={<FileText size={20} />} 
          color="blue"
        />
        <StatCard 
          title="Inquiries" 
          value="18" 
          change="+7%" 
          trend="up" 
          icon={<MessageSquare size={20} />} 
          color="green"
        />
        <StatCard 
          title="Site Visitors" 
          value="1,245" 
          change="+23%" 
          trend="up" 
          icon={<Users size={20} />} 
          color="red"
        />
        <StatCard 
          title="Storage Used" 
          value="4.2GB" 
          change="75%" 
          trend="neutral" 
          icon={<TrendingUp size={20} />} 
          color="indigo"
        />
      </div>
      
      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm lg:col-span-2">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div key={index} className="flex">
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full bg-${activity.color}-100 flex items-center justify-center text-${activity.color}-600 mr-4`}>
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{activity.text}</p>
                    <p className="text-xs text-neutral-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900">Quick Actions</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-700 hover:bg-amber-800">
                Upload New Photos
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Upload New Video
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Create Blog Post
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50">
                View Inquiries
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon, color }) => {
  let trendColor = 'text-neutral-500';
  let trendIcon = null;
  
  if (trend === 'up') {
    trendColor = 'text-green-500';
    trendIcon = (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    );
  } else if (trend === 'down') {
    trendColor = 'text-red-500';
    trendIcon = (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    );
  }
  
  let bgColor = 'bg-amber-100';
  let iconColor = 'text-amber-600';
  
  switch (color) {
    case 'purple':
      bgColor = 'bg-purple-100';
      iconColor = 'text-purple-600';
      break;
    case 'blue':
      bgColor = 'bg-blue-100';
      iconColor = 'text-blue-600';
      break;
    case 'green':
      bgColor = 'bg-green-100';
      iconColor = 'text-green-600';
      break;
    case 'red':
      bgColor = 'bg-red-100';
      iconColor = 'text-red-600';
      break;
    case 'indigo':
      bgColor = 'bg-indigo-100';
      iconColor = 'text-indigo-600';
      break;
    default:
      break;
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-neutral-500">{title}</h3>
        <div className={`${bgColor} p-2 rounded-md ${iconColor}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-semibold text-neutral-900">{value}</p>
          <div className={`flex items-center mt-2 ${trendColor}`}>
            {trendIcon}
            <span className="text-xs ml-1">{change}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const activities = [
  {
    icon: <Image size={18} />,
    text: 'You uploaded 12 new photos to "Wedding Collection"',
    time: '2 hours ago',
    color: 'amber',
  },
  {
    icon: <MessageSquare size={18} />,
    text: 'New inquiry from Sarah Johnson about wedding photography',
    time: '5 hours ago',
    color: 'green',
  },
  {
    icon: <FileText size={18} />,
    text: 'New blog post "Top 10 Wedding Photography Tips" published',
    time: 'Yesterday',
    color: 'blue',
  },
  {
    icon: <Video size={18} />,
    text: 'You uploaded a new video to "Commercial Projects"',
    time: '2 days ago',
    color: 'purple',
  },
  {
    icon: <Users size={18} />,
    text: 'Site traffic increased by 23% this week',
    time: 'This week',
    color: 'red',
  },
];

export default Dashboard;