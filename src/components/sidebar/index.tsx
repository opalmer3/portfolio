"use client";

import {
  Code2,
  User,
  FolderGit2,
  Smartphone,
  Server,
  TrendingUp,
  Mail,
  Files,
  Download,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Item from "./SidebarItem";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dropdown } from "./Dropdown";
import { useTabs } from "@/src/lib/tabs-context";
import AboutContent from "@/src/content/About";
import ContactContent from "@/src/content/Contact";
import ExperienceContent from "@/src/content/Experience";

export type Category =
  | "explorer"
  | "contact"
  | "hi"
  | "experience"
  | "diageo"
  | "appbar"
  | "cryptocom"
  | "shamaazi";

export type SidebarItem = {
  id: Category;
  title: string;
  icon: React.ReactNode;
  children?: SidebarItem[];
  component?: React.ReactNode;
};

const sidebarItems: SidebarItem[] = [
  {
    id: "explorer",
    title: "EXPLORER",
    icon: <Files className="size-5" />,
    children: [
      {
        id: "hi",
        title: "hi.mdx",
        icon: <User className="size-3" />,
        component: <AboutContent />,
      },
      {
        id: "experience",
        title: "experience",
        icon: <FolderGit2 className="size-3" />,
        children: [
          {
            id: "diageo",
            title: "diageo.mdx",
            icon: <FolderGit2 className="size-3" />,
            component: <ExperienceContent slug="diageo" />,
          },
          {
            id: "appbar",
            title: "appbar.mdx",
            icon: <Smartphone className="size-3" />,
            component: <ExperienceContent slug="appbar" />,
          },
          {
            id: "cryptocom",
            title: "cryptocom.mdx",
            icon: <TrendingUp className="size-3" />,
            component: <ExperienceContent slug="cryptocom" />,
          },
          {
            id: "shamaazi",
            title: "shamaazi.mdx",
            icon: <Server className="size-3" />,
            component: <ExperienceContent slug="shamaazi" />,
          },
        ],
      },
      {
        id: "contact",
        title: "contact.mdx",
        icon: <Mail className="size-3" />,
        component: <ContactContent />,
      },
    ],
  },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<Category | undefined>("explorer");
  const { openTab, activeTabId } = useTabs();

  // Auto-expand category if active tab is inside it
  useEffect(() => {
    if (!activeTabId) return;

    for (const item of sidebarItems) {
        if (item.children) {
            // Check direct children
            const match = item.children.find(child => child.id === activeTabId || 
                (child.children && child.children.some(grandChild => grandChild.id === activeTabId)));
            
            if (match) {
                setActiveItem(item.id);
                return;
            }
        }
    }
  }, [activeTabId]);

  const toggleItem = (id: Category) => {
    setActiveItem(id === activeItem ? undefined : id);
  };

  const handleItemClick = (item: SidebarItem) => {
    if (item.component) {
        openTab({
            id: item.id,
            title: item.title,
            component: item.component,
        });
    }
  };

  const menuItems = activeItem
    ? sidebarItems.find((item) => item.id === activeItem)?.children
    : undefined;

  const title = useMemo(
    () =>
      activeItem
        ? sidebarItems.find((item) => item.id === activeItem)?.title
        : undefined,
    [activeItem]
  );

  return (
    <aside className="flex border-border border-r">
      <div className="h-full flex flex-col bg-activity-bar border-r border-border">
        <div className="flex-1 overflow-y-auto px-md flex flex-col space-y-sm py-md lg:py-xl no-scrollbar">
            {sidebarItems.map((item) => (
            <Item
                key={item.id}
                item={item}
                toggleItem={toggleItem}
                activeItem={activeItem}
            />
            ))}
        </div>
      </div>

      {menuItems ? (
        <div className="w-60 flex flex-col space-y-sm px-md items-start py-md lg:py-xl overflow-y-auto h-full bg-sidebar">
          <div className="title-sm text-keyword capitalize mt-sm">{title}</div>
          {menuItems.map((item) =>
            item?.children ? (
              <Dropdown key={item.id} child={item} itemId={item.id} />
            ) : (
                <Button
                  key={item.title}
                  size="sm"
                  className={`w-full flex justify-start ${activeTabId === item.id ? "bg-accent/30  border-l-2 border-primary rounded-l-none" : ""}`}
                  variant="ghost"
                  onClick={() => handleItemClick(item)}
                >
                  {item.icon}
                  {item.title}
                </Button>
            )
          )}
        </div>
      ) : null}
    </aside>
  );
};

export default Sidebar;
