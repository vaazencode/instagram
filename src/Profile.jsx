import "./ProfileStyles.css";

const Profile = () => {
  const posts = [
    "/profpic1_imresizer.jpg",
    "/profpic2_imresizer.jpg",
    "/profpic1_imresizer.jpg",
    "/profpic2_imresizer.jpg",
    "/profpic1_imresizer.jpg",
    "/profpic2_imresizer.jpg",
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="/profpic1_imresizer.jpg" alt="Profile" className="profile-avatar" />
        <div className="profile-info">
          <h2>Ram</h2>
          <button>Edit Profile</button>
          <div className="profile-stats">
            <span><strong>12</strong> posts</span>
            <span><strong>250</strong> followers</span>
            <span><strong>180</strong> following</span>
          </div>
          <p className="profile-bio">ECE Student | Developer | 📸 Travel & Tech</p>
        </div>
      </div>

      <div className="profile-posts">
        {posts.map((post, index) => (
          <img key={index} src={post} alt="Post" className="grid-post" />
        ))}
      </div>
    </div>
  );
};

export default Profile;
