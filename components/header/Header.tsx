
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Bold,
  BoldIcon,
  Bolt,
  Book,
  Crown,
  Diamond,
  FlipHorizontal,
  Group,
  Haze,
  Heart,
  Menu,
  Power,
  PowerIcon,
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
import { FcElectricalSensor, FcElectricalThreshold, FcElectricity } from "react-icons/fc";
import { FiPower } from "react-icons/fi";


interface User {
  name?:string | undefined | null;
  email ?: string | undefined | null;
  id?:string | undefined | null;
  image ?: string | undefined | null
}

export default function Header({user}:{user:User}) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className=" px-4 py-3 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="md:text-2xl font-bold text-green-600 flex items-center"
            >
              <Crown className="mr-2" size={40}/>
              Math <span className="text-blue-500">Tutor</span>
            </Link>

            <nav className="hidden md:flex items-start space-x-6 ml-6">
              <Link
                href="/chapters"
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
              <Link
                href="/test"
                className="text-gray-600 hover:text-blue-600 transition-colors flex gap-2 items-center"
              >
                <Text />
                Test
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Badge
              variant={"secondary"}
              className="flex items-center gap-1 text-base  md:py-1.5 md:px-3 bg-green-400 hover:bg-blue-400 text-white"
            >
              <Heart size={25} className="fill-rose-600 text-rose-600" />
              <span>3</span>
            </Badge>

            <DropdownMenu>
              <DropdownMenuTrigger className="hidden md:block outline-none">
                <Avatar className="border-2 border-green-500 focus:no-underline outline-none">
                  <AvatarImage src={user?.image ? user.image : "/avatar.png"} alt="User" />
                  <AvatarFallback>{user?.name ? user.name : 'US'}</AvatarFallback>
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
