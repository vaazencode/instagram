import "./MessageStyles.css";

const Message = () => {
  const messages = [
    {
      id: 1,
      username: "arun_kumar",
      profilePic: "/profpic1_imresizer.jpg",
      lastMessage: "Hey, how are you?",
      time: "2h ago",
    },
    {
      id: 2,
      username: "divya_m",
      profilePic: "/profpic2_imresizer.jpg",
      lastMessage: "Let's catch up soon!",
      time: "1d ago",
    },
    {
      id: 3,
      username: "raj_99",
      profilePic: "/profpic1_imresizer.jpg",
      lastMessage: "Check your mail.",
      time: "3d ago",
    },
  ];

  return (
    <div className="message-container">
      <h2 className="message-header">📨 Direct Messages</h2>
      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message-card">
            <img src={msg.profilePic} alt={msg.username} className="msg-profile-pic" />
            <div className="msg-info">
              <h4>{msg.username}</h4>
              <p>{msg.lastMessage}</p>
            </div>
            <span className="msg-time">{msg.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;

