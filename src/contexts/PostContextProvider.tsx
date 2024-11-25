import React, { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPost } from '../services/api/jsonplaceholder/posts';

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

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

// Typage de children
export const PostContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [post, setPost] = useState<Post | null>(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      if (!Number.isInteger(Number(postId)) || Number(postId) <= 0) {
        navigate("/not-found", { replace: true });
        return;
      }

      try {
        const fetchedPost = await fetchPost(Number(postId));
        setPost(fetchedPost);
      } catch (error) {
        navigate("/not-found", { replace: true });
      }
    };

    loadPost();
  }, [postId, navigate]);

  return <PostContext.Provider value={{ post }}>{children}</PostContext.Provider>;
};