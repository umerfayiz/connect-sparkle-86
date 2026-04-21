import { Instagram, Youtube, Twitter, Music2, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { Creator } from "@/data/mock";

const iconFor = (p: string) => {
  if (p === "instagram") return Instagram;
  if (p === "youtube") return Youtube;
  if (p === "twitter") return Twitter;
  return Music2;
};

export function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Card className="group relative overflow-hidden bg-card border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 rounded-3xl p-5">
      <div className="flex items-start gap-4">
        <Link to={`/profile/${creator.id}`} className="block shrink-0">
          <div className="relative">
            <img
              src={creator.avatar}
              alt={creator.name}
              loading="lazy"
              className="h-16 w-16 rounded-2xl object-cover"
            />
            {creator.badge === "top" && (
              <div className="absolute -top-1.5 -right-1.5 bg-accent rounded-full p-1 shadow-card">
                <Crown className="h-3 w-3 text-accent-foreground" />
              </div>
            )}
          </div>
        </Link>
        <div className="min-w-0 flex-1">
          <Link to={`/profile/${creator.id}`}>
            <h3 className="font-bold text-base leading-tight truncate hover:text-accent transition-colors">
              {creator.name}
            </h3>
          </Link>
          <div className="mt-0.5 inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-foreground/70">
            {creator.niche}
          </div>
          <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{creator.bio}</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        {creator.socials.slice(0, 4).map((s) => {
          const Icon = iconFor(s.platform);
          return (
            <div
              key={s.platform}
              className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2"
            >
              <Icon className="h-3.5 w-3.5 text-foreground/60" />
              <span className="text-xs font-bold tabular-nums">{s.followers}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between gap-2">
        <div>
          <div className="text-[11px] text-muted-foreground">Followers</div>
          <div className="font-bold tabular-nums">{creator.followers}</div>
        </div>
        <Button asChild className="rounded-full bg-primary text-primary-foreground hover:opacity-90 px-5">
          <Link to={`/profile/${creator.id}`}>View Profile</Link>
        </Button>
      </div>
    </Card>
  );
}