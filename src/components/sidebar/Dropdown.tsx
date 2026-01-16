import { Button, buttonVariants } from "@/components/ui/button";
import { type SidebarItem } from ".";
import { ChevronRight } from "lucide-react";
import { useTabs } from "@/src/lib/tabs-context";
import { useEffect, useState } from "react";

export function Dropdown({
  child,
  itemId,
}: {
  child: SidebarItem;
  itemId: string;
}) {
  const { openTab, activeTabId } = useTabs();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if any child is potentially active
    const hasActiveChild = child.children?.some(subItem => subItem.id === activeTabId);
    if (hasActiveChild) {
        setIsOpen(true);
    }
  }, [activeTabId, child.children]);

  const handleItemClick = (item: SidebarItem) => {
    if (item.component) {
        openTab({
            id: item.id,
            title: item.title,
            component: item.component,
        });
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className:
            "w-full flex justify-start items-center hover:bg-transparent hover:text-foreground",
        })}
      >
        <span className="flex items-center gap-2 truncate">
            {child.icon}
            {child.title}
        </span>
        <ChevronRight 
            className={`size-4 transition-transform ${isOpen ? "rotate-90" : ""}`} 
        />
      </button>
      
      {isOpen && (
        <div className="pl-4 animate-in slide-in-from-top-2 fade-in duration-200">
            {child?.children?.map((subItem) => (
                <Button
                    key={subItem.title}
                    size="sm"
                    className={`w-full flex justify-start ${activeTabId === subItem.id ? "bg-accent/30 border-l-2 border-primary rounded-l-none" : ""}`}
                    variant="ghost"
                    onClick={() => handleItemClick(subItem)}
                >
                    {subItem.icon} {subItem.title}
                </Button>
            ))}
        </div>
      )}
    </div>
  );
}
