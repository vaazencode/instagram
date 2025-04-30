import "./Notification.css";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      user: "arun_kumar",
      profilePic: "/profpic1_imresizer.jpg",
      action: "liked your post",
      time: "2h ago",
    },
    {
      id: 2,
      user: "divya_m",
      profilePic: "/profpic2_imresizer.jpg",
      action: "commented: Great shot!",
      time: "5h ago",
    },
    {
      id: 3,
      user: "raj_99",
      profilePic: "/profpic1_imresizer.jpg",
      action: "started following you",
      time: "1d ago",
    },
  ];

  return (
    <div className="notification-container">
      <h2 className="notification-header">🔔 Notifications</h2>
      {notifications.length === 0 ? (
        <p className="no-notification">You have no new notifications.</p>
      ) : (
        <div className="notification-list">
          {notifications.map((note) => (
            <div key={note.id} className="notification-card">
              <img
                src={note.profilePic}
                alt={note.user}
                className="notif-profile-pic"
              />
              <div className="notif-info">
                <p>
                  <strong>{note.user}</strong> {note.action}
                </p>
                <span className="notif-time">{note.time}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
