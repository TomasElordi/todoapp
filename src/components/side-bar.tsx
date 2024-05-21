import Logo from "@/components/ui/logo";
import Link from "next/link";
import { BellIcon, SquareDashedKanban } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const pages = [
    {
      title: "Proyects",
      href: "/proyects",
      icon: SquareDashedKanban,
    },
  ];
  return (
    <div className="hidden border-r  lg:block  h-full min-h-screen">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <Logo />
          </Link>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {pages.map((page) => (
              <Link
                key={page.title}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={page.href}
              >
                <page.icon className="h-4 w-4" />
                {page.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4"></div>
      </div>
    </div>
  );
}
