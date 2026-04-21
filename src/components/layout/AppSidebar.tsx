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
        <SidebarMenuButton asChild tooltip={item.title} className="h-10">
          <NavLink
            to={item.url}
            end={item.url === "/"}
            className="flex items-center gap-3 rounded-xl px-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors"
            activeClassName="!bg-sidebar-accent !text-foreground font-semibold"
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span className="truncate">{item.title}</span>}
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="px-4 py-5">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center font-bold text-primary-foreground shadow-glow">
            P
          </div>
          {!collapsed && (
            <div className="font-display font-bold text-lg tracking-tight">Pulse</div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>Feed</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>{renderItems(main)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>Content</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>{renderItems(content)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          {!collapsed && <SidebarGroupLabel>Business</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>{renderItems(business)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}