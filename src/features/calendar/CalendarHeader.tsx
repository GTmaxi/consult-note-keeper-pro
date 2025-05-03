
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CalendarHeaderProps {
  setSelectedDate: (date: Date) => void;
}

export const CalendarHeader = ({ setSelectedDate }: CalendarHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">行事曆</h1>
      <div className="flex gap-3">
        <Button variant="outline" onClick={() => setSelectedDate(new Date())}>
          今天
        </Button>
        <Button variant="default" onClick={() => navigate('/visits/new')}>
          新增行程
        </Button>
      </div>
    </div>
  );
};
