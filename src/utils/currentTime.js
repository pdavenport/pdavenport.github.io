import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update time every minute

    return () => {
      clearInterval(timerId); // Clear interval on component unmount
    };
  }, []);

  const formatTime = (time) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  return formatTime(currentTime)
}

export default Clock;