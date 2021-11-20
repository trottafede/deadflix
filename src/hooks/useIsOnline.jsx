import { useEffect, useState } from "react";

export default function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", handleConnection);
    window.addEventListener("offline", handleConnection);
    return () => {
      window.removeEventListener("online", handleConnection);
      window.removeEventListener("offline", handleConnection);
    };
  }, []);

  function handleConnection() {
    setIsOnline(window.navigator.onLine);
  }
  return isOnline;
}
