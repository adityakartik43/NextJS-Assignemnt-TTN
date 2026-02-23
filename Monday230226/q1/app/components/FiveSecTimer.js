"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const FiveSecTimer = () => {
  const [timer, setTimer] = useState(5);
  const router = useRouter();
  
  useEffect(() => {
    if (timer <= 0) {
      router.push("/api/dashboard");
      return;
    }

    console.log(timer)
    
    const intervalId = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [timer, router]);

  return <>
    <h2>Logging in {timer} seconds</h2>
  </>;
};

export default FiveSecTimer;
