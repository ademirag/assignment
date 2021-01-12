import { Space } from "antd";
import PostCard from "./PostCard";
import { useMediaQuery } from "react-responsive";

export default function PostList({ data }) {
  const isSmall = useMediaQuery({ query: "(max-width: 850px)" });
  let posts = [];
  data.map((post, index) => {
    let postItem = <PostCard key={"post" + index} data={post} />;
    posts.push(postItem);
  });
  return (
    <Space className={"post-card-container"} size={2} wrap>
      {posts}
    </Space>
  );
}
