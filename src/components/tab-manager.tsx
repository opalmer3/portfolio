
"use client";

import { useRef, useState, useEffect } from "react";
import { useTabs } from "@/src/lib/tabs-context";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import Hero from "@/src/components/hero";

export default function TabManager() {
  const { openTabs, activeTabId, setActiveTabId, closeTab } = useTabs();
  const activeTab = openTabs.find((t) => t.id === activeTabId);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for round-off tolerance
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [openTabs]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
        const scrollAmount = 200;
        scrollContainerRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        });
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-background overflow-hidden">
      {/* Tabs list (if any open) */}
      {openTabs.length > 0 && (
        <div className="flex items-center w-full bg-sidebar border-b border-border relative group">
            {/* Scroll Left Button */}
            <button 
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll tabs left"
                className={`
                    absolute left-0 z-10 h-full px-1 bg-sidebar/90 border-r border-border items-center justify-center transition-opacity hidden group-hover:flex
                    ${!canScrollLeft ? "opacity-30 cursor-not-allowed text-muted-foreground" : "hover:bg-sidebar-accent hover:text-foreground text-muted-foreground cursor-pointer"}
                `}
            >
                <ChevronLeft className="size-4" />
            </button>

            <div 
                ref={scrollContainerRef}
                onScroll={checkScroll}
                className="flex overflow-x-auto no-scrollbar scroll-smooth w-full px-6"
            >
              {openTabs.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <div
                    key={tab.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveTabId(tab.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveTabId(tab.id);
                      }
                    }}
                    className={`
                      group/tab flex items-center gap-2 px-4 py-2 text-sm cursor-pointer border-r border-border min-w-fit focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary focus:outline-none
                      ${isActive ? "bg-background text-foreground border-t-2 border-t-accent" : "bg-sidebar text-muted-foreground hover:bg-sidebar/80 border-t-2 border-t-transparent"}
                    `}
                  >
                    <span className="text-secondary">#</span>
                    <span>{tab.title}</span>
                    <button
                      className={`ml-2 hover:bg-muted/20 rounded-sm p-0.5 transition-all cursor-pointer ${isActive ? "opacity-100 visible" : "opacity-0 invisible group-hover/tab:opacity-100 group-hover/tab:visible"}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        closeTab(tab.id);
                      }}
                      onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                              e.stopPropagation();
                          }
                      }}
                      aria-label="Close tab"
                    >
                      <X className="size-3" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Scroll Right Button */}
            <button 
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll tabs right"
                className={`
                    absolute right-0 z-10 h-full px-1 bg-sidebar/90 border-l border-border items-center justify-center transition-opacity hidden group-hover:flex
                    ${!canScrollRight ? "opacity-30 cursor-not-allowed text-muted-foreground" : "hover:bg-sidebar-accent hover:text-foreground text-muted-foreground cursor-pointer"}
                `}
            >
                <ChevronRight className="size-4" />
            </button>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative z-10">
        {openTabs.length === 0 ? (
          <Hero />
        ) : (
          /* Render active tab content */
           activeTab ? activeTab.component : <div className="p-xl text-center text-muted-foreground">Select a file...</div> 
        )}

        <a
            href="/Oliver%20Palmer%20CV.pdf"
            download="Oliver_Palmer_CV.pdf"
            className="absolute bottom-4 right-4 z-50 p-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-full flex items-center gap-2 transition-all hover:pr-4 group/download"
            aria-label="Download CV"
        >
            <Download className="size-5" />
            <span className="max-w-0 overflow-hidden opacity-0 group-hover/download:max-w-40 group-hover/download:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium">Download CV</span>
        </a>
      </div>
    </div>
  );
}
