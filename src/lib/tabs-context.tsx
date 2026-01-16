
"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";

export interface Tab {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface TabsContextType {
  openTabs: Tab[];
  activeTabId: string | null;
  openTab: (tab: Tab) => void;
  closeTab: (id: string) => void;
  setActiveTabId: (id: string | null) => void;
  closeAllTabs: () => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function TabsProvider({ children }: { children: ReactNode }) {
  const [openTabs, setOpenTabs] = useState<Tab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  const openTab = useCallback((tab: Tab) => {
    setOpenTabs((prev) => {
      if (prev.some((t) => t.id === tab.id)) {
        return prev;
      }
      return [...prev, tab];
    });
    setActiveTabId(tab.id);
  }, []);

  const closeTab = useCallback((id: string) => {
    setOpenTabs((prev) => {
      const newTabs = prev.filter((t) => t.id !== id);
      return newTabs;
    });
    setActiveTabId((prevId) => {
        if (prevId === id) {
            // Find appropriate next tab (preferably one to the left, or none)
            // But strict "close" usually means go close nearby or nothing.
            // Simplified: if closing active, go to null or last.
            // We'll handle this logic better inside the state update if needed,
            // but for now, rely on Effect or separate logic? 
            // Actually, we need access to the newTabs to decide.
            return null; // This will start "null", but inside setOpenTabs scope we knew...
            // Let's fix this logic below. 
        }
        return prevId;
    });
  }, []);
  
  // Adjusted close logic to pick a neighbor if active is closed
  const closeTabSmart = useCallback((id: string) => {
    setOpenTabs((prev) => {
        const index = prev.findIndex(t => t.id === id);
        if (index === -1) return prev;
        
        const newTabs = prev.filter(t => t.id !== id);
        
        setActiveTabId(current => {
            if (current === id) {
                if (newTabs.length === 0) return null;
                // Try to go silently to the tab to the right, or left if right doesn't exist
                // If we closed index i, newTabs[i] is the one that was to the right.
                // If i >= newTabs.length, then we closed the last one, so newTabs[i-1] is best.
                const nextIndex = Math.min(index, newTabs.length - 1);
                return newTabs[nextIndex].id;
            }
            return current;
        });
        
        return newTabs;
    });
  }, []);

  const closeAllTabs = useCallback(() => {
    setOpenTabs([]);
    setActiveTabId(null);
  }, []);

  return (
    <TabsContext.Provider
      value={{
        openTabs,
        activeTabId,
        openTab,
        closeTab: closeTabSmart,
        setActiveTabId,
        closeAllTabs,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
}

export function useTabs() {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
}
