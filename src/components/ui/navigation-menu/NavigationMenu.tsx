import React from "react";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils";

interface NavigationMenuContextType {
  openItem: string | null;
  setOpenItem: (item: string | null) => void;
}

const NavigationMenuContext = React.createContext<NavigationMenuContextType>({
  openItem: null,
  setOpenItem: () => {}
});

const NavigationMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const [openItem, setOpenItem] = React.useState<string | null>(null);
    return (
      <NavigationMenuContext.Provider value={{ openItem, setOpenItem }}>
        <nav ref={ref} data-slot="navigation-menu" className={cn("relative flex max-w-max flex-1 items-center justify-center", className)} {...props}>
          {children}
        </nav>
      </NavigationMenuContext.Provider>);

  }
);
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) =>
  <ul ref={ref} data-slot="navigation-menu-list" className={cn("group flex flex-1 list-none items-center justify-center gap-0", className)} {...props} />

);
NavigationMenuList.displayName = "NavigationMenuList";

const NavItemContext = React.createContext<string>("");

const NavigationMenuItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement> & {value?: string;}>(
  ({ className, value = Math.random().toString(), children, ...props }, ref) =>
  <NavItemContext.Provider value={value}>
      <li ref={ref} data-slot="navigation-menu-item" className={cn("relative", className)} {...props}>
        {children}
      </li>
    </NavItemContext.Provider>

);
NavigationMenuItem.displayName = "NavigationMenuItem";

const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg bg-background px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
);

const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, onClick, ...props }, ref) => {
    const { openItem, setOpenItem } = React.useContext(NavigationMenuContext);
    const itemId = React.useContext(NavItemContext);
    const isOpen = openItem === itemId;
    return (
      <button
        ref={ref} type="button" data-slot="navigation-menu-trigger"
        data-open={isOpen || undefined}
        onClick={(e) => {setOpenItem(isOpen ? null : itemId);onClick?.(e);}}
        className={cn(navigationMenuTriggerStyle(), "group", isOpen && "bg-muted/50", className)}
        {...props}>
        
        {children}
        <ChevronDown className={cn("relative top-px ml-1 size-3 transition duration-300", isOpen && "rotate-180")} aria-hidden="true" />
      </button>);

  }
);
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const NavigationMenuContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { openItem, setOpenItem } = React.useContext(NavigationMenuContext);
    const itemId = React.useContext(NavItemContext);
    React.useEffect(() => {
      if (openItem !== itemId) return;
      const handler = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('[data-slot="navigation-menu"]')) setOpenItem(null);
      };
      window.addEventListener("click", handler);
      return () => window.removeEventListener("click", handler);
    }, [openItem, itemId, setOpenItem]);
    if (openItem !== itemId) return null;
    return (
      <div ref={ref} data-slot="navigation-menu-content" className={cn("absolute top-full left-0 mt-1.5 w-max overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow ring-1 ring-foreground/10", className)} {...props} />);

  }
);
NavigationMenuContent.displayName = "NavigationMenuContent";

const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) =>
  <a ref={ref} data-slot="navigation-menu-link" className={cn("flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted [&_svg:not([class*='size-'])]:size-4", className)} {...props} />

);
NavigationMenuLink.displayName = "NavigationMenuLink";

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle };