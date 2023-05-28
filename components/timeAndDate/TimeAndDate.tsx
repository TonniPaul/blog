import { useEffect, useState } from "react";
import { TimeContainer } from "./time,style";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

const TimeAndDate = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeOfDayGreeting = (currentHour: number): string => {
    let greeting = "";

    if (currentHour >= 5 && currentHour < 12) {
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
  const formattedDate = currentTime.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentTime.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
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
