import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { digitalProducts } from "@/data/mock";
import { ShoppingBag, Sparkles } from "lucide-react";

const DigitalProducts = () => (
  <div className="space-y-6">
    <header className="flex items-end justify-between">
      <div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft text-accent-strong px-3 py-1 text-xs font-semibold mb-3">
          <Sparkles className="h-3.5 w-3.5" /> CREATOR STORE
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Digital Products</h1>
        <p className="text-muted-foreground text-sm mt-1">Presets, ebooks, courses & templates by your favourite creators.</p>
      </div>
      <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-90">Sell yours</Button>
    </header>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {digitalProducts.map((p) => (
        <Card key={p.id} className="overflow-hidden bg-card border-border shadow-card hover:-translate-y-1 hover:shadow-elevated transition-all rounded-3xl p-3">
          <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
            <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="p-3">
            <Badge variant="secondary" className="text-[10px] rounded-full">{p.sales.toLocaleString()} sold</Badge>
            <h3 className="mt-2 font-semibold leading-tight line-clamp-2">{p.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">by {p.author}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-xl font-bold tabular-nums">${p.price}</div>
              <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:opacity-90">
                <ShoppingBag className="h-4 w-4 mr-1.5" /> Buy
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default DigitalProducts;