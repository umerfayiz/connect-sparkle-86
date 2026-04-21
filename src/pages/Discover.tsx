import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { creators, posts, digitalProducts } from "@/data/mock";
import { CreatorCard } from "@/components/social/CreatorCard";
import { Flame, Hash, Search, Sparkles, TrendingUp, Play, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const categories = [
  { label: "All", icon: Sparkles },
  { label: "Fashion", icon: Hash },
  { label: "Fitness", icon: Hash },
  { label: "Food & Travel", icon: Hash },
  { label: "Tech", icon: Hash },
  { label: "Music", icon: Hash },
  { label: "Gaming", icon: Hash },
  { label: "Beauty", icon: Hash },
];

const trending = [
  { tag: "#SpringDrop", posts: "12.4K" },
  { tag: "#MorningRoutine", posts: "8.9K" },
  { tag: "#BrandCollab", posts: "5.2K" },
  { tag: "#CreatorEconomy", posts: "4.1K" },
  { tag: "#TravelDiaries", posts: "3.8K" },
];

const Discover = () => {
  const [active, setActive] = useState("All");
  const featured = posts[1];
  const grid = [...posts, ...posts.slice(0, 2).reverse()];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-7 md:p-10">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold">
            <Flame className="h-3.5 w-3.5 text-accent" /> WHAT'S HOT TODAY
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
            Discover what's <span className="text-accent">trending</span>.
          </h1>
          <p className="mt-3 text-primary-foreground/70 max-w-lg">
            Explore creators, viral posts, top niches and rising hashtags — all curated for you.
          </p>
          <div className="mt-6 relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/60" />
            <Input
              placeholder="Search creators, tags, niches…"
              className="pl-10 h-12 bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/50 rounded-full focus-visible:ring-accent/40"
            />
          </div>
        </div>
      </section>

      {/* Categories pills */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-1 px-1 pb-1">
        {categories.map((c) => (
          <button
            key={c.label}
            onClick={() => setActive(c.label)}
            className={
              "shrink-0 rounded-full px-4 py-2 text-sm font-semibold border transition-colors " +
              (active === c.label
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground border-border hover:border-primary/40")
            }
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured + trending posts */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="relative overflow-hidden rounded-3xl border-border shadow-card group">
            <div className="aspect-[16/9]">
              <img src={featured.media} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
              <Badge className="bg-accent text-accent-foreground rounded-full">FEATURED · Trending #1</Badge>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-tight max-w-xl">{featured.content}</h2>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <div className="font-semibold">@sofialane</div>
                <span className="text-white/70">· {featured.likes.toLocaleString()} likes · {featured.shares} shares</span>
              </div>
            </div>
          </Card>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold tracking-tight">Trending posts</h3>
              <Link to="/" className="text-xs font-semibold text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                View all <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {grid.map((p, i) => (
                <Card key={i} className="rounded-2xl border-border overflow-hidden shadow-card group hover:-translate-y-1 transition-transform">
                  {p.media ? (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={p.media} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      {p.type === "video" && (
                        <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/60 flex items-center justify-center">
                          <Play className="h-3.5 w-3.5 text-white fill-current ml-0.5" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-accent-soft flex items-center justify-center p-6">
                      <p className="text-sm font-semibold text-accent-strong line-clamp-4 text-center">{p.content}</p>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="text-sm font-semibold line-clamp-2">{p.content}</div>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>❤️ {p.likes.toLocaleString()}</span>
                      <span className="rounded-full bg-secondary px-2 py-0.5 font-semibold">{p.time}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: trending tags + rising creators */}
        <div className="space-y-6">
          <Card className="rounded-3xl border-border shadow-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-xl bg-accent-soft flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-accent-strong" />
              </div>
              <h3 className="font-bold">Trending Hashtags</h3>
            </div>
            <div className="space-y-3">
              {trending.map((t, i) => (
                <div key={t.tag} className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs text-muted-foreground tabular-nums w-4">{i + 1}</span>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm truncate">{t.tag}</div>
                      <div className="text-xs text-muted-foreground">{t.posts} posts</div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="rounded-full text-xs">Follow</Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-3xl border-border shadow-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Rising Creators</h3>
              <Link to="/influencers" className="text-xs font-semibold text-muted-foreground hover:text-foreground">See all</Link>
            </div>
            <div className="space-y-3">
              {creators.map((c) => (
                <Link to={`/profile/${c.id}`} key={c.id} className="flex items-center gap-3 rounded-2xl p-2 -mx-2 hover:bg-secondary transition-colors">
                  <img src={c.avatar} alt={c.name} className="h-11 w-11 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm truncate">{c.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{c.niche} · {c.followers}</div>
                  </div>
                  <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:opacity-90 text-xs">Follow</Button>
                </Link>
              ))}
            </div>
          </Card>

          <Card className="rounded-3xl border-border shadow-card p-6 bg-accent-soft border-transparent">
            <Sparkles className="h-5 w-5 text-accent-strong" />
            <h3 className="mt-2 font-bold">Become a Creator</h3>
            <p className="text-sm text-muted-foreground mt-1">Monetize your content, sell digital products and connect with brands.</p>
            <Button asChild className="mt-4 w-full rounded-full bg-primary text-primary-foreground hover:opacity-90">
              <Link to="/become-creator">Get Started</Link>
            </Button>
          </Card>
        </div>
      </div>

      {/* Featured creators row */}
      <section>
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Featured Creators</h2>
            <p className="text-sm text-muted-foreground mt-1">Hand-picked for this week</p>
          </div>
          <Link to="/influencers" className="text-sm font-semibold text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            See all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {creators.map((c) => (
            <CreatorCard key={c.id} creator={c} />
          ))}
        </div>
      </section>

      {/* Hot products */}
      <section>
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Hot Digital Products</h2>
            <p className="text-sm text-muted-foreground mt-1">Best-sellers from creators you follow</p>
          </div>
          <Link to="/products" className="text-sm font-semibold text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            See all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {digitalProducts.map((p) => (
            <Card key={p.id} className="rounded-2xl overflow-hidden border-border shadow-card p-3 hover:-translate-y-1 transition-transform">
              <div className="aspect-square rounded-xl overflow-hidden bg-secondary">
                <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <div className="text-xs text-muted-foreground">{p.author}</div>
                <div className="font-semibold text-sm line-clamp-1">{p.title}</div>
                <div className="mt-1 font-bold tabular-nums">${p.price}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;