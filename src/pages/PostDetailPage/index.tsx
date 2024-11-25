import { usePostContext } from "../../contexts/PostContextProvider";
import PostCard from "../../components/PostCard";
import { Navigate } from "react-router-dom";

export default function PostDetailPage() {
  const { post } = usePostContext();

  if (!post) {
    return <Navigate to="/not-found" replace />;
  }
  
  return (
    <div>
      <h3><em>Détails du Post</em></h3>
      <PostCard post={post} />
    </div>
  );
}
