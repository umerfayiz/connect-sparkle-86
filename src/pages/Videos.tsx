import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Music2, Play, Volume2, VolumeX } from "lucide-react";
import { creators } from "@/data/mock";

const Videos = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [likedReels, setLikedReels] = useState<number[]>([]);

  // Create reels from available creators
  const reels = creators.slice(0, 5).map((creator, i) => ({
    id: i + 1,
    creator,
    likes: `${Math.floor(Math.random() * 20) + 5}.${Math.floor(Math.random() * 9)}K`,
    comments: Math.floor(Math.random() * 500) + 50,
    caption: [
      "Check out this amazing view! 🌅 #travel #sunset",
      "Morning workout routine 💪 #fitness #gym",
      "New recipe alert! 🍕 #cooking #foodie",
      "Tech review coming soon! 📱 #tech #review",
      "Behind the scenes 🎬 #bts #creator"
    ][i] || "Amazing content! #trending",
    music: `Original Sound - ${creator.name}`
  }));

  const toggleLike = (id: number) => {
    setLikedReels(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm h-[calc(100vh-8rem)] overflow-y-auto snap-y snap-mandatory" style={{ scrollbarWidth: 'none' }}>
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="h-[calc(100vh-8rem)] snap-start snap-always relative bg-black flex items-center justify-center"
            style={{ borderRadius: index === 0 ? '5px 5px 0 0' : index === reels.length - 1 ? '0 0 5px 5px' : '0' }}
          >
            {/* Video Background (placeholder with gradient) */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${135 + index * 30}deg, hsl(${index * 60}, 70%, 25%), hsl(${index * 60 + 30}, 60%, 15%))`
              }}
            />

            {/* Center Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="opacity-0 hover:opacity-100 transition-opacity"
              >
                {!isPlaying && (
                  <div className="h-16 w-16 bg-white/20 backdrop-blur-sm flex items-center justify-center" style={{ borderRadius: '50%' }}>
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                )}
              </button>
            </div>

            {/* Video Info - Bottom */}
            <div className="absolute bottom-4 left-4 right-16 z-20">
              {/* Creator Info */}
              <div className="flex items-center gap-2 mb-3">
                <Avatar className="h-10 w-10 border-2 border-white">
                  <AvatarImage src={reel.creator.avatar} />
                  <AvatarFallback>{reel.creator.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white font-semibold text-sm">{reel.creator.name}</div>
                </div>
                <Button size="sm" variant="outline" className="h-6 px-2 text-[10px] border-white text-white bg-transparent hover:bg-white/20 ml-2" style={{ borderRadius: '5px' }}>
                  Follow
                </Button>
              </div>

              {/* Caption */}
              <p className="text-white text-xs mb-2 line-clamp-2">{reel.caption}</p>

              {/* Music */}
              <div className="flex items-center gap-2">
                <Music2 className="h-3 w-3 text-white" />
                <span className="text-white text-[10px]">{reel.music}</span>
              </div>
            </div>

            {/* Actions - Right Side */}
            <div className="absolute right-3 bottom-20 flex flex-col items-center gap-5 z-20">
              <button
                onClick={(e) => { e.stopPropagation(); toggleLike(reel.id); }}
                className="flex flex-col items-center gap-1"
              >
                <div className={`h-10 w-10 flex items-center justify-center ${likedReels.includes(reel.id) ? 'text-red-500' : 'text-white'}`}>
                  <Heart className={`h-7 w-7 ${likedReels.includes(reel.id) ? 'fill-current' : ''}`} />
                </div>
                <span className="text-white text-[10px]">{reel.likes}</span>
              </button>

              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 flex items-center justify-center text-white">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <span className="text-white text-[10px]">{reel.comments}</span>
              </button>

              <button className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 flex items-center justify-center text-white">
                  <Share2 className="h-7 w-7" />
                </div>
                <span className="text-white text-[10px]">Share</span>
              </button>

              {/* Mute/Unmute */}
              <button
                onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                className="h-8 w-8 bg-black/50 flex items-center justify-center text-white"
                style={{ borderRadius: '50%' }}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>

              {/* Creator Avatar */}
              <div className="h-10 w-10 border-2 border-white overflow-hidden" style={{ borderRadius: '50%' }}>
                <Avatar className="h-full w-full">
                  <AvatarImage src={reel.creator.avatar} />
                  <AvatarFallback>{reel.creator.name[0]}</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="absolute top-3 left-3 right-3 h-0.5 bg-white/30 z-20" style={{ borderRadius: '2px' }}>
              <div className="h-full bg-white w-1/3" style={{ borderRadius: '2px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
