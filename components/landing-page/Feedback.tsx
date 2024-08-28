"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && message) {
      setSubmitted(true);
      // Normally, you would also handle the form submission logic here
    }
  };

  return (
    <Card className="max-w-screen-lg mx-auto p-4 shadow-2xl my-16 rounded-lg bg-white">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-800">
          We Value <span className="text-green-500 font-extrabold">Your Feedback</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="my-4">
        {!submitted ? (
          <div className="space-y-6">
            <div className="flex flex-col gap-2 md:flex-row md:space-x-6">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full md:w-1/3 p-4 border border-gray-300 rounded-lg shadow-sm"
              />
              <Input
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full md:w-2/3 p-4 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
            <div  className="flex items-center flex-col-reverse gap-2 md:flex-row justify-between">
              <p className="text-sm text-gray-500">
                Your feedback helps us improve our platform. We appreciate your
                input!
              </p>
              <Button
                onClick={handleSubmit}
                className="w-full md:w-auto bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-md"
              >
                Submit Feedback
              </Button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-semibold text-center text-green-600">
              Thank you for your feedback! 🙌
            </p>
          </motion.div>
        )}
      </CardContent>
      <CardFooter className="text-center"></CardFooter>
    </Card>
  );
};

export default FeedbackForm;
