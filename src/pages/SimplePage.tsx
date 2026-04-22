import { Sparkles } from "lucide-react";

const SimplePage = ({ title, description }: { title: string; description: string }) => (
  <div className="p-8 text-center bg-card border border-border" style={{ borderRadius: '5px' }}>
    <div className="mx-auto h-10 w-10 bg-accent/10 flex items-center justify-center mb-4" style={{ borderRadius: '5px' }}>
      <Sparkles className="h-5 w-5 text-accent" />
    </div>
    <h1 className="text-xl font-bold tracking-tight">{title}</h1>
    <p className="text-muted-foreground text-xs mt-1.5 max-w-md mx-auto">{description}</p>
  </div>
);

export default SimplePage;
