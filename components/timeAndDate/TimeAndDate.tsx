import { useEffect, useState } from "react";
import { TimeContainer } from "./time,style";
import { Cousine } from "next/font/google";

const roboto_mono = Cousine({ subsets: ["latin"], weight: "400" });

const TimeAndDate = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, []);

  const getTimeOfDayGreeting = (currentHour: number): string => {
    let greeting = "";

    if (currentHour >= 0 && currentHour < 12) {
      greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }

    return greeting;
  };

  const currentHour = currentTime.getHours();
  const greeting = getTimeOfDayGreeting(currentHour);
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <TimeContainer className={roboto_mono.className}>
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>
      <p>{greeting}</p>
    </TimeContainer>
  );
};

export default TimeAndDate;
