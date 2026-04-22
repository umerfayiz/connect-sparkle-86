import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { conversations, getCreator, sampleMessages } from "@/data/mock";
import { Send, MoreHorizontal, Phone, Video, Paperclip, Smile, Image } from "lucide-react";
import { cn } from "@/lib/utils";

const Chat = () => {
  const [activeId, setActiveId] = useState(conversations[0].id);
  const active = getCreator(activeId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0 h-[calc(100vh-8rem)] bg-card border border-border overflow-hidden" style={{ borderRadius: '5px' }}>
      {/* Conversations List */}
      <div className="border-r border-border flex flex-col bg-muted/30">
        <div className="p-3 border-b border-border">
          <h2 className="font-semibold text-sm mb-2">Messages</h2>
          <Input
            placeholder="Search conversations..."
            className="h-7 text-[10px] bg-background border-border focus-visible:ring-0"
            style={{ borderRadius: '5px' }}
          />
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
                  "w-full text-left flex items-center gap-2.5 px-3 py-2.5 hover:bg-muted/50 transition-colors",
                  isActive && "bg-muted"
                )}
              >
                <div className="relative">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={cr.avatar} />
                    <AvatarFallback>{cr.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 border-2 border-background rounded-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-xs truncate">{cr.name}</span>
                    <span className="text-[9px] text-muted-foreground">{c.time}</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground truncate">{c.lastMessage}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col bg-background">
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-border flex items-center gap-3 bg-card">
          <div className="relative">
            <Avatar className="h-8 w-8">
              <AvatarImage src={active.avatar} />
              <AvatarFallback>{active.name[0]}</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 h-2 w-2 bg-green-500 border border-background rounded-full" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-xs">{active.name}</div>
            <div className="text-[9px] text-green-500">Active now</div>
          </div>
          <div className="flex items-center gap-1">
            <button className="h-7 w-7 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground" style={{ borderRadius: '5px' }}>
              <Phone className="h-3.5 w-3.5" />
            </button>
            <button className="h-7 w-7 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground" style={{ borderRadius: '5px' }}>
              <Video className="h-3.5 w-3.5" />
            </button>
            <button className="h-7 w-7 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground" style={{ borderRadius: '5px' }}>
              <MoreHorizontal className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
          <div className="text-center text-[9px] text-muted-foreground py-2">Today</div>
          {sampleMessages.map((m, i) => (
            <div key={i} className={cn("flex gap-2", m.from === "me" ? "justify-end" : "justify-start")}>
              {m.from !== "me" && (
                <Avatar className="h-6 w-6 mt-1">
                  <AvatarImage src={active.avatar} />
                  <AvatarFallback>{active.name[0]}</AvatarFallback>
                </Avatar>
              )}
              <div className={cn("max-w-[65%]")}>
                <div
                  className={cn(
                    "px-3 py-2 text-xs",
                    m.from === "me"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground"
                  )}
                  style={{ borderRadius: '12px' }}
                >
                  {m.text}
                </div>
                <div className={cn("text-[8px] text-muted-foreground mt-0.5", m.from === "me" && "text-right")}>
                  {m.from === "me" ? "Sent" : "Received"} · 2m ago
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-border bg-card">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <button className="h-7 w-7 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground" style={{ borderRadius: '5px' }}>
                <Paperclip className="h-3.5 w-3.5" />
              </button>
              <button className="h-7 w-7 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground" style={{ borderRadius: '5px' }}>
                <Image className="h-3.5 w-3.5" />
              </button>
            </div>
            <Input
              placeholder="Type a message..."
              className="flex-1 h-8 text-xs bg-muted border-0 focus-visible:ring-0"
              style={{ borderRadius: '20px' }}
            />
            <button className="h-7 w-7 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground" style={{ borderRadius: '5px' }}>
              <Smile className="h-3.5 w-3.5" />
            </button>
            <button className="h-8 w-8 bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90" style={{ borderRadius: '50%' }}>
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
