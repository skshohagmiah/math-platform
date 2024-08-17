// components/Header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Book,
  Crown,
  Diamond,
  Group,
  Menu,
  Power,
  Text,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className=" px-4 py-3 container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="md:text-2xl font-bold text-green-600 flex items-center"
            >
              <Crown className="mr-2" />
              MathMaster
            </Link>

            <nav className="hidden md:flex items-start space-x-6 ml-6">
              <Link
                href="#chapters"
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <Book />
                Chapters
              </Link>
              <Link
                href="/articles"
                className="text-gray-600 hover:text-blue-600 transition-colors flex gap-2 items-center"
              >
                <Text />
                Articles
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Badge
              variant="secondary"
              className="items-center flex gap-1 md:py-2 md:px-4 text-base font-semibold "
            >
              <Crown className="w-6 h-6  text-blue-500" />
              <span className="hidden sm:block">Level</span> 5
            </Badge>

            <Badge
              variant={"secondary"}
              className="flex items-center gap-1 text-base  md:py-1.5 md:px-3"
            >
              💎
              <span>3</span>
            </Badge>

            <DropdownMenu>
              <DropdownMenuTrigger className="hidden md:block">
                <Avatar>
                  <AvatarImage src="/avatar.png" alt="User" />
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <MobileHeader />
          </div>
        </div>
      </div>
    </header>
  );
}
