import { Heart, MessageCircle, Share2, MoreHorizontal, Play, BadgeCheck } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import type { Post } from "@/data/mock";
import { getCreator } from "@/data/mock";
import { cn } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  const author = getCreator(post.authorId);
  const [liked, setLiked] = useState(false);
  const likeCount = post.likes + (liked ? 1 : 0);

  return (
    <Card className="bg-card border-border shadow-card overflow-hidden animate-fade-up rounded-3xl">
      <div className="flex items-center gap-3 p-5">
        <Link to={`/profile/${author.id}`}>
          <Avatar className="h-11 w-11">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-1 min-w-0">
          <Link to={`/profile/${author.id}`} className="flex items-center gap-1 group">
            <span className="font-semibold truncate group-hover:text-accent transition-colors">
              {author.name}
            </span>
            <BadgeCheck className="h-4 w-4 text-accent shrink-0 fill-accent/15" />
          </Link>
          <div className="text-xs text-muted-foreground">
            {author.username} · {post.time}
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground rounded-full">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {post.type !== "text" && post.media && (
        <div className="relative bg-secondary mx-5 rounded-2xl overflow-hidden">
          <img
            src={post.media}
            alt=""
            loading="lazy"
            className={cn(
              "w-full object-cover",
              post.type === "video" ? "aspect-video" : "max-h-[520px]"
            )}
          />
          {post.type === "video" && (
            <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group">
              <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Play className="h-7 w-7 text-accent-foreground fill-current ml-1" />
              </div>
            </button>
          )}
        </div>
      )}

      {post.content && (
        <div className="px-5 pt-4 pb-2 text-[15px] leading-relaxed text-foreground/90">
          {post.content}
        </div>
      )}

      <div className="flex items-center gap-1 px-4 py-3 mt-2">
        <Button
          variant="ghost"
          onClick={() => setLiked((v) => !v)}
          className={cn(
            "gap-2 rounded-full hover:bg-secondary",
            liked && "text-destructive"
          )}
        >
          <Heart className={cn("h-5 w-5", liked && "fill-current animate-pop")} />
          <span className="tabular-nums text-sm">{likeCount.toLocaleString()}</span>
        </Button>
        <Button variant="ghost" className="gap-2 rounded-full hover:bg-secondary">
          <MessageCircle className="h-5 w-5" />
          <span className="tabular-nums text-sm">{post.comments}</span>
        </Button>
        <Button variant="ghost" className="gap-2 rounded-full hover:bg-secondary">
          <Share2 className="h-5 w-5" />
          <span className="tabular-nums text-sm">{post.shares}</span>
        </Button>
        <div className="ml-auto text-xs text-muted-foreground">
          {(post.likes + post.comments * 3).toLocaleString()} interactions
        </div>
      </div>
    </Card>
  );
}