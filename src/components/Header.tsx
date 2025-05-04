
import { 
  CalendarIcon, UserIcon, FileTextIcon, 
  SearchIcon, BellIcon, UserCircleIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const location = useLocation();
  const pathTitle = getPageTitle(location.pathname);

  return (
    <header className="bg-white dark:bg-gray-950 border-b border-border p-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <h1 className="text-xl font-semibold">{pathTitle}</h1>
      </div>
      
      <div className="flex-1 mx-4 max-w-md hidden md:block">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="search" 
            placeholder="搜尋..." 
            className="w-full pl-9 pr-4 py-2 border border-border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-gray-600">
          <BellIcon className="w-5 h-5" />
        </Button>
        
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            <span>排程拜訪</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <FileTextIcon className="w-4 h-4" />
            <span>新增筆記</span>
          </Button>
          <Button variant="default" size="sm" className="flex items-center gap-2 gradient-blue">
            <UserIcon className="w-4 h-4" />
            <span>新增客戶</span>
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="ml-2">
          <UserCircleIcon className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
};

function getPageTitle(pathname: string): string {
  switch (pathname) {
    case "/":
      return "概覽";
    case "/clients":
      return "客戶列表";
    case "/visits":
      return "拜訪記錄";
    case "/notes":
      return "筆記整理";
    case "/calendar":
      return "行事曆";
    case "/analytics":
      return "數據分析";
    case "/notifications":
      return "通知中心";
    case "/settings":
      return "系統設置";
    default:
      if (pathname.startsWith("/clients/")) return "客戶資料";
      if (pathname.startsWith("/visits/")) return "拜訪細節";
      return "財務顧問系統";
  }
}

export default Header;
