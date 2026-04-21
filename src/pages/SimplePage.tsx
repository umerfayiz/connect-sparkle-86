import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const SimplePage = ({ title, description }: { title: string; description: string }) => (
  <Card className="p-12 text-center bg-card border-border shadow-card rounded-3xl">
    <div className="mx-auto h-14 w-14 rounded-2xl bg-accent-soft flex items-center justify-center mb-5">
      <Sparkles className="h-6 w-6 text-accent-strong" />
    </div>
    <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
    <p className="text-muted-foreground mt-2 max-w-md mx-auto">{description}</p>
  </Card>
);

export default SimplePage;