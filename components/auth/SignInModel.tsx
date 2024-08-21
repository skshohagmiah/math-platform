"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const SignInModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoogleSignIn = () => {
    // Add your Google Sign-In logic here
    console.log("Google Sign-In Clicked");
  };

  return (
    <>
      <Button
        size="lg"
        className="transition duration-300 rounded-full border-b-4 py-6"
        onClick={() => setIsModalOpen(true)}
      >
        Start Your Adventure <ChevronRight className="ml-2" />
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="p-6 py-12 rounded-lg bg-white shadow-lg max-w-lg mx-auto">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold text-gray-800 ">
              Sign In
            </DialogTitle>
            <small className='block text-muted-foreground mb-4'>Sign up for free forever to get rewards, improve level and to appear on the leaderboard</small>
          </DialogHeader>
          <div className="flex flex-col gap-4 items-center">
            <Button
              size="lg"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center bg-green-800 text-white font-semibold text-lg border rounded-full py-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FcGoogle className="mr-2 text-2xl" size={30} />
              Sign in with Google
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SignInModal;
