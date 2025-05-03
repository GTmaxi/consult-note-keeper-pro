
// Mock data for calendar events
export interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  time: string;
  type: "client" | "meeting" | "event";
  client: string;
  location: string;
}

export const mockEvents: CalendarEvent[] = [
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
export const groupEventsByDate = (events: CalendarEvent[]) => {
  const grouped: Record<string, CalendarEvent[]> = {};
  
  events.forEach(event => {
    const dateKey = format(event.date, "yyyy-MM-dd");
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(event);
  });
  
  return grouped;
};

import { format } from "date-fns";
