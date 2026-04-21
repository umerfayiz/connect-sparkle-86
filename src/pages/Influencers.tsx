import { CreatorCard } from "@/components/social/CreatorCard";
import { creators } from "@/data/mock";

const Influencers = () => (
  <div className="space-y-6">
    <header>
      <h1 className="text-3xl font-bold">Top Influencers</h1>
      <p className="text-muted-foreground text-sm mt-1">Verified creators ready to collab with your brand.</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {[...creators, ...creators].map((c, i) => (
        <CreatorCard key={i} creator={c} />
      ))}
    </div>
  </div>
);

export default Influencers;