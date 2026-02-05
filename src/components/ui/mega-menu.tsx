import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: any;
      link?: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-0 ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            <button
              className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-white/50 transition-colors duration-300 hover:text-white group"
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span>{navItem.label}</span>
              {navItem.subMenus && (
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${openMenu === navItem.label ? "rotate-180" : ""
                    }`}
                />
              )}
              {(isHover === navItem.id || openMenu === navItem.label) && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 size-full bg-white/10"
                  style={{
                    borderRadius: 99,
                  }}
                />
              )}
            </button>

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-0 top-full w-auto pt-4 z-10">
                  <motion.div
                    className="w-max border border-[#1e2330] bg-[#12151c] p-1 shadow-xl"
                    style={{
                      borderRadius: 12,
                    }}
                    layoutId="menu"
                  >
                    <div className="flex w-fit shrink-0 space-x-2 overflow-hidden p-1">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className="w-full" key={sub.title}>
                          <h3 className="mb-2 px-3 pt-2 text-xs font-semibold uppercase tracking-wider text-[#6b7394]">
                            {sub.title}
                          </h3>
                          <ul className="space-y-0.5">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <a
                                    href={item.link || "#"}
                                    className="flex items-start space-x-3 rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-[#1a1e28] group"
                                  >
                                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#0a0c10] border border-[#1e2330] text-[#9ba1b8] transition-colors duration-200 group-hover:border-[#f97066]/30 group-hover:bg-[#f97066]/10 group-hover:text-[#f97066]">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div className="w-[180px]">
                                      <p className="text-sm font-medium text-[#e8eaf0] transition-colors group-hover:text-white">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-[#9ba1b8] line-clamp-2 mt-0.5">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;