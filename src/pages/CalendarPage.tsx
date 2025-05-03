
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarHeader } from "@/features/calendar/CalendarHeader";
import { CalendarWithEvents } from "@/features/calendar/CalendarWithEvents";
import { EventList } from "@/features/calendar/EventList";
import { mockEvents } from "@/features/calendar/data";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  return (
    <div className="space-y-6">
      <CalendarHeader setSelectedDate={setSelectedDate} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="p-4">
            <CalendarWithEvents 
              events={mockEvents}
              selectedDate={selectedDate}
              onSelectDate={(date) => date && setSelectedDate(date)}
            />
          </CardContent>
        </Card>
        
        <EventList 
          events={mockEvents}
          selectedDate={selectedDate}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
