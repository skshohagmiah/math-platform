import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Book, Group, GroupIcon, Menu, PersonStanding, Text } from "lucide-react";
import Link from "next/link";

const MobileHeader = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className=" -ml-2 md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
        <nav className="flex flex-col items-start space-y-6 mt-6">
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
              <Link
                href="/leaderboard"
                className="text-gray-600 hover:text-blue-600 transition-colors flex gap-2 items-center"
              >
                <GroupIcon />
                Leaderboard
              </Link>
              <Link
                href="/profile"
                className="text-gray-600 hover:text-blue-600 transition-colors flex gap-2 items-center"
              >
                <PersonStanding />
                Profile
              </Link>
              <Button className="" variant={'destructive'}>
                Logout
              </Button>
            </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileHeader;
