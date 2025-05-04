
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FinancialGoal } from '@/types/FinancialProfile';
import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FinancialGoalCardProps {
  goal: FinancialGoal;
  onClick?: () => void;
}

const FinancialGoalCard: React.FC<FinancialGoalCardProps> = ({ goal, onClick }) => {
  const progressPercentage = Math.min(Math.round((goal.currentAmount / goal.targetAmount) * 100), 100);
  
  const getBadgeStyle = (type: string) => {
    switch(type) {
      case "退休規劃": return "bg-blue-100 text-blue-800";
      case "子女教育": return "bg-green-100 text-green-800";
      case "資產增值": return "bg-purple-100 text-purple-800";
      case "購置房產": return "bg-orange-100 text-orange-800";
      case "創業投資": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card 
      className="hover:shadow-md transition-all cursor-pointer hover-scale"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Badge className={cn("font-normal", getBadgeStyle(goal.type))}>
            {goal.type}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarIcon className="h-3 w-3 mr-1" /> 
            目標期限: {goal.targetDate}
          </div>
        </div>
        <CardTitle className="text-lg mt-2">{goal.description}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <span>目標進度</span>
              <span className="font-medium">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-muted-foreground">目前資金</p>
              <p className="font-medium">NT$ {goal.currentAmount.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground">目標金額</p>
              <p className="font-medium">NT$ {goal.targetAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialGoalCard;
