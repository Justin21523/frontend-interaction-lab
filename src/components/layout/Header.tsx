import { Menu, Bell } from 'lucide-react';
import { useAppStore } from '@/stores/appStore';

export default function Header() {
  const { toggleSidebar } = useAppStore();

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      <button
        onClick={toggleSidebar}
        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        aria-label="Toggle sidebar"
      >
        <Menu size={20} />
      </button>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative" aria-label="Notifications">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          U
        </div>
      </div>
    </header>
  );
}