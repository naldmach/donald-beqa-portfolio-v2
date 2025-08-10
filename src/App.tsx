import React from "react";
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
      <HomePage />
    </>
  );
}
