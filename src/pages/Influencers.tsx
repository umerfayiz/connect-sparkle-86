import { creators } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter, Music2, BadgeCheck } from "lucide-react";

const iconFor = (p: string) => {
  if (p === "instagram") return Instagram;
  if (p === "youtube") return Youtube;
  if (p === "twitter") return Twitter;
  return Music2;
};

const Influencers = () => (
  <div className="space-y-4">
    <header>
      <h1 className="text-lg font-bold tracking-tight">Top Influencers</h1>
      <p className="text-muted-foreground text-xs">Verified creators ready to collab</p>
    </header>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {[...creators, ...creators].map((c, i) => (
        <Link
          to={`/profile/${c.id}`}
          key={i}
          className="group bg-card border border-border hover:border-primary/50 transition-colors overflow-hidden"
          style={{ borderRadius: '5px' }}
        >
          {/* Avatar */}
          <div className="aspect-square overflow-hidden bg-secondary">
            <img
              src={c.avatar}
              alt={c.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Info */}
          <div className="p-2">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-xs truncate">{c.name}</span>
              <BadgeCheck className="h-3 w-3 text-accent fill-accent/15 shrink-0" />
            </div>
            <div className="text-[9px] text-muted-foreground truncate">{c.username}</div>

            <div className="flex items-center justify-between mt-1.5">
              <Badge variant="secondary" className="text-[8px] px-1 py-0">{c.niche}</Badge>
              <span className="text-[9px] font-medium">{c.followers}</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-1 mt-2">
              {c.socials.slice(0, 3).map((s) => {
                const Icon = iconFor(s.platform);
                return (
                  <div key={s.platform} className="h-5 w-5 bg-muted flex items-center justify-center">
                    <Icon className="h-2.5 w-2.5 text-muted-foreground" />
                  </div>
                );
              })}
            </div>

            <Button
              size="sm"
              className="w-full mt-2 h-6 text-[10px] bg-primary text-primary-foreground"
              style={{ borderRadius: '5px' }}
            >
              Follow
            </Button>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Influencers;
