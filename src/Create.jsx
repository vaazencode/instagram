import { useState } from "react";
import "./CreateStyles.css";

const Create = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Post created! (Dummy functionality)");
  };

  return (
    <div className="create-container">
      <h2 className="create-header">➕ Create New Post</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>

      {image && (
        <div className="post-preview">
          <h4>Preview</h4>
          <img src={image} alt="Preview" className="preview-img" />
          <p className="preview-caption">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default Create;
