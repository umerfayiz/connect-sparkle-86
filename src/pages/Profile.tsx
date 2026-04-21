import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BadgeCheck,
  Crown,
  MessageCircle,
  UserPlus,
  UserCheck,
  Star,
  Play,
  Instagram,
  Youtube,
  Twitter,
  Music2,
  Share2,
} from "lucide-react";
import { getCreator, portfolio, profileTabs, reviews } from "@/data/mock";
import cover from "@/assets/profile-cover.jpg";

const iconFor = (p: string) =>
  p === "instagram" ? Instagram : p === "youtube" ? Youtube : p === "twitter" ? Twitter : Music2;

const Profile = () => {
  const { id = "aria" } = useParams();
  const creator = getCreator(id);
  const navigate = useNavigate();
  const [following, setFollowing] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="overflow-hidden border-border bg-card shadow-card">
        <div className="relative h-44 md:h-56">
          <img src={cover} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        </div>
        <div className="px-6 pb-6 -mt-14 relative">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="relative">
              <Avatar className="h-28 w-28 ring-4 ring-card">
                <AvatarImage src={creator.avatar} alt={creator.name} />
                <AvatarFallback>{creator.name[0]}</AvatarFallback>
              </Avatar>
              {creator.badge === "top" && (
                <div className="absolute -bottom-1 -right-1 gradient-gold rounded-full px-2 py-0.5 flex items-center gap-1 text-[10px] font-bold text-background shadow-card">
                  <Crown className="h-3 w-3" /> TOP
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{creator.name}</h1>
                <BadgeCheck className="h-5 w-5 text-accent" />
              </div>
              <div className="text-sm text-muted-foreground">
                {creator.username} · <span className="text-accent">{creator.niche}</span>
              </div>
              <p className="mt-2 text-sm text-foreground/80 max-w-xl">{creator.bio}</p>
              <div className="mt-3 flex gap-5 text-sm">
                <div><span className="font-bold">{creator.followers}</span> <span className="text-muted-foreground">followers</span></div>
                <div><span className="font-bold">{creator.following}</span> <span className="text-muted-foreground">following</span></div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setFollowing((v) => !v)}
                variant={following ? "secondary" : "default"}
                className={following ? "" : "gradient-primary border-0 hover:opacity-90"}
              >
                {following ? <><UserCheck className="h-4 w-4 mr-2" /> Following</> : <><UserPlus className="h-4 w-4 mr-2" /> Follow</>}
              </Button>
              <Button variant="outline" onClick={() => navigate("/chat")}>
                <MessageCircle className="h-4 w-4 mr-2" /> Negotiate
              </Button>
              <Button variant="ghost" size="icon"><Share2 className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {creator.socials.map((s) => {
              const Icon = iconFor(s.platform);
              return (
                <div key={s.platform} className="flex items-center gap-3 rounded-xl bg-secondary px-3 py-2">
                  <div className="h-9 w-9 rounded-lg gradient-primary flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground capitalize">{s.platform}</div>
                    <div className="text-sm font-bold tabular-nums">{s.followers}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Rates */}
      <Card className="p-6 border-border bg-card shadow-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold">Rate Card</h2>
            <p className="text-sm text-muted-foreground">Starting prices per deliverable</p>
          </div>
          <Button onClick={() => navigate("/chat")} className="gradient-accent border-0 text-accent-foreground hover:opacity-90">
            <MessageCircle className="h-4 w-4 mr-2" /> Negotiate
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {creator.rates.map((r, i) => (
            <div key={i} className="rounded-xl border border-border p-4 bg-secondary/40 hover:border-primary/50 transition-colors">
              <div className="text-xs text-muted-foreground">{r.platform}</div>
              <div className="font-semibold mt-1">{r.type}</div>
              <div className="mt-3 text-2xl font-bold gradient-text">${r.price.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Portfolio */}
      <Card className="p-6 border-border bg-card shadow-card">
        <h2 className="text-xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolio.map((p, i) => (
            <div key={i} className="group rounded-xl overflow-hidden border border-border bg-secondary/40">
              <div className="relative aspect-video">
                <img src={p.thumb} alt={p.brand} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="p-3">
                <div className="font-semibold text-sm">{p.brand}</div>
                <div className="text-xs text-muted-foreground">{p.platform} · {p.views} views</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Reviews */}
      <Card className="p-6 border-border bg-card shadow-card">
        <h2 className="text-xl font-bold mb-1">Brand Reviews</h2>
        <p className="text-sm text-muted-foreground mb-5">What brands say after working with {creator.name.split(" ")[0]}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-xl border border-border p-5 bg-secondary/40">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center font-bold text-primary-foreground">
                  {r.logo}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.brand}</div>
                  <div className="flex">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-warning text-warning" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-foreground/80">{r.text}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Content tabs: Videos / Images / Blogs */}
      <Card className="p-6 border-border bg-card shadow-card">
        <Tabs defaultValue="videos">
          <TabsList className="bg-secondary">
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
          </TabsList>
          <TabsContent value="videos" className="mt-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {profileTabs.videos.map((v, i) => (
                <div key={i} className="relative aspect-video rounded-lg overflow-hidden bg-secondary group">
                  <img src={v} alt="" loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="images" className="mt-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {profileTabs.images.map((v, i) => (
                <img key={i} src={v} alt="" loading="lazy" className="aspect-square w-full rounded-lg object-cover" />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="blogs" className="mt-5 space-y-3">
            {profileTabs.blogs.map((b, i) => (
              <div key={i} className="rounded-xl border border-border p-4 bg-secondary/40 hover:border-primary/50 transition-colors">
                <div className="font-semibold">{b.title}</div>
                <p className="text-sm text-muted-foreground mt-1">{b.excerpt}</p>
                <Badge variant="secondary" className="mt-2">{b.time}</Badge>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </Card>

      <div className="text-center text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">← Back to feed</Link>
      </div>
    </div>
  );
};

export default Profile;