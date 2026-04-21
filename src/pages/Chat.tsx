import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { conversations, getCreator, sampleMessages } from "@/data/mock";
import { Send, Search, Paperclip, Smile } from "lucide-react";
import { cn } from "@/lib/utils";

const Chat = () => {
  const [activeId, setActiveId] = useState(conversations[0].id);
  const active = getCreator(activeId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 h-[calc(100vh-8rem)]">
      <Card className="bg-card border-border overflow-hidden flex flex-col">
        <div className="p-3 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search messages" className="pl-9 bg-secondary border-transparent" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((c) => {
            const cr = getCreator(c.id);
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={cn(
                  "w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors",
                  isActive && "bg-secondary"
                )}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={cr.avatar} />
                  <AvatarFallback>{cr.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <div className="font-semibold text-sm truncate">{cr.name}</div>
                    <div className="text-[10px] text-muted-foreground">{c.time}</div>
                  </div>
                  <div className="text-xs text-muted-foreground truncate">{c.lastMessage}</div>
                </div>
              </button>
            );
          })}
        </div>
      </Card>

      <Card className="bg-card border-border overflow-hidden flex flex-col">
        <div className="px-5 py-3 border-b border-border flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={active.avatar} />
            <AvatarFallback>{active.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-semibold">{active.name}</div>
            <div className="text-xs text-success">● Online</div>
          </div>
          <Button variant="outline" size="sm">View profile</Button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {sampleMessages.map((m, i) => (
            <div key={i} className={cn("flex", m.from === "me" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[70%] px-4 py-2.5 rounded-2xl text-sm",
                  m.from === "me"
                    ? "gradient-primary text-primary-foreground rounded-br-sm"
                    : "bg-secondary text-foreground rounded-bl-sm"
                )}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-border flex items-center gap-2">
          <Button variant="ghost" size="icon"><Paperclip className="h-4 w-4" /></Button>
          <Input placeholder="Type a message…" className="bg-secondary border-transparent" />
          <Button variant="ghost" size="icon"><Smile className="h-4 w-4" /></Button>
          <Button className="gradient-primary border-0 hover:opacity-90">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Chat;