'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Trophy, Star, TrendingUp, ChevronRight } from 'lucide-react';
import { Card } from '../ui/card';
import MathLesson from './MathExample';
import DailyMathChallenge from './DailyMathChallange';
import SignInModal from '../auth/SignInModel';

export default function Hero({isAuthenticated}:{isAuthenticated:boolean}) {
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
    <section className="py-20  ">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center">
          <div className=" mb-10 lg:mb-0 text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Unleash Your <span className='text-green-500'>Math</span> Potential
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Embark on an exciting journey of <span className='text-green-700'>interactive math learning</span>. 
              Challenge yourself, earn rewards, and watch your skills soar!
            </p>
              {
                isAuthenticated ? (
                  <Button className='rounded-full px-10 py-6 border-b-4 text-lg'>Start Your Chapter</Button>
                ):(
                  <SignInModal />
                )
              }
            <small className='block text-muted-foreground p-2'>Sign up for free forever to get rewards, improve level and to appear on the leaderboard</small>
          </div>
          <DailyMathChallenge />
        </div>
      </div>
    </section>
  );
}