
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserIcon, SearchIcon } from "lucide-react";
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

// Mock data for clients
const mockClients = [
  { id: 1, name: "張家豪", phone: "0912-345-678", email: "chang@example.com", status: "已簽約", lastVisit: "2025/05/01" },
  { id: 2, name: "林美玲", phone: "0923-456-789", email: "lin@example.com", status: "提案中", lastVisit: "2025/04/29" },
  { id: 3, name: "王大明", phone: "0934-567-890", email: "wang@example.com", status: "追蹤中", lastVisit: "2025/04/28" },
  { id: 4, name: "陳小華", phone: "0945-678-901", email: "chen@example.com", status: "已簽約", lastVisit: "2025/04/25" },
  { id: 5, name: "李志明", phone: "0956-789-012", email: "lee@example.com", status: "已簽約", lastVisit: "2025/04/22" },
  { id: 6, name: "吳美美", phone: "0967-890-123", email: "wu@example.com", status: "提案中", lastVisit: "2025/04/20" },
  { id: 7, name: "趙永順", phone: "0978-901-234", email: "chao@example.com", status: "追蹤中", lastVisit: "2025/04/18" },
];

const ClientList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>();
  const navigate = useNavigate();

  // Filter clients based on search query and status filter
  const filteredClients = mockClients.filter(client => {
    const matchesSearch = 
      client.name.includes(searchQuery) ||
      client.phone.includes(searchQuery) ||
      client.email.includes(searchQuery);
      
    const matchesStatus = !statusFilter || client.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>客戶列表</CardTitle>
            <Button onClick={() => navigate('/clients/new')} className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              <span>新增客戶</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="搜尋客戶名稱、電話或Email"
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
                <SelectItem value="">所有狀態</SelectItem>
                <SelectItem value="已簽約">已簽約</SelectItem>
                <SelectItem value="提案中">提案中</SelectItem>
                <SelectItem value="追蹤中">追蹤中</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>姓名</TableHead>
                  <TableHead className="hidden md:table-cell">聯絡電話</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead>狀態</TableHead>
                  <TableHead className="hidden md:table-cell">上次拜訪</TableHead>
                  <TableHead className="text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>
                      <div className="font-medium">{client.name}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{client.phone}</TableCell>
                    <TableCell className="hidden md:table-cell">{client.email}</TableCell>
                    <TableCell>
                      <div className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        client.status === "已簽約" ? "bg-green-100 text-green-800" :
                        client.status === "提案中" ? "bg-blue-100 text-blue-800" :
                        "bg-orange-100 text-orange-800"
                      )}>
                        {client.status}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{client.lastVisit}</TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => navigate(`/clients/${client.id}`)}
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

export default ClientList;
