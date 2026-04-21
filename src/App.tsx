import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Influencers from "./pages/Influencers";
import DigitalProducts from "./pages/DigitalProducts";
import Discover from "./pages/Discover";
import SimplePage from "./pages/SimplePage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/influencers" element={<Influencers />} />
            <Route path="/products" element={<DigitalProducts />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/videos" element={<SimplePage title="Videos" description="Browse trending videos." />} />
            <Route path="/photos" element={<SimplePage title="Photos" description="Curated photo feed." />} />
            <Route path="/saved" element={<SimplePage title="Saved" description="Your bookmarked posts." />} />
            <Route path="/settings" element={<SimplePage title="Settings" description="Manage your account." />} />
            <Route path="/become-creator" element={<SimplePage title="Become a Creator" description="Apply to monetize your content on Pulse." />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
