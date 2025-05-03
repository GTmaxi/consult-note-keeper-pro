import { cn } from "@/lib/utils";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, SearchIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for visits
const mockVisits = [
  { 
    id: 1, 
    clientName: "張家豪", 
    date: "2025/05/01", 
    time: "14:00", 
    location: "台北市信義區忠孝東路", 
    purpose: "年度檢視", 
    completed: true 
  },
  { 
    id: 2, 
    clientName: "林美玲", 
    date: "2025/04/29", 
    time: "10:30", 
    location: "新北市板橋區文化路", 
    purpose: "保險規劃", 
    completed: true 
  },
  { 
    id: 3, 
    clientName: "王大明", 
    date: "2025/04/28", 
    time: "16:45", 
    location: "台北市大安區復興南路", 
    purpose: "投資建議", 
    completed: true 
  },
  { 
    id: 4, 
    clientName: "陳小華", 
    date: "2025/05/05", 
    time: "14:30", 
    location: "台北市信義區忠孝東路五段", 
    purpose: "退休規劃", 
    completed: false 
  },
  { 
    id: 5, 
    clientName: "李志明", 
    date: "2025/05/07", 
    time: "10:00", 
    location: "新北市板橋區文化路一段", 
    purpose: "資產配置", 
    completed: false 
  },
];

const VisitList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>();
  const navigate = useNavigate();

  // Filter visits based on search query and status filter
  const filteredVisits = mockVisits.filter(visit => {
    const matchesSearch = 
      visit.clientName.includes(searchQuery) ||
      visit.location.includes(searchQuery) ||
      visit.purpose.includes(searchQuery);
      
    const matchesStatus = 
      !statusFilter || 
      (statusFilter === "completed" && visit.completed) ||
      (statusFilter === "upcoming" && !visit.completed);
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>拜訪記錄</CardTitle>
            <Button onClick={() => navigate('/visits/new')} className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              <span>新增拜訪</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="搜尋客戶、地點或目的"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="篩選狀態" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">所有拜訪</SelectItem>
                <SelectItem value="completed">已完成</SelectItem>
                <SelectItem value="upcoming">即將拜訪</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>客戶</TableHead>
                  <TableHead>日期 / 時間</TableHead>
                  <TableHead className="hidden md:table-cell">地點</TableHead>
                  <TableHead className="hidden md:table-cell">目的</TableHead>
                  <TableHead>狀態</TableHead>
                  <TableHead className="text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVisits.map((visit) => (
                  <TableRow key={visit.id}>
                    <TableCell>
                      <div className="font-medium">{visit.clientName}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>{visit.date}</span>
                        <span className="text-muted-foreground mx-1">|</span>
                        <span>{visit.time}</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell max-w-[200px] truncate">
                      {visit.location}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{visit.purpose}</TableCell>
                    <TableCell>
                      <div className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        visit.completed 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      )}>
                        {visit.completed ? "已完成" : "即將拜訪"}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => navigate(`/visits/${visit.id}`)}
                      >
                        詳情
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitList;
