import { Bell, Search, Plus, Image, Smile, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("");

  return (
    <header className="sticky top-0 z-40 h-12 bg-background border-b border-border">
      <div className="h-full flex items-center gap-2 px-3">
        {/* Create Post Button with Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="h-7 px-3 text-[10px] gap-1.5 bg-primary text-primary-foreground" style={{ borderRadius: '5px' }}>
              <Plus className="h-3 w-3" /> Create Post
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md p-0 gap-0" style={{ borderRadius: '8px' }}>
            <DialogHeader className="p-4 pb-0">
              <DialogTitle className="text-sm font-semibold">Create Post</DialogTitle>
            </DialogHeader>
            <div className="p-4 space-y-3">
              {/* Image Upload Area */}
              <div
                className="border-2 border-dashed border-border bg-muted/30 flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                style={{ borderRadius: '5px' }}
              >
                <div className="h-12 w-12 bg-muted flex items-center justify-center mb-2" style={{ borderRadius: '50%' }}>
                  <Image className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="text-xs font-medium">Click to upload image</span>
                <span className="text-[10px] text-muted-foreground mt-0.5">PNG, JPG up to 10MB</span>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full min-h-[80px] text-xs p-2 border border-border bg-transparent resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                  style={{ borderRadius: '5px' }}
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <button className="h-7 w-7 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground" style={{ borderRadius: '5px' }}>
                      <Image className="h-4 w-4" />
                    </button>
                    <button className="h-7 w-7 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground" style={{ borderRadius: '5px' }}>
                      <Smile className="h-4 w-4" />
                    </button>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{description.length}/500</span>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                className="w-full h-8 text-xs"
                style={{ borderRadius: '5px' }}
                onClick={() => setIsOpen(false)}
              >
                Post
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="hidden md:flex relative max-w-xs flex-1">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-8 h-7 text-xs bg-muted border border-border focus-visible:ring-0"
            style={{ borderRadius: '8px' }}
          />
        </div>
        <div className="flex-1" />
        <button className="bg-muted h-7 w-7 flex items-center justify-center text-muted-foreground hover:text-foreground" style={{ borderRadius: '5px' }}>
          <Bell className="h-3.5 w-3.5" />
        </button>
        <Link to="/login">
          <Button size="sm" variant="outline" className="h-7 px-3 text-[10px] gap-1.5" style={{ borderRadius: '5px' }}>
            <LogIn className="h-3 w-3" /> Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button size="sm" className="h-7 px-3 text-[10px] bg-primary text-primary-foreground" style={{ borderRadius: '5px' }}>
            Sign Up
          </Button>
        </Link>
      </div>
    </header>
  );
}
