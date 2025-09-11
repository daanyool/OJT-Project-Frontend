import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export const data = {
  sidebar: [
    {
      title: "Menu",
      items: [
        {
          title: "Dashboard",
          url: "dashboard/",
          icon: SquareTerminal,
          items: [
            {
              title: "Sales",
              url: "#",
            },
            {
              title: "Inventory",
              url: "#",
            },
            {
              title: "Finance",
              url: "#",
            },
          ],
          isActive: true,
        },
        {
          title: "Branches",
          url: "dashboard/branches",
          icon: Bot,
          
        },
        {
          title: "Store",
          url: "/stores",
          icon: BookOpen,
          items: [
            {
              title: "Introduction",
              url: "introduction",
            },
            {
              title: "Get Started",
              url: "start",
            },
            {
              title: "Tutorials",
              url: "tutorials",
            },
            {
              title: "Changelog",
              url: "changelog",
            },
          ],
        },
        {
          title: "Settings",
          url: "settings",
          icon: Settings2,
          items: [
            {
              title: "General",
              url: "#",
            },
            {
              title: "Team",
              url: "#",
            },
            {
              title: "Billing",
              url: "#",
            },
            {
              title: "Limits",
              url: "#",
            },
          ],
        },
      ],
    },
  ],
     header: {
     title: "Acme Inc",
     icon: Command,
     href: "#",
     },
};

