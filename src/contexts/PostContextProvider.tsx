import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../models/Post";
import { fetchPost } from "../services/api/jsonplaceholder/posts";

type PostContextType = {
  post: Post | null;
};

const PostContext = createContext<PostContextType | undefined>(undefined);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostContextProvider");
  }
  return context;
};

export const PostContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    const loadPost = async () => {
      const id = Number(postId);

      // Validation de l'ID
      if (!Number.isInteger(id) || id <= 0) {
        navigate("/not-found", { replace: true });
        return;
      }

      try {
        const fetchedPost = await fetchPost(id);
        setPost(fetchedPost);
      } catch (error) {
        navigate("/not-found", { replace: true });
      }
    };

    loadPost();
  }, [postId, navigate]);

  return (
    <PostContext.Provider value={{ post }}>{children}</PostContext.Provider>
  );
};