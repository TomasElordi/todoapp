import { ModeToggle } from "@/components/mode-toggle";
import TasksView from "@/components/tasks-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Package2Icon, SearchIcon } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b  px-6 ">
        <Link className="lg:hidden" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                placeholder="Search users..."
                type="search"
              />
            </div>
          </form>
        </div>
        <ModeToggle />
        <SignedOut>
          <SignInButton>
            <Button size="sm">Sign in</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <TasksView />
      </main>
    </div>
  );
}
