import { Card } from "@/components/ui/card";

const SimplePage = ({ title, description }: { title: string; description: string }) => (
  <Card className="p-10 text-center bg-card border-border shadow-card">
    <h1 className="text-3xl font-bold gradient-text">{title}</h1>
    <p className="text-muted-foreground mt-2">{description}</p>
  </Card>
);

export default SimplePage;