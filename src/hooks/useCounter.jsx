import { useContext, useEffect, useState } from "react";
import ScoreContext from "../context/scoreProvider";

const useCounter = () => {
  const { maximumScore, setMaximumScore } = useContext(ScoreContext);
  const [counter, setCounter] = useState(0);
  const [isRunningGame, setIsRunningGame] = useState(false);
  const [isRunningPreparation, setIsRunningPreparation] = useState(false);
  const [message, setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [timePreparation, setTimePreparation] = useState(0);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const startPreparation = () => {
    setIsRunningPreparation(true);
    setTimePreparation(3);
  };

  const handleTimeUp = () => {
    setIsRunningGame(false);
    setCounter(0);
    if (counter > maximumScore) {
      setMaximumScore(prevMaximumScore => {
        if (counter > prevMaximumScore) {
          localStorage.setItem("maxScore", counter.toString());
          return counter;
        }
        return prevMaximumScore;
      });
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      if (isRunningGame) {
        handleTimeUp();
      }
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);

  }, [timeLeft]);

  useEffect(() => {
    if (timePreparation === 0) {
      if (isRunningPreparation) {
        setIsRunningPreparation(false);
        setIsRunningGame(true);
        setMessage('');
        setTimeLeft(5);
      }
      return;
    }

    const messages = {
      3: 'Preparados',
      2: 'Listos',
      1: '¡Ya!',
    };

    setMessage(messages[timePreparation]);

    const intervalId = setInterval(() => {
      setTimePreparation((prevPreparation) => prevPreparation - 1);
    }, 1000);

    return () => clearInterval(intervalId);

  }, [timePreparation]);

  return {
    counter,
    handleClick,
    isRunningGame,
    isRunningPreparation,
    message,
    startPreparation,
    timeLeft,
  }
}

export default useCounter;
