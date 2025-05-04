
import { cn } from "@/lib/utils";
import { 
  UserIcon, CalendarIcon, FileTextIcon, ClockIcon, 
  HomeIcon, PieChartIcon, BellIcon, SettingsIcon 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm",
          open ? "block" : "hidden"
        )}
        onClick={() => setOpen(false)}
      />
      
      <aside 
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground z-50 transition-transform md:translate-x-0 shadow-xl",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-5 flex items-center justify-between border-b border-primary-foreground/10">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-xl">F</span>
              </div>
              <h1 className="text-xl font-bold">FinPro</h1>
            </div>
            <button 
              className="p-1 rounded-full hover:bg-primary-foreground/10 md:hidden"
              onClick={() => setOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">關閉</span>
            </button>
          </div>
          
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <Link
              to="/"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors",
                isActive('/') && "bg-white/20 font-medium"
              )}
            >
              <HomeIcon className="w-5 h-5" />
              <span>概覽</span>
            </Link>
            
            <Link
              to="/clients"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors",
                isActive('/clients') && "bg-white/20 font-medium"
              )}
            >
              <UserIcon className="w-5 h-5" />
              <span>客戶列表</span>
            </Link>
            
            <Link
              to="/visits"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors",
                isActive('/visits') && "bg-white/20 font-medium"
              )}
            >
              <ClockIcon className="w-5 h-5" />
              <span>拜訪記錄</span>
            </Link>
            
            <Link
              to="/notes"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors",
                isActive('/notes') && "bg-white/20 font-medium"
              )}
            >
              <FileTextIcon className="w-5 h-5" />
              <span>筆記整理</span>
            </Link>
            
            <Link
              to="/calendar"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors",
                isActive('/calendar') && "bg-white/20 font-medium"
              )}
            >
              <CalendarIcon className="w-5 h-5" />
              <span>行事曆</span>
            </Link>

            <div className="pt-4 border-t border-primary-foreground/10 mt-4">
              <h3 className="text-xs uppercase text-primary-foreground/60 px-4 mb-2">其他功能</h3>
              <Link
                to="/analytics"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <PieChartIcon className="w-5 h-5" />
                <span>數據分析</span>
              </Link>
              <Link
                to="/notifications"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <BellIcon className="w-5 h-5" />
                <span>通知中心</span>
              </Link>
              <Link
                to="/settings"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <SettingsIcon className="w-5 h-5" />
                <span>系統設置</span>
              </Link>
            </div>
          </nav>
          
          <div className="p-4 border-t border-primary-foreground/10 bg-primary-foreground/5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-semibold">FL</span>
              </div>
              <div>
                <p className="font-medium">財務顧問</p>
                <p className="text-xs opacity-80">專業版</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
