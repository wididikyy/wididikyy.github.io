"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function CatIntro() {
  const [visible, setVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
    const timer = setTimeout(dismiss, 8000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/kicau-mania.mp3" />
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={dismiss}
          >
            <motion.div
              initial={{ scale: 0.5, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 40 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex flex-col items-center gap-4"
            >
              <Image
                src="/cat-dance.gif"
                alt="Kucing Kicau Mania"
                width={200}
                height={200}
                unoptimized
                priority
                loading="eager"
                style={{ height: "auto", width: "auto" }}
                className="rounded-2xl"
              />
              <p className="text-white text-sm opacity-60 select-none">
                Tap anywhere to skip
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
