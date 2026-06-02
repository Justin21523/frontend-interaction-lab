import { NavLink } from 'react-router-dom';
import { Home, Activity, LayoutDashboard, FileText } from 'lucide-react'; 
import { cn } from '@/lib/utils';
import { useAppStore } from '@/stores/appStore';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/motion-lab', label: 'Motion Lab', icon: Activity },
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/form-lab', label: 'Form Lab', icon: FileText }, // New Nav Item
];


export default function Sidebar() {
  const { isSidebarCollapsed } = useAppStore();

  return (
    <aside
      className={cn(
        'bg-slate-900 text-white transition-all duration-300 flex flex-col',
        isSidebarCollapsed ? 'w-20' : 'w-64'
      )}
    >
      <div className="p-4 text-xl font-bold border-b border-slate-700 flex items-center gap-2">
        <Activity className="text-blue-400" size={24} />
        {!isSidebarCollapsed && <span>Interaction Lab</span>}
      </div>
      <nav className="flex-1 py-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-4 py-3 hover:bg-slate-800 transition-colors',
                isActive ? 'bg-blue-600 text-white' : 'text-slate-300'
              )
            }
          >
            <item.icon size={20} />
            {!isSidebarCollapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}