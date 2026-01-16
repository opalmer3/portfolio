import { Button } from "@/components/ui/button";
import type { Category, SidebarItem } from ".";

interface SidebarItemProps {
  item: SidebarItem;
  toggleItem: (id: Category) => void;
  activeItem?: Category;
}

const SidebarItem = ({ item, toggleItem, activeItem }: SidebarItemProps) => {
  const isActive = item.id === activeItem;

  return (
    <Button
      variant="ghost"
      size="icon"
      type="button"
      onClick={() => toggleItem(item.id)}
      className={isActive ? "border-l-2 border-primary rounded-none px-2" : "px-2 border-l-2 border-transparent opacity-50 hover:opacity-100"}
      aria-label={item.title}
    >
      {item.icon}
    </Button>
  );
};

export default SidebarItem;
