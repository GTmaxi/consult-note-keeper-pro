
import React from "react";
import { format, isSameDay, parseISO } from "date-fns";
import { zhTW } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CalendarEvent } from "./data";

interface CalendarWithEventsProps {
  events: CalendarEvent[];
  selectedDate: Date;
  onDateChange: (date: Date | undefined) => void;
}

export function CalendarWithEvents({
  events,
  selectedDate,
  onDateChange,
}: CalendarWithEventsProps) {
  // Function to highlight dates with events
  function isDayWithEvent(day: Date) {
    return events.some((event) => {
      const eventDate = parseISO(event.date);
      return isSameDay(eventDate, day);
    });
  }

  // Count events for a specific day
  function getEventsForDay(day: Date) {
    return events.filter((event) => {
      const eventDate = parseISO(event.date);
      return isSameDay(eventDate, day);
    });
  }

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={onDateChange}
      className="rounded-md border shadow"
      locale={zhTW}
      components={{
        day: ({ day, ...props }) => {
          const dayEvents = getEventsForDay(day);
          const hasEvents = dayEvents.length > 0;
          return (
            <div
              {...props}
              className={cn(
                props.className,
                hasEvents && "relative"
              )}
            >
              {format(day, "d")}
              {hasEvents && (
                <Badge
                  className="absolute -bottom-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]"
                  variant="secondary"
                >
                  {dayEvents.length}
                </Badge>
              )}
            </div>
          );
        },
      }}
    />
  );
}
