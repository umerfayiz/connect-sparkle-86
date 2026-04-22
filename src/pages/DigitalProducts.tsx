import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { digitalProducts } from "@/data/mock";
import { ShoppingBag, Star, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Presets", "Ebooks", "Courses", "Templates"];

const DigitalProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-bold tracking-tight">Marketplace</h1>
          <p className="text-muted-foreground text-xs">Discover digital products by creators</p>
        </div>
        <Button size="sm" className="h-8 px-4 text-xs bg-primary text-primary-foreground self-start" style={{ borderRadius: '5px' }}>
          <ShoppingBag className="h-3.5 w-3.5 mr-1.5" /> Start Selling
        </Button>
      </div>

      {/* Categories */}
      <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 px-3 py-1.5 text-[10px] font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
            style={{ borderRadius: '5px' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid - Same as Profile products tab */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {digitalProducts.map((p) => (
          <div key={p.id} className="border border-border overflow-hidden hover:border-primary/50 hover:shadow-sm transition-all group" style={{ borderRadius: '5px' }}>
            <div className="aspect-square bg-muted overflow-hidden relative">
              <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => toggleFavorite(p.id)}
                  className="h-6 w-6 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                  style={{ borderRadius: '50%' }}
                >
                  <Heart className={`h-3 w-3 ${favorites.includes(p.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                </button>
              </div>
            </div>
            <div className="p-2.5">
              <div className="text-[9px] text-muted-foreground">{p.author}</div>
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

      {/* Load More */}
      <div className="flex justify-center pt-2">
        <Button variant="outline" size="sm" className="h-8 px-6 text-xs gap-1" style={{ borderRadius: '5px' }}>
          Load More <ChevronDown className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default DigitalProducts;
