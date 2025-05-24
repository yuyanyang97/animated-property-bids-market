
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface AuctionTimerProps {
  endTime: Date;
  className?: string;
}

const AuctionTimer: React.FC<AuctionTimerProps> = ({ endTime, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +endTime - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="text-center">
        <div className="text-2xl font-bold text-auction-600 dark:text-auction-400">
          {timeLeft[interval as keyof typeof timeLeft]}
        </div>
        <div className="text-xs text-gray-500 uppercase tracking-wide">
          {interval}
        </div>
      </div>
    );
  });

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <div className="flex items-center space-x-1 text-auction-600 dark:text-auction-400">
        <Clock className="h-4 w-4 animate-pulse" />
        <span className="text-sm font-medium">Auction Ends:</span>
      </div>
      <div className="flex space-x-4">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <div className="text-red-500 font-bold animate-pulse-glow">AUCTION ENDED</div>
        )}
      </div>
    </div>
  );
};

export default AuctionTimer;
