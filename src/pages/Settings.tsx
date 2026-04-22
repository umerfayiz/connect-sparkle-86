import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { me } from "@/data/mock";
import { Camera, Bell, Lock, User, CreditCard, Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-4 max-w-2xl">
      <header>
        <h1 className="text-lg font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground text-xs">Manage your account preferences</p>
      </header>

      {/* Appearance */}
      <div className="border border-border bg-card p-3" style={{ borderRadius: '5px' }}>
        <div className="flex items-center gap-2 mb-3">
          <Sun className="h-3.5 w-3.5 text-muted-foreground" />
          <h2 className="font-semibold text-xs">Appearance</h2>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium">Theme</div>
            <div className="text-[10px] text-muted-foreground">Select your preferred theme</div>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setTheme("light")}
              className={`h-7 w-7 flex items-center justify-center transition-colors ${theme === "light" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
              style={{ borderRadius: '5px' }}
            >
              <Sun className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`h-7 w-7 flex items-center justify-center transition-colors ${theme === "dark" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
              style={{ borderRadius: '5px' }}
            >
              <Moon className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setTheme("system")}
              className={`h-7 w-7 flex items-center justify-center transition-colors ${theme === "system" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
              style={{ borderRadius: '5px' }}
            >
              <Monitor className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="border border-border bg-card p-3" style={{ borderRadius: '5px' }}>
        <div className="flex items-center gap-2 mb-3">
          <User className="h-3.5 w-3.5 text-muted-foreground" />
          <h2 className="font-semibold text-xs">Profile</h2>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src={me.avatar} alt={me.name} />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 h-4 w-4 bg-primary text-primary-foreground flex items-center justify-center" style={{ borderRadius: '5px' }}>
              <Camera className="h-2 w-2" />
            </button>
          </div>
          <div>
            <div className="font-semibold text-xs">{me.name}</div>
            <div className="text-[10px] text-muted-foreground">{me.username}</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label className="text-[10px]">First Name</Label>
              <Input defaultValue="Alex" className="h-7 text-xs" style={{ borderRadius: '5px' }} />
            </div>
            <div className="space-y-1">
              <Label className="text-[10px]">Last Name</Label>
              <Input defaultValue="Chen" className="h-7 text-xs" style={{ borderRadius: '5px' }} />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-[10px]">Email</Label>
            <Input defaultValue="alex@example.com" className="h-7 text-xs" style={{ borderRadius: '5px' }} />
          </div>
          <div className="space-y-1">
            <Label className="text-[10px]">Bio</Label>
            <Input defaultValue="Creator & Designer" className="h-7 text-xs" style={{ borderRadius: '5px' }} />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="border border-border bg-card p-3" style={{ borderRadius: '5px' }}>
        <div className="flex items-center gap-2 mb-3">
          <Bell className="h-3.5 w-3.5 text-muted-foreground" />
          <h2 className="font-semibold text-xs">Notifications</h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium">Push Notifications</div>
              <div className="text-[9px] text-muted-foreground">Receive push notifications</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium">Email Notifications</div>
              <div className="text-[9px] text-muted-foreground">Receive email updates</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium">Marketing Emails</div>
              <div className="text-[9px] text-muted-foreground">Receive promotional content</div>
            </div>
            <Switch />
          </div>
        </div>
      </div>

      {/* Privacy */}
      <div className="border border-border bg-card p-3" style={{ borderRadius: '5px' }}>
        <div className="flex items-center gap-2 mb-3">
          <Lock className="h-3.5 w-3.5 text-muted-foreground" />
          <h2 className="font-semibold text-xs">Privacy</h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium">Private Account</div>
              <div className="text-[9px] text-muted-foreground">Only followers can see your posts</div>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium">Show Activity Status</div>
              <div className="text-[9px] text-muted-foreground">Let others see when you're online</div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      {/* Payment */}
      <div className="border border-border bg-card p-3" style={{ borderRadius: '5px' }}>
        <div className="flex items-center gap-2 mb-2">
          <CreditCard className="h-3.5 w-3.5 text-muted-foreground" />
          <h2 className="font-semibold text-xs">Payment Methods</h2>
        </div>
        <div className="text-[10px] text-muted-foreground mb-2">No payment methods added</div>
        <Button variant="outline" size="sm" className="text-[10px] h-6" style={{ borderRadius: '5px' }}>Add Payment Method</Button>
      </div>

      <div className="flex gap-2">
        <Button className="bg-primary text-primary-foreground text-xs h-7" style={{ borderRadius: '5px' }}>Save Changes</Button>
        <Button variant="outline" className="text-xs h-7" style={{ borderRadius: '5px' }}>Cancel</Button>
      </div>
    </div>
  );
};

export default Settings;
