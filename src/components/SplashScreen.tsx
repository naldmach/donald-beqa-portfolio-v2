import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  show: boolean;
}

export default function SplashScreen({ show }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-blue-700 to-black"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center"
            >
              <div className="h-6 w-6 rounded-full bg-white/70" />
            </motion.div>
            <motion.h1
              initial={{ letterSpacing: "0.2em" }}
              animate={{ letterSpacing: "0.05em" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-2xl font-bold tracking-wider"
            >
              Donald's Dev Quest
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/80 mt-2 text-sm"
            >
              Backend Developer • QA Tester
            </motion.p>

            {/* Loader removed per request; keeping intro minimal */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
