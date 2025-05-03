
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, PlusIcon, FileTextIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Mock data for notes
const mockNotes = [
  { 
    id: 1, 
    title: "張家豪 - 退休規劃討論", 
    content: "與張先生討論其退休計劃，我們評估了他目前的資產配置和未來的財務需求。他希望在10年內退休，需要規劃相應的投資策略。建議增加一些穩定收益的投資產品。", 
    date: "2025/05/01",
    client: "張家豪",
    tags: ["退休規劃", "資產配置"]
  },
  { 
    id: 2, 
    title: "林美玲 - 子女教育基金", 
    content: "林女士希望為兩個孩子設立教育基金。我們討論了各種選擇，包括儲蓄保險和投資組合。她對於中長期投資有一定的接受度，但希望風險不要太高。", 
    date: "2025/04/29",
    client: "林美玲",
    tags: ["教育基金", "風險評估"]
  },
  { 
    id: 3, 
    title: "王大明 - 投資組合評估", 
    content: "對王先生的投資組合進行了季度評估。由於市場波動，建議調整部分股票配置，增加一些防禦性較強的資產。他對於目前的投資報酬率表示滿意，但希望能進一步提高收益。", 
    date: "2025/04/28",
    client: "王大明",
    tags: ["投資評估", "資產重配"]
  },
  { 
    id: 4, 
    title: "李志明 - 保險需求分析", 
    content: "李先生最近剛有了第一個孩子，來諮詢增加保險覆蓋範圍的可能性。我們討論了壽險和醫療保險的選項，以及配合他目前財務狀況的保費預算。", 
    date: "2025/04/25",
    client: "李志明",
    tags: ["保險規劃", "家庭保障"]
  },
  { 
    id: 5, 
    title: "2025年第二季市場展望", 
    content: "總結了2025年第二季的市場走勢預測和可能的投資機會。全球經濟增長預期溫和，但通膨壓力仍在。建議關注科技和醫療保健板塊，同時適當配置債券以分散風險。", 
    date: "2025/04/20",
    client: "",
    tags: ["市場分析", "投資策略"]
  },
];

// All possible tags from our mock data
const allTags = Array.from(new Set(mockNotes.flatMap(note => note.tags)));

const NotesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tagFilter, setTagFilter] = useState<string | undefined>();
  const navigate = useNavigate();

  // Filter notes based on search query and tag filter
  const filteredNotes = mockNotes.filter(note => {
    const matchesSearch = 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.client.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesTag = !tagFilter || tagFilter === "all" || note.tags.includes(tagFilter);
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="w-full max-w-full space-y-6 overflow-x-hidden">
      <Card className="w-full">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>筆記整理</CardTitle>
            <Button onClick={() => navigate('/notes/new')} className="flex items-center gap-2">
              <PlusIcon className="h-4 w-4" />
              <span>新增筆記</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="搜尋筆記內容"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={tagFilter} onValueChange={setTagFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="篩選標籤" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">所有標籤</SelectItem>
                {allTags.map(tag => (
                  <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNotes.map(note => (
              <Card key={note.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 pb-3 border-b">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <FileTextIcon className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm text-muted-foreground">{note.date}</span>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <svg
                          width="15"
                          height="3"
                          viewBox="0 0 15 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-muted-foreground"
                        >
                          <path
                            d="M2.5 1.5C2.5 2.05228 2.05228 2.5 1.5 2.5C0.947715 2.5 0.5 2.05228 0.5 1.5C0.5 0.947715 0.947715 0.5 1.5 0.5C2.05228 0.5 2.5 0.947715 2.5 1.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M8.5 1.5C8.5 2.05228 8.05228 2.5 7.5 2.5C6.94772 2.5 6.5 2.05228 6.5 1.5C6.5 0.947715 6.94772 0.5 7.5 0.5C8.05228 0.5 8.5 0.947715 8.5 1.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M14.5 1.5C14.5 2.05228 14.0523 2.5 13.5 2.5C12.9477 2.5 12.5 2.05228 12.5 1.5C12.5 0.947715 12.9477 0.5 13.5 0.5C14.0523 0.5 14.5 0.947715 14.5 1.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Button>
                    </div>
                    <h3 className="font-medium mb-1">{note.title}</h3>
                    {note.client && (
                      <div className="text-sm text-primary">客戶: {note.client}</div>
                    )}
                  </div>
                  <div className="p-4 pt-3">
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                      {note.content}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {note.tags.map(tag => (
                        <span 
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary/20 text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotesPage;
