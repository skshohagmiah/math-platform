'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Trophy, Star, TrendingUp, ChevronRight } from 'lucide-react';
import { Card } from '../ui/card';
import MathLesson from './MathExample';
import DailyMathChallenge from './DailyMathChallange';

export default function Hero() {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = () => {
    if (answer === '14') {
      setFeedback('Correct! Great job!');
    } else {
      setFeedback('Not quite. Try again!');
    }
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center">
          <div className=" mb-10 lg:mb-0 text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Unleash Your Math Potential
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Embark on an exciting journey of interactive math learning. 
              Challenge yourself, earn rewards, and watch your skills soar!
            </p>
            <Button size="lg" className=" transition duration-300 rounded-full border-b-4 py-6">
              Start Your Adventure <ChevronRight className="ml-2" />
            </Button>
            <small className='block text-muted-foreground p-2'>Sign up for free forever to get rewards, improve level and to appear on the leaderboard</small>
          </div>
          <DailyMathChallenge />
        </div>
      </div>
    </section>
  );
}