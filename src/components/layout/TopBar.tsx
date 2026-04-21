import { Bell, Search, Sparkles, LogOut, Settings, User as UserIcon, Store, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { me } from "@/data/mock";

export function TopBar() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="h-full flex items-center gap-3 px-4">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        <div className="hidden md:flex relative max-w-md flex-1 ml-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search creators, brands, products…"
            className="pl-9 bg-secondary border-transparent focus-visible:ring-primary/50"
          />
        </div>
        <div className="flex-1" />
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1 hover:bg-secondary transition-colors">
              <Avatar className="h-8 w-8 ring-2 ring-primary/40">
                <AvatarImage src={me.avatar} alt={me.name} />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <span className="hidden sm:block text-sm font-medium">{me.name.split(" ")[0]}</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="font-semibold">{me.name}</span>
                <span className="text-xs text-muted-foreground">{me.username}</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/profile/aria")}>
              <UserIcon className="h-4 w-4 mr-2" /> My Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/chat")}>
              <MessageCircle className="h-4 w-4 mr-2" /> Messages
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/products")}>
              <Store className="h-4 w-4 mr-2" /> Digital Products
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/settings")}>
              <Settings className="h-4 w-4 mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/become-creator" className="cursor-pointer">
                <Sparkles className="h-4 w-4 mr-2 text-primary" />
                <span className="font-semibold gradient-text">Become a Creator</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <LogOut className="h-4 w-4 mr-2" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}