import {
  Home,
  Compass,
  Users,
  MessageCircle,
  Video,
  Image as ImageIcon,
  Store,
  Bookmark,
  Settings,
  Sparkles,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const main = [
  { title: "Home", url: "/", icon: Home },
  { title: "Discover", url: "/discover", icon: Compass },
  { title: "Influencers", url: "/influencers", icon: Users },
  { title: "Messages", url: "/chat", icon: MessageCircle },
];

const content = [
  { title: "Videos", url: "/videos", icon: Video },
  { title: "Photos", url: "/photos", icon: ImageIcon },
  { title: "Saved", url: "/saved", icon: Bookmark },
];

const business = [
  { title: "Digital Products", url: "/products", icon: Store },
  { title: "Become a Creator", url: "/become-creator", icon: Sparkles },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const renderItems = (items: typeof main) =>
    items.map((item) => (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild tooltip={item.title} className="h-11">
          <NavLink
            to={item.url}
            end={item.url === "/"}
            className="flex items-center gap-3 rounded-full px-3 text-sidebar-foreground hover:bg-card hover:text-foreground transition-colors"
            activeClassName="!bg-primary !text-primary-foreground font-semibold shadow-card"
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span className="truncate text-sm">{item.title}</span>}
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="px-5 py-6">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-card">
            P
          </div>
          {!collapsed && (
            <div className="font-display font-bold text-xl tracking-tight">Pulse</div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel className="px-3 text-[11px] uppercase tracking-wider text-muted-foreground/70">Feed</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>{renderItems(main)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel className="px-3 text-[11px] uppercase tracking-wider text-muted-foreground/70">Content</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>{renderItems(content)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel className="px-3 text-[11px] uppercase tracking-wider text-muted-foreground/70">Business</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>{renderItems(business)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {!collapsed && (
          <div className="mt-6 mx-2 rounded-2xl bg-primary text-primary-foreground p-4 shadow-card">
            <div className="text-xs uppercase tracking-wider text-primary-foreground/60 font-semibold">Pro Tip</div>
            <div className="mt-1 text-sm font-semibold leading-snug">Boost your reach with verified creator collabs.</div>
            <button className="mt-3 w-full rounded-full bg-accent text-accent-foreground text-xs font-bold py-2 hover:opacity-90 transition-opacity">
              Explore Creators →
            </button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}