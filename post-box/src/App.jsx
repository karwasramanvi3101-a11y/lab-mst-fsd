import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);

  const characterCount = text.length;
  const limitExceeded = characterCount > 100;
  const isEmpty = text.trim() === "";

  const handlePost = () => {
    setPosts([...posts, text]);
    setText("");
  };

  return (
    <div className="container">
      <div className="post-box">
        <h2>Create a Post</h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your post..."
        />

        <div className="counter">
          {characterCount} / 100
        </div>

        {limitExceeded && (
          <p className="error">Limit exceeded</p>
        )}

        <button
          onClick={handlePost}
          disabled={isEmpty || limitExceeded}
        >
          Post
        </button>

        {/* Display Posted Posts */}
        <div className="posted-section">
          <h3>Posted Posts</h3>

          {posts.length === 0 ? (
            <p className="no-posts">No posts yet.</p>
          ) : (
            posts.map((post, index) => (
              <div className="post" key={index}>
                {post}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;