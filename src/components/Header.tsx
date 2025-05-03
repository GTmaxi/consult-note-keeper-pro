
import { CalendarIcon, UserIcon, FileTextIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const location = useLocation();
  const pathTitle = getPageTitle(location.pathname);

  return (
    <header className="bg-white border-b border-border p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
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
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
          <CalendarIcon className="w-4 h-4" />
          <span>排程拜訪</span>
        </Button>
        <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
          <FileTextIcon className="w-4 h-4" />
          <span>新增筆記</span>
        </Button>
        <Button variant="secondary" size="sm" className="flex items-center gap-2">
          <UserIcon className="w-4 h-4" />
          <span>新增客戶</span>
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
    default:
      if (pathname.startsWith("/clients/")) return "客戶資料";
      if (pathname.startsWith("/visits/")) return "拜訪細節";
      return "財務顧問系統";
  }
}

export default Header;
