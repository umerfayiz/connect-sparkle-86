import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BadgeCheck,
  Crown,
  MessageCircle,
  UserPlus,
  UserCheck,
  Star,
  Share2,
  Play,
  Briefcase,
  FileText,
  ShoppingBag,
  Heart,
  Eye,
  Plus,
  Image,
  DollarSign,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getCreator, profileTabs, reviews, digitalProducts } from "@/data/mock";
import cover from "@/assets/profile-cover.jpg";

const Profile = () => {
  const { id = "aria" } = useParams();
  const creator = getCreator(id);
  const navigate = useNavigate();
  const [following, setFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("video");
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const services = [
    { title: "Brand Collaboration", price: "$500+", description: "Full campaign collaboration with your brand", icon: "🤝" },
    { title: "Product Review", price: "$200", description: "Honest review of your product on my channels", icon: "📝" },
    { title: "Sponsored Post", price: "$300", description: "Dedicated post featuring your brand", icon: "📸" },
    { title: "Story Promotion", price: "$100", description: "24-hour story promotion", icon: "⏰" },
  ];

  const tabs = [
    { id: "video", label: "Video", icon: Play, count: profileTabs.videos.length },
    { id: "service", label: "Service", icon: Briefcase, count: services.length },
    { id: "article", label: "Article", icon: FileText, count: profileTabs.blogs.length },
    { id: "products", label: "Products", icon: ShoppingBag, count: digitalProducts.length },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="overflow-hidden border border-border bg-card" style={{ borderRadius: '5px' }}>
        <div className="relative h-32 md:h-40">
          <img src={cover} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        </div>
        <div className="px-4 pb-4 -mt-10 relative">
          <div className="flex flex-col md:flex-row md:items-end gap-3">
            <div className="relative">
              <Avatar className="h-20 w-20 ring-2 ring-card">
                <AvatarImage src={creator.avatar} alt={creator.name} />
                <AvatarFallback>{creator.name[0]}</AvatarFallback>
              </Avatar>
              {creator.badge === "top" && (
                <div className="absolute -bottom-1 -right-1 bg-yellow-500 px-1.5 py-0.5 flex items-center gap-0.5 text-[8px] font-bold text-black" style={{ borderRadius: '5px' }}>
                  <Crown className="h-2.5 w-2.5" /> TOP
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h1 className="text-lg font-bold">{creator.name}</h1>
                <BadgeCheck className="h-4 w-4 text-accent" />
              </div>
              <div className="text-xs text-muted-foreground">
                {creator.username} · <span className="text-accent">{creator.niche}</span>
              </div>
              <p className="mt-1.5 text-xs text-foreground/80 max-w-xl">{creator.bio}</p>
              <div className="mt-2 flex gap-4 text-xs">
                <div><span className="font-bold">{creator.followers}</span> <span className="text-muted-foreground">followers</span></div>
                <div><span className="font-bold">{creator.following}</span> <span className="text-muted-foreground">following</span></div>
              </div>
            </div>
            <div className="flex gap-1.5">
              <Button
                onClick={() => setFollowing((v) => !v)}
                size="sm"
                variant={following ? "secondary" : "default"}
                className="h-7 text-xs"
                style={{ borderRadius: '5px' }}
              >
                {following ? <><UserCheck className="h-3 w-3 mr-1" /> Following</> : <><UserPlus className="h-3 w-3 mr-1" /> Follow</>}
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate("/chat")} className="h-7 text-xs" style={{ borderRadius: '5px' }}>
                <MessageCircle className="h-3 w-3 mr-1" /> Message
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7"><Share2 className="h-3.5 w-3.5" /></Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs - Improved UI */}
      <div className="border border-border bg-card overflow-hidden" style={{ borderRadius: '5px' }}>
        {/* Tab Headers */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <tab.icon className="h-3.5 w-3.5" />
              <span>{tab.label}</span>
              <span className="text-[9px] bg-muted px-1.5 py-0.5" style={{ borderRadius: '10px' }}>{tab.count}</span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {/* Video Tab */}
          {activeTab === "video" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {profileTabs.videos.map((v, i) => (
                <div key={i} className="relative aspect-[9/16] overflow-hidden bg-muted group cursor-pointer" style={{ borderRadius: '5px' }}>
                  <img src={v} alt="" loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-12 w-12 bg-white/20 backdrop-blur-sm flex items-center justify-center" style={{ borderRadius: '50%' }}>
                      <Play className="h-6 w-6 text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2 text-[9px]">
                      <span className="flex items-center gap-0.5"><Heart className="h-3 w-3" /> 1.2K</span>
                      <span className="flex items-center gap-0.5"><Eye className="h-3 w-3" /> 5.4K</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Service Tab */}
          {activeTab === "service" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((s, i) => (
                <div key={i} className="border border-border p-4 hover:border-primary/50 hover:shadow-sm transition-all group" style={{ borderRadius: '5px' }}>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-primary/10 flex items-center justify-center text-lg" style={{ borderRadius: '5px' }}>
                      {s.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="font-medium text-sm">{s.title}</div>
                        <div className="text-sm font-bold text-primary">{s.price}</div>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1">{s.description}</p>
                      <Button size="sm" className="mt-3 h-7 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderRadius: '5px' }}>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Article Tab */}
          {activeTab === "article" && (
            <div className="space-y-3">
              {profileTabs.blogs.map((b, i) => (
                <div key={i} className="flex gap-3 p-3 border border-border hover:border-primary/50 transition-colors cursor-pointer group" style={{ borderRadius: '5px' }}>
                  <div className="w-20 h-20 bg-muted flex-shrink-0 overflow-hidden" style={{ borderRadius: '5px' }}>
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm group-hover:text-primary transition-colors">{b.title}</div>
                    <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2">{b.excerpt}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-[8px]" style={{ borderRadius: '5px' }}>{b.time}</Badge>
                      <span className="text-[9px] text-muted-foreground">· 5 min read</span>
                      <span className="text-[9px] text-muted-foreground">· 1.2K views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Products Tab */}
          {activeTab === "products" && (
            <div>
              {/* Add Product Button */}
              <div className="mb-3">
                <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" className="h-7 text-[10px] gap-1" style={{ borderRadius: '5px' }}>
                      <Plus className="h-3 w-3" /> Add Product
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md p-0 gap-0" style={{ borderRadius: '8px' }}>
                    <DialogHeader className="p-4 pb-0">
                      <DialogTitle className="text-sm font-semibold">Add New Product</DialogTitle>
                    </DialogHeader>
                    <div className="p-4 space-y-3">
                      {/* Cover Image Upload */}
                      <div
                        className="border-2 border-dashed border-border bg-muted/30 flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                        style={{ borderRadius: '5px' }}
                      >
                        <div className="h-10 w-10 bg-muted flex items-center justify-center mb-2" style={{ borderRadius: '50%' }}>
                          <Image className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <span className="text-xs font-medium">Upload Product Image</span>
                        <span className="text-[10px] text-muted-foreground mt-0.5">PNG, JPG up to 10MB</span>
                      </div>

                      {/* Product Title */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-medium text-muted-foreground">Product Title</label>
                        <Input
                          value={productTitle}
                          onChange={(e) => setProductTitle(e.target.value)}
                          placeholder="Enter product title"
                          className="h-8 text-xs"
                          style={{ borderRadius: '5px' }}
                        />
                      </div>

                      {/* Price */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-medium text-muted-foreground">Price</label>
                        <div className="relative">
                          <DollarSign className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                          <Input
                            type="number"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            placeholder="0.00"
                            className="h-8 text-xs pl-7"
                            style={{ borderRadius: '5px' }}
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-medium text-muted-foreground">Description</label>
                        <textarea
                          value={productDescription}
                          onChange={(e) => setProductDescription(e.target.value)}
                          placeholder="Describe your product..."
                          className="w-full min-h-[60px] text-xs p-2 border border-border bg-transparent resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                          style={{ borderRadius: '5px' }}
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        className="w-full h-8 text-xs"
                        style={{ borderRadius: '5px' }}
                        onClick={() => {
                          setIsAddProductOpen(false);
                          setProductTitle("");
                          setProductPrice("");
                          setProductDescription("");
                        }}
                      >
                        Add Product
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {digitalProducts.slice(0, 4).map((p) => (
                  <div key={p.id} className="border border-border overflow-hidden hover:border-primary/50 hover:shadow-sm transition-all group" style={{ borderRadius: '5px' }}>
                    <div className="aspect-square bg-muted overflow-hidden relative">
                      <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-2 right-2">
                        <button className="h-6 w-6 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors" style={{ borderRadius: '50%' }}>
                          <Heart className="h-3 w-3 text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                    <div className="p-2.5">
                      <div className="font-medium text-xs line-clamp-1">{p.title}</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-2 w-2 ${i < 4 ? "text-yellow-500 fill-yellow-500" : "text-muted"}`} />
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-bold">${p.price}</span>
                        <Badge variant="secondary" className="text-[8px]" style={{ borderRadius: '5px' }}>{p.sales} sold</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reviews */}
      <div className="p-4 border border-border bg-card" style={{ borderRadius: '5px' }}>
        <h2 className="text-sm font-bold mb-0.5">Reviews</h2>
        <p className="text-[10px] text-muted-foreground mb-3">What others say about {creator.name.split(" ")[0]}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {reviews.map((r, i) => (
            <div key={i} className="border border-border p-3" style={{ borderRadius: '5px' }}>
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 bg-primary flex items-center justify-center font-bold text-primary-foreground text-[10px]" style={{ borderRadius: '5px' }}>
                  {r.logo}
                </div>
                <div>
                  <div className="font-medium text-xs">{r.brand}</div>
                  <div className="flex">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} className="h-2.5 w-2.5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-[10px] text-foreground/80">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-[10px] text-muted-foreground">
        <Link to="/" className="hover:text-foreground">← Back to feed</Link>
      </div>
    </div>
  );
};

export default Profile;
