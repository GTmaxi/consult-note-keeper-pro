
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3Icon, 
  TrendingUpIcon, 
  UsersIcon, 
  CalendarIcon, 
  ClockIcon, 
  ArrowUpIcon, 
  ArrowDownIcon, 
  InfoIcon
} from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="新客戶" 
          value="28" 
          change="+12%" 
          changeType="positive" 
          icon={<UsersIcon className="h-5 w-5 text-blue-500" />}
        />
        <StatCard 
          title="拜訪次數" 
          value="143" 
          change="+8%" 
          changeType="positive" 
          icon={<ClockIcon className="h-5 w-5 text-purple-500" />}
        />
        <StatCard 
          title="轉換率" 
          value="24.5%" 
          change="-2%" 
          changeType="negative" 
          icon={<TrendingUpIcon className="h-5 w-5 text-green-500" />}
        />
        <StatCard 
          title="預約會議" 
          value="17" 
          change="+5" 
          changeType="positive" 
          icon={<CalendarIcon className="h-5 w-5 text-amber-500" />}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <Card className="col-span-2 hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-2 flex items-center justify-between">
            <CardTitle className="text-lg font-medium">業績追蹤</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs h-8">週</Button>
              <Button variant="outline" size="sm" className="text-xs h-8 bg-muted">月</Button>
              <Button variant="outline" size="sm" className="text-xs h-8">季</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/30 rounded-lg">
              <div className="text-center">
                <BarChart3Icon className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                <p className="text-muted-foreground">圖表區域</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">最近活動</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ActivityItem 
              title="與王先生會議"
              description="討論投資組合調整策略"
              time="1 小時前"
              type="meeting"
            />
            <ActivityItem 
              title="李小姐投資建議"
              description="發送退休計劃分析報告"
              time="3 小時前"
              type="document"
            />
            <ActivityItem 
              title="新客戶: 張先生"
              description="完成初步財務評估"
              time="昨天"
              type="client"
            />
            <ActivityItem 
              title="團隊週會"
              description="討論市場趨勢與產品更新"
              time="昨天"
              type="meeting"
            />
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full text-sm">查看所有活動</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Meetings */}
        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">即將來臨的會議</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <MeetingItem
              client="陳小姐"
              purpose="投資組合審查"
              date="今天, 14:30"
            />
            <MeetingItem
              client="林先生"
              purpose="退休計劃諮詢"
              date="明天, 10:00"
            />
            <MeetingItem
              client="黃太太"
              purpose="稅務規劃討論"
              date="11月5日, 15:00"
            />
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full text-sm">查看所有會議</Button>
          </CardFooter>
        </Card>

        {/* Client Tasks */}
        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">待辦事項</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <TaskItem
                title="更新張先生投資組合"
                due="今天"
                priority="高"
              />
              <TaskItem
                title="準備季度報告"
                due="明天"
                priority="中"
              />
              <TaskItem
                title="客戶滿意度調查跟進"
                due="11月6日"
                priority="低"
              />
              <TaskItem
                title="產品培訓課程"
                due="11月8日"
                priority="中"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full text-sm">查看所有待辦事項</Button>
          </CardFooter>
        </Card>

        {/* Market Updates */}
        <Card className="hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">市場資訊</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <MarketItem
              index="美股道瓊"
              value="38,431.68"
              change="+0.35%"
              changeType="positive"
            />
            <MarketItem
              index="納斯達克"
              value="15,643.21"
              change="-0.22%"
              changeType="negative"
            />
            <MarketItem
              index="台灣加權"
              value="22,417.09"
              change="+0.78%"
              changeType="positive"
            />
            <MarketItem
              index="上證指數"
              value="3,214.85"
              change="+0.45%"
              changeType="positive"
            />
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full text-sm">查看更多市場資訊</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, change, changeType, icon }) => (
  <Card className="hover:shadow-md transition-shadow duration-300">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h4 className="text-2xl font-bold mt-1">{value}</h4>
          <div className="flex items-center gap-1 mt-1">
            {changeType === 'positive' ? (
              <span className="text-green-500 text-xs flex items-center">
                <ArrowUpIcon className="h-3 w-3" /> {change}
              </span>
            ) : (
              <span className="text-red-500 text-xs flex items-center">
                <ArrowDownIcon className="h-3 w-3" /> {change}
              </span>
            )}
            <span className="text-xs text-muted-foreground">過去30天</span>
          </div>
        </div>
        <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

// Activity Item Component
const ActivityItem = ({ title, description, time, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'meeting':
        return <CalendarIcon className="h-4 w-4 text-blue-500" />;
      case 'document':
        return <InfoIcon className="h-4 w-4 text-amber-500" />;
      case 'client':
        return <UsersIcon className="h-4 w-4 text-green-500" />;
      default:
        return <InfoIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex gap-3">
      <div className="mt-0.5 h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center">
        {getIcon()}
      </div>
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground mt-1">{time}</p>
      </div>
    </div>
  );
};

// Meeting Item Component
const MeetingItem = ({ client, purpose, date }) => (
  <div className="flex items-center gap-3">
    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
      {client.charAt(0)}
    </div>
    <div className="flex-1">
      <h4 className="text-sm font-medium">{client}</h4>
      <p className="text-xs text-muted-foreground">{purpose}</p>
      <p className="text-xs text-blue-600 mt-1">{date}</p>
    </div>
  </div>
);

// Task Item Component
const TaskItem = ({ title, due, priority }) => {
  const getPriorityColor = () => {
    switch (priority) {
      case '高':
        return 'bg-red-100 text-red-700 border-red-200';
      case '中':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case '低':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs text-muted-foreground mt-1">截止: {due}</p>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor()}`}>
        {priority}
      </span>
    </div>
  );
};

// Market Item Component
const MarketItem = ({ index, value, change, changeType }) => (
  <div className="flex items-center justify-between">
    <div>
      <h4 className="text-sm font-medium">{index}</h4>
      <p className="text-sm">{value}</p>
    </div>
    <span className={changeType === 'positive' ? 'text-green-500 flex items-center' : 'text-red-500 flex items-center'}>
      {changeType === 'positive' ? <ArrowUpIcon className="h-3 w-3 mr-1" /> : <ArrowDownIcon className="h-3 w-3 mr-1" />}
      {change}
    </span>
  </div>
);

export default Index;
