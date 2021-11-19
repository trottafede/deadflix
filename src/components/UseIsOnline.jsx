import { useEffect, useState } from "react";

export default function UseIsOnline() {
  const [condition, setCondition] = useState(navigator.onLine ? true : false);

  useEffect(() => {
    window.addEventListener("load", function () {
      function updateOnlineStatus(event) {
        setCondition(navigator.onLine ? true : false);
      }

      window.addEventListener("online", updateOnlineStatus);
      window.addEventListener("offline", updateOnlineStatus);
    });
  }, [condition]);

  return (
    <>
      {condition ? (
        <div className="online ">
          <span style={{ color: "green" }}>Online</span>
        </div>
      ) : (
        <div class="spinner-grow text-danger" role="status">
          {window.scrollTo(0, 0)}
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}
