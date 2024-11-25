import { useEffect, useState } from "react";
import fetchPosts from "../../services/api/jsonplaceholder/posts";
import Post from "../../models/Post";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError("Failed to load posts");
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <h2>HomePage</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
