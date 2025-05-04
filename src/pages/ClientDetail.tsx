import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinancialGoal } from "@/types/FinancialProfile";
import FinancialGoalsList from "@/components/FinancialGoalsList";
import FinancialAttitudeChart from "@/components/FinancialAttitudeChart";

// Mock client data
const getMockClient = (id: string) => ({
  id: parseInt(id),
  name: "張家豪",
  phone: "0912-345-678",
  email: "chang@example.com",
  status: "已簽約",
  address: "台北市信義區忠孝東路五段123號",
  occupation: "資深工程師",
  birthdate: "1985/03/15",
  notes: "對退休規劃和子女教育金有較高需求，風險承受度中等。",
  lastVisit: "2025/05/01",
  createdAt: "2024/01/15",
});

// Mock financial goals
const mockFinancialGoals: FinancialGoal[] = [
  {
    id: 1,
    type: "退休規劃",
    description: "安穩退休金",
    targetAmount: 8000000,
    currentAmount: 3200000,
    targetDate: "2040/12/31",
    attitudes: {
      return: 3,
      risk: 2,
      period: 5,
      flexibility: 2
    }
  },
  {
    id: 2,
    type: "子女教育",
    description: "子女海外留學",
    targetAmount: 3000000,
    currentAmount: 1200000,
    targetDate: "2030/08/31",
    attitudes: {
      return: 3,
      risk: 3,
      period: 3,
      flexibility: 3
    }
  },
  {
    id: 3,
    type: "資產增值",
    description: "定期投資組合",
    targetAmount: 5000000,
    currentAmount: 2500000,
    targetDate: "2035/06/30",
    attitudes: {
      return: 4,
      risk: 4,
      period: 4,
      flexibility: 2
    }
  }
];

// Overall financial attitude (average of all goals)
const calculateOverallAttitude = (goals: FinancialGoal[]) => {
  const result = {
    return: 0,
    risk: 0,
    period: 0,
    flexibility: 0
  };
  
  goals.forEach(goal => {
    result.return += goal.attitudes.return;
    result.risk += goal.attitudes.risk;
    result.period += goal.attitudes.period;
    result.flexibility += goal.attitudes.flexibility;
  });
  
  const count = goals.length;
  return {
    return: Math.round(result.return / count) as 1 | 2 | 3 | 4 | 5,
    risk: Math.round(result.risk / count) as 1 | 2 | 3 | 4 | 5,
    period: Math.round(result.period / count) as 1 | 2 | 3 | 4 | 5,
    flexibility: Math.round(result.flexibility / count) as 1 | 2 | 3 | 4 | 5
  };
};

const ClientDetail = () => {
  const { id } = useParams<{ id: string }>();
  const client = getMockClient(id || "1");
  const overallAttitude = calculateOverallAttitude(mockFinancialGoals);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">{client.name}</h1>
          <p className="text-muted-foreground">{client.email} | {client.phone}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">編輯資料</Button>
          <Button>安排拜訪</Button>
        </div>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="profile">基本資料</TabsTrigger>
          <TabsTrigger value="financial">財務目標</TabsTrigger>
          <TabsTrigger value="history">拜訪紀錄</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>客戶資訊</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">地址</p>
                    <p>{client.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">職業</p>
                    <p>{client.occupation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">生日</p>
                    <p>{client.birthdate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">客戶狀態</p>
                    <p>{client.status}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">備註</p>
                  <p>{client.notes}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>整體投資偏好</CardTitle>
              </CardHeader>
              <CardContent>
                <FinancialAttitudeChart attitudes={overallAttitude} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="financial">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>財務目標</CardTitle>
              <Button size="sm">新增目標</Button>
            </CardHeader>
            <CardContent>
              <FinancialGoalsList goals={mockFinancialGoals} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>拜訪紀錄</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">最近拜訪日期: {client.lastVisit}</p>
              {/* 拜訪紀錄內容 - 可以在此新增拜訪記錄相關元件 */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientDetail;
