"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <Card className="max-w-screen-lg mx-auto p-8 my-16 bg-white shadow-lg rounded-lg border border-gray-200">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
         <span className="text-green-500 font-extrabold"> Subscribe </span>to Our Newsletter
        </CardTitle>
      </CardHeader>
      <CardContent className="my-4 text-center">
        {!subscribed ? (
          <>
            <p className="mb-6 text-gray-600">
              Stay updated with our latest math and science lessons. Enter your email to join our community!
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md shadow-sm"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleSubscribe}
                  className="p-4 bg-blue-600 text-white font-bold rounded-md flex items-center"
                >
                  <FiMail className="mr-2" />
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-semibold text-gray-700">
              Thank you for subscribing! Check your inbox for confirmation.
            </p>
          </motion.div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-center text-center -mt-4">
        <p className="text-sm text-gray-500 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </CardFooter>
    </Card>
  );
};

export default Newsletter;
