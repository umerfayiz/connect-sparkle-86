import { PostCard } from "@/components/social/PostCard";
import { CreatorCard } from "@/components/social/CreatorCard";
import { creators, posts } from "@/data/mock";
import { Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-6">
      <header className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Feed</h1>
          <p className="text-muted-foreground text-sm mt-1">Latest from creators you follow</p>
        </div>
      </header>

      <div className="space-y-5">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>

      <section className="mt-10 rounded-3xl border border-border bg-[var(--gradient-surface)] p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5" /> FEATURED
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Hire Top Influencers <span className="gradient-text">for Your Brand</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-xl">
              Hand-picked creators with proven results. Browse profiles, see rates and start a conversation.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {creators.map((c) => (
            <CreatorCard key={c.id} creator={c} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;