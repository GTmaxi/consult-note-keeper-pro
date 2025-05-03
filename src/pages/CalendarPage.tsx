
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarWithEvents } from "@/features/calendar/CalendarWithEvents";
import { EventList } from "@/features/calendar/EventList";
import { CalendarHeader } from "@/features/calendar/CalendarHeader";
import { mockEvents } from "@/features/calendar/data";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  return (
    <div className="w-full max-w-full space-y-6">
      <Card className="w-full">
        <CardHeader className="pb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <CardTitle>行事曆</CardTitle>
          <Button onClick={() => console.log("新增事件")}>新增事件</Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6">
            <CalendarWithEvents 
              events={mockEvents} 
              selectedDate={selectedDate} 
              onDateChange={setSelectedDate} 
            />
            <div>
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
