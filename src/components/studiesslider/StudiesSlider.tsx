"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAutoAdvance from "../../hooks/useAutoAdvance";
import { StudiesCard } from "../studiescard";
import { studiesData } from "../../data/studies";

const StudiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useAutoAdvance({
    itemsLength: studiesData.length,
    delay: 5000,
    isPaused,
    setCurrentIndex,
  });

  const current = studiesData[currentIndex];

  return (
    <section
      aria-label="Slider de estudios"
      className="w-full max-w-3xl mx-auto h-[550px] relative flex items-center justify-center px-4"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <StudiesCard study={current} setIsPaused={setIsPaused} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default StudiesSlider;
