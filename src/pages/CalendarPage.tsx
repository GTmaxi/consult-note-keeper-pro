
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarWithEvents } from "@/features/calendar/CalendarWithEvents";
import { EventList } from "@/features/calendar/EventList";
import { CalendarHeader } from "@/features/calendar/CalendarHeader";
import { mockEvents } from "@/features/calendar/data";
import { PlusIcon } from "lucide-react";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  return (
    <div className="w-full max-w-full space-y-6">
      <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b">
          <CardTitle>行事曆</CardTitle>
          <Button onClick={() => console.log("新增事件")} className="gradient-blue">
            <PlusIcon className="h-4 w-4 mr-1" />
            新增事件
          </Button>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6">
            <div className="bg-muted/30 rounded-lg p-4 shadow-sm">
              <CalendarWithEvents 
                events={mockEvents} 
                selectedDate={selectedDate} 
                onDateChange={setSelectedDate} 
              />
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-border/50 p-4">
              <CalendarHeader setSelectedDate={setSelectedDate} />
              <EventList 
                events={mockEvents} 
                selectedDate={selectedDate}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarPage;
