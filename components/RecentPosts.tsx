import { Post } from 'contentlayer/generated';
import BlogPost from '@/components/BlogPost';

interface RecentPostsProps {
  posts: Post[];
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <div className={`flex flex-col`}>
      {posts.slice(0, 5).map((post: Post) => (
        <BlogPost
          date={post.date}
          title={post.title}
          des={post.description}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </div>
  );
}
