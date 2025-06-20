import { useEffect, Dispatch, SetStateAction } from "react";

interface UseAutoAdvanceProps {
  itemsLength: number;
  delay?: number;
  isPaused: boolean;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const useAutoAdvance = ({
  itemsLength,
  delay = 5000,
  isPaused,
  setCurrentIndex,
}: UseAutoAdvanceProps) => {
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % itemsLength);
    }, delay);

    return () => clearInterval(interval);
  }, [itemsLength, delay, isPaused, setCurrentIndex]);
};

export default useAutoAdvance;
