import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const posts = [
    {
      id: 1,
      username: "santhosh",
      profilePic: "/profpic1_imresizer.jpg",
      image: "/profpic1_imresizer.jpg",
      likes: 120,
      caption: "Beautiful day!",
      comments: ["Nice!", "Wow!"]
    },
    {
      id: 2,
      username: "kumar",
      profilePic: "/profpic2_imresizer.jpg",
      image: "/profpic2_imresizer.jpg",
      likes: 98,
      caption: "Sunset view",
      comments: ["Amazing!", "So pretty!"]
    },
  ];

  const users = [
    { id: 1, username: "ram", profilePic: "/profpic1_imresizer.jpg" },
    { id: 2, username: "arun", profilePic: "/profpic2_imresizer.jpg" },
    { id: 3, username: "mahesh", profilePic: "/profpic1_imresizer.jpg" },
    { id: 4, username: "bala", profilePic: "/profpic2_imresizer.jpg" },
  ];

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="home-container">
      <nav className="side-nav">
        <h2 className="logo">Instagram</h2>
        <ul>
          <li><Link to="/home">🏠 Home</Link></li>
          <li><Link to="/message">✉︎ Message</Link></li>
          <li><Link to="/create">➕ Create</Link></li>
          <li><Link to="/notification">❤️ Notifications</Link></li>
          <li><Link to="/profile">👤 Profile</Link></li>
          <li>More</li>
        </ul>
      </nav>

      <div className="main-content">
        {/* Header with Stories */}
        <header className="header">
          <h1 className="header-title">Instagram</h1>
          <div className="stories">
            {users.slice(0, 3).map((user) => (
              <div className="story" key={user.id}>
                <img src={user.profilePic} alt="story" className="story-pic" />
                <p className="story-name">{user.username}</p>
              </div>
            ))}
          </div>
        </header>

        <div className="feed">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-header">
                <img src={post.profilePic} alt="Profile" className="profile-pic" />
                <h3>{post.username}</h3>
                <button className="menu-btn" onClick={() => toggleMenu(post.id)}>⋯</button>

                {activeMenu === post.id && (
                  <div className="dropdown-menu">
                    <p>💾 Save</p>
                    <p>🚫 Report</p>
                    <p>👋 Unfollow</p>
                    <p>🔗 Copy Link</p>
                  </div>
                )}
              </div>

              <img src={post.image} alt="Post" className="post-image" />
              <div className="post-actions">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments.length}</span>
                <span>🔗</span>
              </div>
              <p className="caption"><strong>@{post.username}</strong> {post.caption}</p>
              <div className="comments">
                {post.comments.map((comment, index) => (
                  <p key={index} className="comment">💬 {comment}</p>
                ))}
              </div>
              <input type="text" placeholder="Add a comment..." className="comment-input" />
            </div>
          ))}
        </div>
      </div>

      <div className="user-suggestions">
        <h3>Suggested Users</h3>
        {users.map((user) => (
          <div key={user.id} className="suggested-user">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            <p>{user.username}</p>
            <button>Follow</button>
          </div>
        ))}
        <p>
          About Help Press API Jobs Privacy Terms Locations Language Meta Verified
        </p>
        <p>© 2025 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default Home;
