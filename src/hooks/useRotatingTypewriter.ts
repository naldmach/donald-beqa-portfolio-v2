import { useEffect, useRef, useState } from "react";

interface UseRotatingTypewriterOptions {
  typeSpeedMs?: number;
  deleteSpeedMs?: number;
  pauseMs?: number;
  loop?: boolean;
}

export function useRotatingTypewriter(
  phrases: string[],
  options: UseRotatingTypewriterOptions = {}
) {
  const {
    typeSpeedMs = 70,
    deleteSpeedMs = 40,
    pauseMs = 1200,
    loop = true,
  } = options;

  const [display, setDisplay] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length] ?? "";

    if (isPaused) {
      timeoutRef.current = window.setTimeout(() => setIsPaused(false), pauseMs);
      return () => {
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      };
    }

    const shouldAdvance = () => {
      if (!isDeleting && display === current) return true;
      if (isDeleting && display === "") return true;
      return false;
    };

    if (shouldAdvance()) {
      if (!isDeleting) {
        // Finished typing current phrase
        setIsPaused(true);
        setIsDeleting(true);
      } else {
        // Finished deleting, move to next phrase
        const nextIndex = phraseIndex + 1;
        if (!loop && nextIndex >= phrases.length) {
          // Stop at last phrase fully typed
          setIsDeleting(false);
          setIsPaused(false);
          setDisplay(current);
          return;
        }
        setPhraseIndex(nextIndex % phrases.length);
        setIsDeleting(false);
      }
      return;
    }

    const nextText = () => {
      if (isDeleting) {
        return current.substring(0, display.length - 1);
      }
      return current.substring(0, display.length + 1);
    };

    timeoutRef.current = window.setTimeout(
      () => {
        setDisplay(nextText());
      },
      isDeleting ? deleteSpeedMs : typeSpeedMs
    );

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [
    phrases,
    phraseIndex,
    isDeleting,
    display,
    typeSpeedMs,
    deleteSpeedMs,
    pauseMs,
    loop,
    isPaused,
  ]);

  return display;
}
