import {
  Home,
  Compass,
  Users,
  MessageCircle,
  Store,
  Bookmark,
  Settings,
  Play,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const main = [
  { title: "Home", url: "/", icon: Home },
  { title: "Discover", url: "/discover", icon: Compass },
  { title: "Videos", url: "/videos", icon: Play },
  { title: "Influencers", url: "/influencers", icon: Users },
  { title: "Messages", url: "/chat", icon: MessageCircle },
];

const content = [
  { title: "Saved", url: "/saved", icon: Bookmark },
];

const business = [
  { title: "Marketplace", url: "/products", icon: Store },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const renderItems = (items: typeof main) =>
    items.map((item) => (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild tooltip={item.title} className="h-8">
          <NavLink
            to={item.url}
            end={item.url === "/"}
            className="flex items-center gap-2 rounded-none px-2 py-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            activeClassName="!bg-muted !text-foreground font-medium"
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!collapsed && <span className="truncate text-xs">{item.title}</span>}
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <Sidebar collapsible="icon" className="border-r border-border bg-background">
      <SidebarHeader className="px-3 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
            P
          </div>
          {!collapsed && (
            <div className="font-semibold text-base tracking-tight">Pulse</div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5">
              {renderItems(main)}
              {renderItems(content)}
              {renderItems(business)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}