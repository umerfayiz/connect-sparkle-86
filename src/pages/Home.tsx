import { PostCard } from "@/components/social/PostCard";
import { creators, posts } from "@/data/mock";
import { Sparkles, Mail, X, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolledToBottom = scrollTop + windowHeight >= documentHeight - 200;

      if (scrolledToBottom && !hasShownPopup) {
        setShowLoginPopup(true);
        setHasShownPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShownPopup]);

  return (
    <div className="space-y-3">
      {/* Stories Section - Full Width */}
      <div className="bg-card border border-border p-3 overflow-hidden" style={{ borderRadius: '5px' }}>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
          {/* Add Story */}
          <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
            <div className="relative w-16 h-16">
              <div
                className="w-full h-full bg-muted flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors"
                style={{
                  borderRadius: '35% 35% 35% 35% / 35% 35% 35% 35%',
                  border: '3px dashed hsl(var(--border))'
                }}
              >
                <span className="text-2xl text-muted-foreground">+</span>
              </div>
            </div>
            <span className="text-[9px] text-muted-foreground">Add Story</span>
          </div>

          {/* Stories */}
          {creators.map((c, i) => (
            <div key={c.id} className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer group">
              <div className="relative w-16 h-16">
                <div
                  className="w-full h-full p-[3px] transition-transform group-hover:scale-105"
                  style={{
                    borderRadius: '35% 35% 35% 35% / 35% 35% 35% 35%',
                    background: i < 3
                      ? 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'
                      : 'hsl(var(--border))'
                  }}
                >
                  <div
                    className="w-full h-full bg-background p-[2px]"
                    style={{ borderRadius: '33% 33% 33% 33% / 33% 33% 33% 33%' }}
                  >
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '30% 30% 30% 30% / 30% 30% 30% 30%' }}
                    />
                  </div>
                </div>
              </div>
              <span className="text-[9px] truncate w-14 text-center">{c.name.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Row */}
      <div className="flex flex-col lg:flex-row" style={{ gap: '3%' }}>
        {/* Main Feed */}
        <div className="flex-1 min-w-0">
          <div className="w-full">
            <div className="bg-card border border-border overflow-hidden divide-y divide-border" style={{ borderRadius: '5px' }}>
              {posts.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}

              {/* Hire Influencers Section */}
              <div className="p-3 bg-muted/30">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1 bg-accent/10 px-1.5 py-0.5 text-[9px] font-semibold mb-1" style={{ borderRadius: '5px' }}>
                      <Sparkles className="h-2.5 w-2.5 text-accent" /> FEATURED
                    </div>
                    <h3 className="text-xs font-bold tracking-tight leading-tight">
                      Hire Top Influencers <span className="text-accent">for your brand.</span>
                    </h3>
                    <p className="text-muted-foreground text-[9px] mt-0.5">Hand-picked creators.</p>
                  </div>
                  <Link to="/influencers" className="shrink-0 bg-primary text-primary-foreground px-2 py-1 text-[9px] font-semibold hover:opacity-90" style={{ borderRadius: '5px' }}>
                    View all
                  </Link>
                </div>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                  {creators.slice(0, 3).map((c) => (
                    <div key={c.id} className="flex items-center gap-2 bg-card border border-border p-1.5" style={{ borderRadius: '5px' }}>
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={c.avatar} />
                        <AvatarFallback>{c.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-medium truncate">{c.name}</div>
                        <div className="text-[9px] text-muted-foreground">{c.followers}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Suggested for you */}
        <div className="w-full lg:w-60 flex-shrink-0">
          <div className="lg:sticky lg:top-16">
            <div className="bg-card border border-border p-2" style={{ borderRadius: '5px' }}>
              <h3 className="text-[10px] font-semibold mb-2">Suggested for you</h3>
              <div className="space-y-1.5">
                {creators.slice(0, 5).map((c) => (
                  <div
                    key={c.id}
                    className="relative"
                    onMouseEnter={() => setHoveredProfile(c.id)}
                    onMouseLeave={() => setHoveredProfile(null)}
                  >
                    <div className="flex items-center gap-1.5">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={c.avatar} />
                        <AvatarFallback>{c.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="text-[9px] font-medium truncate">{c.name}</div>
                        <div className="text-[8px] text-muted-foreground truncate">{c.username}</div>
                      </div>
                      <Button size="sm" className="h-5 px-1.5 text-[8px] bg-primary text-primary-foreground" style={{ borderRadius: '5px' }}>
                        Follow
                      </Button>
                    </div>
                    {/* Hover Profile Card */}
                    {hoveredProfile === c.id && (
                      <div className="absolute left-0 top-full mt-1 z-50 w-36 bg-card border border-border p-2 shadow-lg" style={{ borderRadius: '5px' }}>
                        <div className="flex items-center gap-1.5 mb-1">
                          <Avatar className="h-7 w-7">
                            <AvatarImage src={c.avatar} />
                            <AvatarFallback>{c.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-[9px] font-semibold">{c.name}</div>
                            <div className="text-[8px] text-muted-foreground">{c.username}</div>
                          </div>
                        </div>
                        <p className="text-[8px] text-muted-foreground line-clamp-2 mb-1">{c.bio}</p>
                        <div className="text-[8px]">
                          <span><b>{c.followers}</b> followers</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div className="mt-2 bg-card border border-border p-2" style={{ borderRadius: '5px' }}>
              <Link to="/contact" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-[9px]">
                <Mail className="h-3 w-3" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-xs mx-4 bg-card border border-border p-5" style={{ borderRadius: '5px' }}>
            <button
              onClick={() => setShowLoginPopup(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 mb-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">Pulse</span>
              </div>
              <h3 className="text-sm font-semibold mb-1">Join Pulse Today</h3>
              <p className="text-[10px] text-muted-foreground mb-4">
                Sign up to follow creators, like posts, and connect with your community.
              </p>
              <div className="space-y-2">
                <Button
                  onClick={() => {
                    setShowLoginPopup(false);
                    navigate("/signup");
                  }}
                  className="w-full h-8 text-xs"
                  style={{ borderRadius: '5px' }}
                >
                  Sign Up
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowLoginPopup(false);
                    navigate("/login");
                  }}
                  className="w-full h-8 text-xs gap-1.5"
                  style={{ borderRadius: '5px' }}
                >
                  <LogIn className="h-3 w-3" /> Login
                </Button>
              </div>
              <p className="text-[9px] text-muted-foreground mt-3">
                By signing up, you agree to our Terms and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
