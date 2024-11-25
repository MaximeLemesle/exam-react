import { usePostContext } from "../../contexts/PostContextProvider";

export default function PostPage() {
  const { post } = usePostContext();

  if (!post) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// export default function PostPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     navigate("detail", { replace: true }); // Redirection vers "detail"
//   }, [navigate]);

//   return <p>Chargement...</p>;
// }
