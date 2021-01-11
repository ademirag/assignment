import "./../styles/globals.less";
import { Card, Typography, Image } from "antd";
import { formatDate } from "./../models/utils";

const { Title, Paragraph, Text, Link } = Typography;

export default function PostCard({ data }) {
  return (
    <Card className={"post-card"}>
      <Image src={"img/dummy-image-1.jpg"} />
      <Title level={2}>{data.title}</Title>
      <div className={"date-label"}>
        <span></span>
        <Text>{formatDate(data.created_on)}</Text>
        <span></span>
      </div>
      <Paragraph
        className={"content"}
        ellipsis={{
          rows: 4,
          expandable: false,
        }}
      >
        {data.content}
      </Paragraph>
      <Link href={"/post/" + data.slug}>Read More</Link>
    </Card>
  );
}
