import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Check, DollarSign, Users, TrendingUp, Zap } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Monetize Content", description: "Earn from your posts, products & collabs" },
  { icon: Users, title: "Grow Audience", description: "Get discovered by brands and followers" },
  { icon: TrendingUp, title: "Analytics", description: "Track your growth and engagement" },
  { icon: Zap, title: "Priority Support", description: "Get help when you need it" },
];

const requirements = [
  "At least 1,000 followers",
  "Active account for 30+ days",
  "Original content only",
  "Follow community guidelines",
];

const BecomeCreator = () => {
  return (
    <div className="space-y-4 max-w-2xl">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground p-4 relative overflow-hidden" style={{ borderRadius: '5px' }}>
        <div className="relative">
          <div className="inline-flex items-center gap-1 bg-primary-foreground/10 px-2 py-0.5 text-[10px] font-semibold mb-2" style={{ borderRadius: '5px' }}>
            <Sparkles className="h-2.5 w-2.5" /> CREATOR PROGRAM
          </div>
          <h1 className="text-lg font-bold tracking-tight">Become a Creator</h1>
          <p className="text-primary-foreground/70 text-xs mt-1 max-w-lg">
            Join thousands of creators monetizing their content on Pulse.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="font-semibold text-xs mb-2">Benefits</h2>
        <div className="grid grid-cols-2 gap-2">
          {benefits.map((b) => (
            <div key={b.title} className="p-3 flex items-start gap-2 border border-border bg-card" style={{ borderRadius: '5px' }}>
              <div className="h-6 w-6 bg-accent/10 flex items-center justify-center flex-shrink-0" style={{ borderRadius: '5px' }}>
                <b.icon className="h-3 w-3 text-accent" />
              </div>
              <div>
                <div className="font-medium text-xs">{b.title}</div>
                <div className="text-[10px] text-muted-foreground">{b.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <div className="p-3 border border-border bg-card" style={{ borderRadius: '5px' }}>
        <h2 className="font-semibold text-xs mb-2">Requirements</h2>
        <div className="space-y-1.5">
          {requirements.map((req) => (
            <div key={req} className="flex items-center gap-2 text-xs">
              <div className="h-4 w-4 bg-muted flex items-center justify-center" style={{ borderRadius: '5px' }}>
                <Check className="h-2.5 w-2.5 text-muted-foreground" />
              </div>
              {req}
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="p-3 border border-border bg-card" style={{ borderRadius: '5px' }}>
        <h2 className="font-semibold text-xs mb-3">Apply Now</h2>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-[10px]">Full Name</Label>
              <Input placeholder="Enter your name" className="h-7 text-xs" style={{ borderRadius: '5px' }} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px]">Email</Label>
              <Input placeholder="you@example.com" className="h-7 text-xs" style={{ borderRadius: '5px' }} />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-[10px]">Social Media Links</Label>
            <Input placeholder="Instagram, TikTok, YouTube..." className="h-7 text-xs" style={{ borderRadius: '5px' }} />
          </div>
          <div className="space-y-1">
            <Label className="text-[10px]">Content Category</Label>
            <Input placeholder="Fashion, Tech, Lifestyle..." className="h-7 text-xs" style={{ borderRadius: '5px' }} />
          </div>
          <div className="space-y-1">
            <Label className="text-[10px]">Why do you want to join?</Label>
            <textarea
              className="w-full min-h-[60px] border border-input bg-background px-2 py-1.5 text-xs resize-none focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Tell us about yourself..."
              style={{ borderRadius: '5px' }}
            />
          </div>
          <Button className="w-full h-7 bg-primary text-primary-foreground text-xs" style={{ borderRadius: '5px' }}>
            <Sparkles className="h-3 w-3 mr-1" /> Submit Application
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BecomeCreator;
