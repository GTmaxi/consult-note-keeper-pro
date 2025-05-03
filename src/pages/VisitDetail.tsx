import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, ClockIcon, MapPinIcon, UserIcon, FileTextIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for a specific visit
const mockVisitDetails = {
  id: 1,
  clientName: "張家豪",
  clientId: 1,
  date: "2025/05/01",
  time: "14:00",
  location: "台北市信義區忠孝東路五段123號10樓",
  purpose: "年度檢視",
  completed: true,
  notes: "客戶對於目前的投資組合表示滿意，但希望能增加一些高收益的選項。我們討論了增加部分債券ETF的可能性，並對2025年的稅務規劃進行了初步討論。客戶也提到他的小孩明年就要上大學了，我們討論了教育資金的規劃。",
  followUps: [
    "提供高收益債券ETF的分析報告",
    "準備2025年稅務規劃書",
    "分析教育基金選項",
  ],
  products: [
    "全球股票型ETF",
    "高收益債券ETF",
    "教育基金儲蓄計劃",
  ],
};

const VisitDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // In a real app, you would fetch the visit details using the id
  // For now, we'll just use our mock data
  const visit = mockVisitDetails;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">拜訪記錄詳情</h1>
          <p className="text-muted-foreground">查看並編輯拜訪詳細資訊</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => navigate('/visits')}>返回列表</Button>
          <Button variant="default" onClick={() => navigate(`/visits/${id}/edit`)}>編輯記錄</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>拜訪筆記</CardTitle>
              <CardDescription>記錄與客戶的談話內容和重要事項</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                value={visit.notes} 
                readOnly
                className="min-h-[200px] resize-none"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>後續追蹤事項</CardTitle>
              <CardDescription>需要完成的事項和提醒</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {visit.followUps.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline" size="sm">
                新增事項
              </Button>
              <Button variant="default" size="sm">
                標記為已完成
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>討論產品</CardTitle>
              <CardDescription>與客戶討論的產品和服務</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {visit.products.map((product, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>拜訪資訊</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-2">
                <UserIcon className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">客戶</p>
                  <p className="text-muted-foreground">
                    <a href={`/clients/${visit.clientId}`} className="hover:underline">
                      {visit.clientName}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <CalendarIcon className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">日期</p>
                  <p className="text-muted-foreground">{visit.date}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <ClockIcon className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">時間</p>
                  <p className="text-muted-foreground">{visit.time}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPinIcon className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">地點</p>
                  <p className="text-muted-foreground">{visit.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <FileTextIcon className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">目的</p>
                  <p className="text-muted-foreground">{visit.purpose}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5 flex items-center justify-center">
                  <div className={cn(
                    "h-3 w-3 rounded-full",
                    visit.completed ? "bg-green-500" : "bg-blue-500"
                  )} />
                </div>
                <div>
                  <p className="font-medium">狀態</p>
                  <p className="text-muted-foreground">
                    {visit.completed ? "已完成" : "即將拜訪"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>相關文件</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <button className="w-full flex items-center gap-2 p-2 border border-dashed rounded-md hover:bg-muted/50 justify-center">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span>上傳文件</span>
              </button>

              <p className="text-sm text-muted-foreground text-center">
                尚無相關文件
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VisitDetail;
