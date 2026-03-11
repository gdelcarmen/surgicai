import {
  Droplet,
  GraduationCap,
  Heart,
  Monitor,
  ScanLine,
  Search,
} from "lucide-react";

export const mainMenuItems = [
  {
    id: 1,
    label: "Products",
    subMenus: [
      {
        title: "Platform",
        items: [
          {
            label: "MARCUS",
            description: "Citation-backed clinical knowledge retrieval",
            icon: Search,
            link: "/#marcus",
          },
          {
            label: "DrainBow",
            description: "Standardized drain output tracking",
            icon: Droplet,
            link: "/#products",
          },
          {
            label: "Boards Practice",
            description: "Oral board simulation with tone analysis",
            icon: GraduationCap,
            link: "/#products",
          },
          {
            label: "OP REPORT",
            description: "Physics-based surgical simulation",
            icon: Monitor,
            link: "/#products",
          },
          {
            label: "Radiology Training",
            description: "Synthetic imaging for unlimited practice",
            icon: ScanLine,
            link: "/#products",
          },
          {
            label: "Goals of Care",
            description: "Communication skills with emotional scoring",
            icon: Heart,
            link: "/#products",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Releases",
    link: "/releases",
  },
  {
    id: 3,
    label: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    label: "About",
    link: "/about",
  },
  {
    id: 5,
    label: "Security",
    link: "/security",
  },
  {
    id: 6,
    label: "For Institutions",
    link: "/institutions",
  },
];

export const footerLinks = [
  {
    label: "Products",
    href: "/#products",
  },
  {
    label: "Releases",
    href: "/releases",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Security",
    href: "/security",
  },
  {
    label: "For Institutions",
    href: "/institutions",
  },
  {
    label: "Contact",
    href: "mailto:contact@surgic.ai",
  },
];
