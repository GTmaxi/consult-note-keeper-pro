
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarEvent, groupEventsByDate } from "./data";
import { cn } from "@/lib/utils";

interface EventListProps {
  events: CalendarEvent[];
  selectedDate: Date;
}

export const EventList = ({ events, selectedDate }: EventListProps) => {
  const navigate = useNavigate();
  const eventsByDate = groupEventsByDate(events);
  
  // Get events for the selected date
  const selectedDateKey = format(selectedDate, "yyyy-MM-dd");
  const eventsForSelectedDate = eventsByDate[selectedDateKey] || [];

  return (
    <Card className="lg:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle>
          {format(selectedDate, "yyyy年MM月dd日 EEEE", { locale: zhTW })}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {eventsForSelectedDate.length > 0 ? (
          <div className="space-y-4">
            {eventsForSelectedDate.map((event) => (
              <div 
                key={event.id} 
                className={cn(
                  "border-l-4 pl-4 py-2 relative",
                  event.type === "client" ? "border-secondary" : 
                  event.type === "meeting" ? "border-primary" : "border-accent"
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{event.title}</h3>
                  <span className="text-sm text-muted-foreground">{event.time}</span>
                </div>
                {event.client && (
                  <p className="text-sm mb-1">客戶: {event.client}</p>
                )}
                <p className="text-sm flex items-center text-muted-foreground">
                  <svg
                    className="h-3.5 w-3.5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  {event.location}
                </p>
                <div className="mt-2 flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => event.type === "client" && navigate(`/visits/${event.id}`)}
                  >
                    查看詳情
                  </Button>
                  <Button variant="ghost" size="sm">編輯</Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
            <h3 className="mt-4 text-lg font-medium">沒有行程</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              這一天沒有安排任何拜訪或會議
            </p>
            <Button 
              variant="outline" 
              className="mt-6"
              onClick={() => navigate('/visits/new')}
            >
              新增行程
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
