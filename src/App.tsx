import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import SplashScreen from "@/components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = React.useState<boolean>(true);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setShowSplash(false);
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <SplashScreen show={showSplash} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
