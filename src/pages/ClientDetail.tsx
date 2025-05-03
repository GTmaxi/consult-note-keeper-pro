
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  PhoneIcon,
  MailIcon,
  HomeIcon,
  CalendarIcon,
  FileTextIcon,
  MessageSquareIcon,
  ClockIcon,
} from "lucide-react";

// Mock data for a specific client
const mockClientDetails = {
  id: 1,
  name: "張家豪",
  phone: "0912-345-678",
  email: "chang@example.com",
  address: "台北市信義區忠孝東路五段123號10樓",
  occupation: "企業主",
  birthdate: "1975/08/15",
  status: "已簽約",
  notes: "張先生是一位企業主，主要從事進出口貿易，對於投資理財有一定程度的了解。目前已婚，有兩個孩子，長子今年即將進入大學，次子正在國中階段。他最近對於退休規劃和孩子的教育基金有更多的需求。",
  products: [
    { name: "全球高股息ETF", type: "投資", date: "2024/10/15" },
    { name: "高額終身壽險", type: "保險", date: "2024/08/03" },
    { name: "教育基金信託", type: "儲蓄", date: "2023/12/22" },
  ],
  visits: [
    { id: 1, date: "2025/05/01", purpose: "年度檢視", notes: "討論了投資組合的調整和稅務規劃。" },
    { id: 2, date: "2025/03/15", purpose: "投資策略", notes: "評估了市場的變化對其投資的影響。" },
    { id: 3, date: "2025/01/20", purpose: "保險規劃", notes: "檢視了現有保險覆蓋範圍並討論了增加的可能性。" },
  ],
};

const ClientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // In a real app, you would fetch the client details using the id
  // For now, we'll just use our mock data
  const client = mockClientDetails;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">{client.name}</h1>
          <p className="text-muted-foreground">{client.occupation}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => navigate('/clients')}>返回列表</Button>
          <Button variant="default" onClick={() => navigate(`/clients/${id}/edit`)}>編輯資料</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full max-w-md grid grid-cols-3">
          <TabsTrigger value="overview">基本資訊</TabsTrigger>
          <TabsTrigger value="products">持有產品</TabsTrigger>
          <TabsTrigger value="visits">拜訪紀錄</TabsTrigger>
        </TabsList>
        <div className="mt-6">
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>客戶資訊</CardTitle>
                  <CardDescription>客戶的基本聯絡資料</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">狀態</p>
                      <Badge className={
                        client.status === "已簽約" ? "bg-green-500" : 
                        client.status === "提案中" ? "bg-blue-500" : "bg-orange-500"
                      }>
                        {client.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">職業</p>
                      <p>{client.occupation}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">手機</p>
                        <p>{client.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MailIcon className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                        <p>{client.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-2">
                      <HomeIcon className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">地址</p>
                        <p className="break-words">{client.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">生日</p>
                        <p>{client.birthdate}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>快速操作</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/visits/new')}>
                    <ClockIcon className="mr-2 h-4 w-4" /> 安排拜訪
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileTextIcon className="mr-2 h-4 w-4" /> 新增筆記
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquareIcon className="mr-2 h-4 w-4" /> 發送訊息
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>客戶筆記</CardTitle>
                <CardDescription>關於客戶的重要資訊和備註</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line">{client.notes}</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="products">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>持有產品</CardTitle>
                <Button size="sm" variant="outline">新增產品</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {client.products.map((product, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between">
                        <div className="font-medium">{product.name}</div>
                        <Badge>{product.type}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        購買日期: {product.date}
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Button size="sm" variant="outline">查看詳情</Button>
                        <Button size="sm" variant="ghost">編輯</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="visits">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>拜訪紀錄</CardTitle>
                <Button size="sm" variant="outline" onClick={() => navigate('/visits/new')}>
                  安排拜訪
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {client.visits.map((visit, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between">
                        <div className="font-medium">{visit.purpose}</div>
                        <div className="text-sm text-muted-foreground">{visit.date}</div>
                      </div>
                      <div className="text-sm">{visit.notes}</div>
                      <div className="flex items-center gap-2 pt-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => navigate(`/visits/${visit.id}`)}
                        >
                          查看詳情
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ClientDetail;
