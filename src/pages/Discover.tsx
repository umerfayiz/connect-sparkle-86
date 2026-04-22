import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { creators, posts, digitalProducts } from "@/data/mock";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Fashion", "Fitness", "Food & Travel", "Tech", "Music", "Gaming", "Beauty"];

const Discover = () => {
  const [active, setActive] = useState("All");
  const featured = posts[1];
  const grid = [...posts, ...posts.slice(0, 2).reverse()];

  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-lg font-bold tracking-tight">Discover</h1>
        <p className="text-muted-foreground text-xs">Explore creators and trending posts</p>
      </header>

      {/* Categories pills */}
      <div className="flex gap-1 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={
              "shrink-0 px-3 py-1 text-xs font-medium border transition-colors " +
              (active === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground border-border hover:bg-muted")
            }
            style={{ borderRadius: '5px' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Featured + trending posts */}
        <div className="lg:col-span-2 space-y-3">
          <div className="relative overflow-hidden border border-border bg-card" style={{ borderRadius: '5px' }}>
            <div className="aspect-[16/9]">
              <img src={featured.media} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3 text-white">
              <Badge className="bg-accent text-accent-foreground text-[9px]" style={{ borderRadius: '5px' }}>FEATURED</Badge>
              <h2 className="mt-1.5 text-base font-bold leading-tight max-w-xl">{featured.content}</h2>
              <div className="mt-1 flex items-center gap-2 text-[10px]">
                <span className="font-semibold">@sofialane</span>
                <span className="text-white/70">· {featured.likes.toLocaleString()} likes</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold">Trending posts</h3>
              <Link to="/" className="text-[10px] font-semibold text-muted-foreground hover:text-foreground inline-flex items-center gap-0.5">
                View all <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {grid.slice(0, 4).map((p, i) => (
                <div key={i} className="border border-border bg-card overflow-hidden hover:bg-muted/50 transition-colors" style={{ borderRadius: '5px' }}>
                  {p.media ? (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={p.media} alt="" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-accent-soft flex items-center justify-center p-3">
                      <p className="text-xs font-semibold text-accent-strong line-clamp-3 text-center">{p.content}</p>
                    </div>
                  )}
                  <div className="p-2">
                    <div className="text-xs font-medium line-clamp-1">{p.content}</div>
                    <div className="mt-1 flex items-center justify-between text-[10px] text-muted-foreground">
                      <span>❤️ {p.likes.toLocaleString()}</span>
                      <span>{p.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Rising Creators */}
        <div className="space-y-3">
          <div className="border border-border bg-card p-3" style={{ borderRadius: '5px' }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-xs">Rising Creators</h3>
              <Link to="/influencers" className="text-[9px] font-semibold text-muted-foreground hover:text-foreground">See all</Link>
            </div>
            <div className="space-y-1.5">
              {creators.map((c) => (
                <Link to={`/profile/${c.id}`} key={c.id} className="flex items-center gap-2 p-1 -mx-1 hover:bg-muted transition-colors">
                  <img src={c.avatar} alt={c.name} className="h-7 w-7 object-cover" style={{ borderRadius: '5px' }} />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-xs truncate">{c.name}</div>
                    <div className="text-[9px] text-muted-foreground truncate">{c.followers}</div>
                  </div>
                  <Button size="sm" className="h-5 px-2 bg-primary text-primary-foreground text-[9px]" style={{ borderRadius: '5px' }}>Follow</Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hot products */}
      <section>
        <div className="flex items-end justify-between mb-2">
          <h2 className="text-sm font-bold">Hot Digital Products</h2>
          <Link to="/products" className="text-[10px] font-semibold text-muted-foreground hover:text-foreground inline-flex items-center gap-0.5">
            See all <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {digitalProducts.map((p) => (
            <div key={p.id} className="overflow-hidden border border-border bg-card p-2 hover:bg-muted/50 transition-colors" style={{ borderRadius: '5px' }}>
              <div className="aspect-square overflow-hidden bg-secondary" style={{ borderRadius: '5px' }}>
                <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="pt-2">
                <div className="text-[9px] text-muted-foreground">{p.author}</div>
                <div className="font-medium text-xs line-clamp-1">{p.title}</div>
                <div className="mt-1 font-bold text-xs tabular-nums">${p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;
