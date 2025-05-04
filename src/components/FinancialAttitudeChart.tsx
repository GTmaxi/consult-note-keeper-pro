
import React from 'react';
import { FinancialAttitude } from '@/types/FinancialProfile';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { 
  ArrowUpFromLine, 
  ArrowDownFromLine, 
  Clock, 
  ShieldCheck, 
  ArrowUp, 
  ArrowDown 
} from "lucide-react";

interface FinancialAttitudeChartProps {
  attitudes: FinancialAttitude;
  editable?: boolean;
  onChange?: (key: keyof FinancialAttitude, value: number) => void;
}

const FinancialAttitudeChart: React.FC<FinancialAttitudeChartProps> = ({ 
  attitudes, 
  editable = false,
  onChange 
}) => {
  const handleChange = (key: keyof FinancialAttitude) => (values: number[]) => {
    if (onChange && editable) {
      onChange(key, values[0] as 1 | 2 | 3 | 4 | 5);
    }
  };

  const attitudeItems = [
    {
      key: 'return' as keyof FinancialAttitude,
      title: '預期報酬',
      icon: <ArrowUp className="h-5 w-5 text-primary" />,
      description: '投資預期回報的高低程度',
      lowLabel: '穩健低報酬',
      highLabel: '高風險高報酬',
    },
    {
      key: 'risk' as keyof FinancialAttitude,
      title: '風險承受',
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      description: '能夠承受的投資風險程度',
      lowLabel: '風險規避',
      highLabel: '風險接受',
    },
    {
      key: 'period' as keyof FinancialAttitude,
      title: '投資期限',
      icon: <Clock className="h-5 w-5 text-primary" />,
      description: '投資時間範圍的長短',
      lowLabel: '短期',
      highLabel: '長期',
    },
    {
      key: 'flexibility' as keyof FinancialAttitude,
      title: '資金流動性',
      icon: <ArrowUpFromLine className="h-5 w-5 text-primary" />,
      description: '資金調度彈性需求',
      lowLabel: '低流動性需求',
      highLabel: '高流動性需求',
    }
  ];

  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">客戶投資態度分析</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {attitudeItems.map((item) => (
          <div key={item.key} className="space-y-2">
            <div className="flex items-center gap-2">
              {item.icon}
              <h3 className="font-medium">{item.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <div className="pt-2 pb-4">
              <Slider
                defaultValue={[attitudes[item.key]]}
                min={1}
                max={5}
                step={1}
                disabled={!editable}
                onValueChange={handleChange(item.key)}
              />
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>{item.lowLabel}</span>
                <span>{item.highLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FinancialAttitudeChart;
