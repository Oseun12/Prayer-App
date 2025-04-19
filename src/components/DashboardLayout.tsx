'use client';
import { useState, useEffect } from 'react';
import { 
  FiBookmark,
  FiSun,
  FiMoon,
  FiCalendar,
  FiHeart,
  FiMic,
  FiMenu, 
  FiX
} from 'react-icons/fi';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Menu Button (Only shows on mobile) */}
      {isMobile && (
        <button 
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="fixed top-4 left-4 z-50 bg-indigo-900 text-white p-2 rounded-md shadow-lg"
        >
          {mobileSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      )}

      {/* Sidebar (Hidden on mobile unless toggled) */}
      <div 
        className={`
          bg-gradient-to-r from-indigo-900 to-purple-900 shadow-lg 
          transition-all duration-300 
          ${isMobile 
            ? `fixed inset-y-0 z-40 w-20 transform ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
            : `${collapsed ? 'w-20' : 'w-64'}`
          }
        `}
      >
        <div className="p-4 flex justify-between items-center border-b border-indigo-800">
          {(!isMobile || mobileSidebarOpen) && !collapsed && (
            <h1 className="text-xl font-bold text-white">Prayer-App</h1>
          )}
          {!isMobile && (
            <button onClick={() => setCollapsed(!collapsed)} className="text-white">
              {collapsed ? <FiMenu size={20} /> : <FiX size={20} />}
            </button>
          )}
        </div>
        <nav className="mt-6">
        <NavItem 
            icon={<FiSun />} 
            collapsed={collapsed}
            active
          >
            Morning Prayer
          </NavItem>
          
          <NavItem 
            icon={<FiMoon />} 
            collapsed={collapsed}
          >
            Night Devotion
          </NavItem>
          
          <NavItem 
            icon={<FiMic />} 
            collapsed={collapsed}
          >
            Daily Declaration
          </NavItem>

          <NavItem 
            icon={<FiBookmark />} 
            collapsed={collapsed}
          >
            Bookmarks
          </NavItem>
          
          <NavItem 
            icon={<FiCalendar />} 
            collapsed={collapsed}
          >
            Prayer Calendar
          </NavItem>
          
          <NavItem 
              icon={<FiHeart />} 
              collapsed={collapsed}
            >
              Prayer Requests
            </NavItem>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Add margin-top on mobile to prevent content hiding behind menu button */}
        <main className={`p- ${isMobile ? 'mt-' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
}

// NavItem component remains the same
function NavItem({ icon, children, collapsed, active = false }: { icon: React.ReactNode; children: string; collapsed: boolean; active?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center p-4 mx-2 rounded-lg transition-colors ${
        active ? 'bg-indigo-700 text-white' : 'text-white hover:bg-indigo-800'
      }`}
    >
      <span className="text-lg">{icon}</span>
      {!collapsed && <span className="ml-3">{children}</span>}
    </a>
  );
}