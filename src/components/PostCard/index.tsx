type PostCardProps = {
  post: {
    title: string;
    body: string;
  };
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
