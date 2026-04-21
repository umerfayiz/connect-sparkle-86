import { PostCard } from "@/components/social/PostCard";
import { CreatorCard } from "@/components/social/CreatorCard";
import { creators, posts } from "@/data/mock";
import { ArrowUpRight, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Reach this week", value: "128.4K", trend: "+12.3%", icon: TrendingUp },
  { label: "New followers", value: "2,140", trend: "+8.1%", icon: Users },
  { label: "Engagement", value: "9.2%", trend: "+1.4%", icon: Zap },
];

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl gradient-hero border border-border p-7 md:p-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Welcome back, Alex
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              Your creator <span className="gradient-text">network</span>, in one feed.
            </h1>
            <p className="mt-3 text-muted-foreground">
              Follow trending creators, hire influencers and grow your brand — all in one place.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/discover" className="rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-1.5">
              Discover <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/influencers" className="rounded-full bg-card border border-border px-5 py-3 text-sm font-semibold hover:shadow-card transition-shadow">
              Hire Talent
            </Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-card border border-border p-4 flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-accent-soft flex items-center justify-center">
                <s.icon className="h-5 w-5 text-accent-strong" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground">{s.label}</div>
                <div className="font-bold tabular-nums text-lg leading-tight">{s.value}</div>
              </div>
              <div className="text-xs font-semibold rounded-full bg-accent-soft text-accent-strong px-2 py-1">{s.trend}</div>
            </div>
          ))}
        </div>
      </section>

      <header className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Your Feed</h2>
          <p className="text-muted-foreground text-sm mt-1">Latest from creators you follow</p>
        </div>
        <div className="flex gap-1 rounded-full bg-card border border-border p-1">
          <button className="rounded-full px-4 py-1.5 text-xs font-semibold bg-primary text-primary-foreground">For You</button>
          <button className="rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground">Following</button>
          <button className="rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground">Trending</button>
        </div>
      </header>

      <div className="space-y-5">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>

      <section className="mt-10 rounded-3xl bg-primary text-primary-foreground p-7 md:p-9 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative flex items-start justify-between gap-4 mb-7">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground px-3 py-1 text-xs font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5" /> FEATURED
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Hire Top Influencers <br className="hidden md:block" />
              <span className="text-accent">for your brand.</span>
            </h2>
            <p className="text-primary-foreground/70 text-sm mt-2 max-w-xl">
              Hand-picked creators with proven results. Browse profiles, see rates and start a conversation.
            </p>
          </div>
          <Link to="/influencers" className="hidden md:inline-flex shrink-0 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-bold hover:opacity-90">
            See all →
          </Link>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
          {creators.map((c) => (
            <CreatorCard key={c.id} creator={c} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;