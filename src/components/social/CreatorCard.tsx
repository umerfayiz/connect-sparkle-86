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
    <Card className="group relative overflow-hidden bg-card border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
      <div className="h-20 gradient-primary opacity-80" />
      <div className="px-5 pb-5 -mt-10">
        <div className="flex items-end justify-between">
          <Link to={`/profile/${creator.id}`} className="block">
            <div className="relative">
              <img
                src={creator.avatar}
                alt={creator.name}
                loading="lazy"
                className="h-20 w-20 rounded-2xl object-cover ring-4 ring-card"
              />
              {creator.badge === "top" && (
                <div className="absolute -top-2 -right-2 gradient-gold rounded-full px-2 py-0.5 flex items-center gap-1 text-[10px] font-bold text-background shadow-card">
                  <Crown className="h-3 w-3" /> TOP
                </div>
              )}
            </div>
          </Link>
        </div>
        <Link to={`/profile/${creator.id}`}>
          <h3 className="mt-3 font-bold text-lg leading-tight hover:text-primary transition-colors">
            {creator.name}
          </h3>
        </Link>
        <p className="text-sm text-accent font-medium">{creator.niche}</p>
        <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{creator.bio}</p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {creator.socials.slice(0, 4).map((s) => {
            const Icon = iconFor(s.platform);
            return (
              <div
                key={s.platform}
                className="flex items-center gap-2 rounded-lg bg-secondary px-2.5 py-1.5"
              >
                <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-semibold tabular-nums">{s.followers}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex gap-2">
          <Button asChild className="flex-1 gradient-primary border-0 hover:opacity-90">
            <Link to={`/profile/${creator.id}`}>View Profile</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}