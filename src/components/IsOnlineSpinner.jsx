import useIsOnline from "../hooks/useIsOnline";

export default function IsOnlineSpinner() {
  const isOnline = useIsOnline();
  return (
    <>
      {isOnline ? (
        <div className="online ">
          <span style={{ color: "green" }}>Online</span>
        </div>
      ) : (
        <div className="spinner-grow text-danger" role="status">
          {window.scrollTo(0, 0)}
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}
