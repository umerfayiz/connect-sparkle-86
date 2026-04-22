import { Heart, MessageCircle, MoreHorizontal, BadgeCheck, Send, Paperclip, Smile, Camera, Forward } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import type { Post } from "@/data/mock";
import { getCreator } from "@/data/mock";
import { cn } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  const author = getCreator(post.authorId);
  const [liked, setLiked] = useState(false);
  const likeCount = post.likes + (liked ? 1 : 0);

  return (
    <div className="bg-card overflow-hidden animate-fade-up" style={{ borderRadius: '5px' }}>
      <div className="flex items-center gap-2 p-3">
        <Link to={`/profile/${author.id}`}>
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-1 min-w-0">
          <Link to={`/profile/${author.id}`} className="flex items-center gap-1 group">
            <span className="font-semibold text-sm truncate group-hover:text-accent transition-colors">
              {author.name}
            </span>
            <BadgeCheck className="h-3.5 w-3.5 text-accent shrink-0 fill-accent/15" />
          </Link>
          <div className="text-[10px] text-muted-foreground">
            {post.time}
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground h-7 w-7">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {post.type !== "text" && post.media && (
        <div className="relative bg-secondary mx-3 overflow-hidden" style={{ borderRadius: '5px' }}>
          <img
            src={post.media}
            alt=""
            loading="lazy"
            className={cn(
              "w-full object-cover",
              post.type === "video" ? "aspect-video" : "max-h-[400px]"
            )}
          />
        </div>
      )}

      {post.content && (
        <div className="px-3 pt-3 pb-1 text-xs leading-relaxed text-foreground/90">
          {post.content}
        </div>
      )}

      <div className="flex items-center gap-1 px-3 py-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLiked((v) => !v)}
          className={cn(
            "gap-1.5 h-7 px-2 hover:bg-secondary",
            liked && "text-destructive"
          )}
        >
          <Heart className={cn("h-4 w-4", liked && "fill-current animate-pop")} />
          <span className="tabular-nums text-xs">{likeCount.toLocaleString()}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-1.5 h-7 px-2 hover:bg-secondary">
          <MessageCircle className="h-4 w-4" />
          <span className="tabular-nums text-xs">{post.comments}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-1.5 h-7 px-2 hover:bg-secondary">
          <Forward className="h-4 w-4" />
          <span className="text-xs">Send</span>
        </Button>
      </div>

      {/* First Comment */}
      <div className="px-3 pb-2">
        <div className="flex items-start gap-2">
          <span className="text-xs font-semibold">user_fan</span>
          <span className="text-xs text-muted-foreground">Amazing content!</span>
        </div>
        <button className="text-[10px] text-muted-foreground mt-1">View all {post.comments} comments</button>
      </div>

      {/* Comment Input */}
      <div className="flex items-center gap-1.5 px-3 pb-3 border-t border-border pt-2">
        <Input
          placeholder="Add a comment..."
          className="flex-1 h-7 border border-border bg-transparent px-2 focus-visible:ring-0"
          style={{ borderRadius: '5px', fontSize: '10px' }}
        />
        <button className="p-1 text-muted-foreground hover:text-foreground">
          <Paperclip className="h-3.5 w-3.5" />
        </button>
        <button className="p-1 text-muted-foreground hover:text-foreground">
          <Camera className="h-3.5 w-3.5" />
        </button>
        <button className="p-1 text-muted-foreground hover:text-foreground">
          <Smile className="h-3.5 w-3.5" />
        </button>
        <button className="h-6 w-6 bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90" style={{ borderRadius: '5px' }}>
          <Send className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}