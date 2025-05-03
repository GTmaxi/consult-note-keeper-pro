
import { cn } from "@/lib/utils";
import { UserIcon, CalendarIcon, FileTextIcon, ClockIcon, MessageSquareIcon } from "lucide-react";
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
          "fixed inset-0 bg-black/50 z-40 md:hidden",
          open ? "block" : "hidden"
        )}
        onClick={() => setOpen(false)}
      />
      
      <aside 
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-primary text-primary-foreground z-50 transition-transform md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-primary-foreground/10 flex items-center justify-between">
            <h1 className="text-xl font-bold">顧問筆記系統</h1>
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
                "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary-foreground/10",
                isActive('/') && "bg-primary-foreground/10"
              )}
              onClick={() => setOpen(false)}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22V12h6v10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>概覽</span>
            </Link>
            
            <Link
              to="/clients"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary-foreground/10",
                isActive('/clients') && "bg-primary-foreground/10"
              )}
              onClick={() => setOpen(false)}
            >
              <UserIcon className="w-5 h-5" />
              <span>客戶列表</span>
            </Link>
            
            <Link
              to="/visits"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary-foreground/10",
                isActive('/visits') && "bg-primary-foreground/10"
              )}
              onClick={() => setOpen(false)}
            >
              <ClockIcon className="w-5 h-5" />
              <span>拜訪記錄</span>
            </Link>
            
            <Link
              to="/notes"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary-foreground/10",
                isActive('/notes') && "bg-primary-foreground/10"
              )}
              onClick={() => setOpen(false)}
            >
              <FileTextIcon className="w-5 h-5" />
              <span>筆記整理</span>
            </Link>
            
            <Link
              to="/calendar"
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary-foreground/10",
                isActive('/calendar') && "bg-primary-foreground/10"
              )}
              onClick={() => setOpen(false)}
            >
              <CalendarIcon className="w-5 h-5" />
              <span>行事曆</span>
            </Link>
          </nav>
          
          <div className="p-4 border-t border-primary-foreground/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-semibold">FL</span>
              </div>
              <div>
                <p className="font-medium">財務顧問</p>
                <p className="text-sm opacity-80">專業版</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
