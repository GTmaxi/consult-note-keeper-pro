
import { Date } from "date-fns";
import { zhTW } from "date-fns/locale";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { CalendarEvent, groupEventsByDate } from "./data";
import { cn } from "@/lib/utils";

interface CalendarWithEventsProps {
  events: CalendarEvent[];
  selectedDate: Date;
  onSelectDate: (date: Date | undefined) => void;
}

export const CalendarWithEvents = ({
  events,
  selectedDate,
  onSelectDate
}: CalendarWithEventsProps) => {
  const eventsByDate = groupEventsByDate(events);
  
  // Custom renderer for calendar days with events
  const renderDay = (day: Date) => {
    const dateKey = format(day, "yyyy-MM-dd");
    const hasEvents = !!eventsByDate[dateKey];
    
    return (
      <div className="relative">
        <div>{day.getDate()}</div>
        {hasEvents && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-secondary" />
        )}
      </div>
    );
  };

  return (
    <CalendarComponent
      mode="single"
      selected={selectedDate}
      onSelect={onSelectDate}
      className="rounded-md mx-auto"
      locale={zhTW}
      components={{
        DayContent: (props) => renderDay(props.date),
      }}
    />
  );
};
