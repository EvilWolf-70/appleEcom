import React, {useEffect, useState} from 'react'

const FlashSaleCounter = ({targetDate}) => {
    const calculateTimeLeft = () => {
      // console.log("current", new Date());
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        // console.log(difference);
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        } else {
          timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    
        return timeLeft;
      };
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer); // Clean up the timer when the component is unmounted
      }, []);
  return (
    <>
    <div className="flash-sale-timer">
        <div className="timer-item">
            <p className='timer-title'>Days</p>
            <h5 className='timer-number'>{timeLeft.days}</h5>
        </div>
        <span className='colon'>:</span>
        <div className="timer-item">
            <p className='timer-title'>Hours</p>
            <h5 className='timer-number'>{timeLeft.hours}</h5>
        </div>
        <span className='colon'>:</span>
        <div className="timer-item">
            <p className='timer-title'>Minutes</p>
            <h5 className='timer-number'>{timeLeft.minutes}</h5>
        </div>
        <span className='colon'>:</span>
        <div className="timer-item">
            <p className='timer-title'>Seconds</p>
            <h5 className='timer-number'>{timeLeft.seconds}</h5>
        </div>
    </div>
    </>
  )
}

export default FlashSaleCounter