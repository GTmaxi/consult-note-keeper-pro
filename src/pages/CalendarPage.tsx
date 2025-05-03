
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { zh } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for calendar events
const mockEvents = [
  { 
    id: 1, 
    title: "與張家豪會面", 
    date: new Date(2025, 4, 1), 
    time: "14:00", 
    type: "client", 
    client: "張家豪",
    location: "台北市信義區忠孝東路"
  },
  { 
    id: 2, 
    title: "林美玲保險諮詢", 
    date: new Date(2025, 4, 3), 
    time: "10:30", 
    type: "client", 
    client: "林美玲",
    location: "新北市板橋區文化路"
  },
  { 
    id: 3, 
    title: "投資研討會", 
    date: new Date(2025, 4, 5), 
    time: "15:00", 
    type: "event", 
    client: "",
    location: "台北市南港區經貿二路"
  },
  { 
    id: 4, 
    title: "陳小華拜訪", 
    date: new Date(2025, 4, 5), 
    time: "10:00", 
    type: "client", 
    client: "陳小華",
    location: "台北市信義區忠孝東路"
  },
  { 
    id: 5, 
    title: "王大明理財規劃", 
    date: new Date(2025, 4, 8), 
    time: "16:30", 
    type: "client", 
    client: "王大明",
    location: "台北市大安區復興南路"
  },
  { 
    id: 6, 
    title: "團隊週會", 
    date: new Date(2025, 4, 10), 
    time: "09:00", 
    type: "meeting", 
    client: "",
    location: "公司會議室"
  },
  { 
    id: 7, 
    title: "李志明資產配置", 
    date: new Date(2025, 4, 12), 
    time: "14:30", 
    type: "client", 
    client: "李志明",
    location: "新北市板橋區文化路"
  },
];

// Function to group events by date
const groupEventsByDate = (events: typeof mockEvents) => {
  const grouped: Record<string, typeof mockEvents> = {};
  
  events.forEach(event => {
    const dateKey = format(event.date, "yyyy-MM-dd");
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(event);
  });
  
  return grouped;
};

const CalendarPage = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const navigate = useNavigate();
  
  const eventsByDate = groupEventsByDate(mockEvents);
  
  // Get events for the selected date
  const selectedDateKey = format(selectedDate, "yyyy-MM-dd");
  const eventsForSelectedDate = eventsByDate[selectedDateKey] || [];
  
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
    <div className="space-y-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="p-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              className="rounded-md mx-auto"
              locale={zh}
              components={{
                DayContent: (props) => renderDay(props.date),
              }}
            />
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>{format(selectedDate, "yyyy年MM月dd日 EEEE", { locale: zh })}</CardTitle>
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
      </div>
    </div>
  );
};

export default CalendarPage;
