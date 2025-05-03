
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, ClockIcon, UserIcon, MessageSquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const recentClients = [
    { id: 1, name: "張家豪", contactDate: "2025/05/01", status: "已簽約" },
    { id: 2, name: "林美玲", contactDate: "2025/04/29", status: "提案中" },
    { id: 3, name: "王大明", contactDate: "2025/04/28", status: "追蹤中" },
  ];
  
  const upcomingVisits = [
    { id: 1, clientName: "陳小華", date: "2025/05/05 14:30", location: "台北市信義區忠孝東路五段" },
    { id: 2, clientName: "李志明", date: "2025/05/07 10:00", location: "新北市板橋區文化路一段" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">總客戶數</p>
              <p className="text-3xl font-bold">48</p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <UserIcon className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">本月拜訪</p>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
              <ClockIcon className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">今日行程</p>
              <p className="text-3xl font-bold">3</p>
            </div>
            <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <CalendarIcon className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">待辦事項</p>
              <p className="text-3xl font-bold">7</p>
            </div>
            <div className="h-12 w-12 bg-destructive/10 rounded-full flex items-center justify-center text-destructive">
              <MessageSquareIcon className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>近期客戶</CardTitle>
              <CardDescription>最近聯繫過的客戶</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => navigate('/clients')}>
              查看全部
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentClients.map(client => (
                <div key={client.id} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="font-medium">{client.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{client.name}</p>
                      <p className="text-sm text-muted-foreground">{client.contactDate}</p>
                    </div>
                  </div>
                  <div>
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs",
                      client.status === "已簽約" ? "bg-green-100 text-green-800" :
                      client.status === "提案中" ? "bg-blue-100 text-blue-800" :
                      "bg-orange-100 text-orange-800"
                    )}>
                      {client.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>即將拜訪</CardTitle>
              <CardDescription>未來7天的拜訪行程</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => navigate('/visits')}>
              查看全部
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingVisits.map(visit => (
                <div key={visit.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">{visit.clientName}</span>
                    <span className="text-muted-foreground text-sm">{visit.date}</span>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-start gap-2">
                    <svg
                      className="h-4 w-4 mt-0.5 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span>{visit.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="secondary" className="w-full">檢視詳情</Button>
                    <Button size="sm" variant="outline" className="w-full">重新排程</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
