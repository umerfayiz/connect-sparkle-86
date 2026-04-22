import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { TopBar } from "./TopBar";
import { SidebarProvider } from "@/components/ui/sidebar";

const AppLayout = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Centered container at 70% width */}
      <div className="mx-auto w-full max-w-[1400px] lg:w-[70%] min-h-screen bg-background">
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col min-w-0">
              <TopBar />
              <main className="flex-1">
                <div className="px-4 md:px-6 py-6">
                  <Outlet />
                </div>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default AppLayout;