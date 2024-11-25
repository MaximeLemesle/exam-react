import { postsUrl } from "./index";
import Post from "../../../models/Post";

export default async function fetchPosts() {
  const response = await fetch(postsUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export async function fetchPost(id: number): Promise<Post> {
  const response = await fetch(`${postsUrl}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch the post");
  }
  return response.json();
}
