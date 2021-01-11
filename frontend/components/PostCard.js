import "./../styles/globals.less";
import { Card, Typography, Image } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

export default function PostCard({ articleItem }) {
  return (
    <Card className={"post-card"}>
      <Image src={"img/dummy-image-1.jpg"} />
      <Title level={2}>Fight Between Chiks And Cats</Title>
      <div className={"date-label"}>
        <span></span>
        <Text>May 10, 2016</Text>
        <span></span>
      </div>
      <Paragraph className={"content"}>
        We finally got a piece of the pie. Knight Rider: A shadowy flight into
        the dangerous world of whose is does not exist. Come and dance on our
        floor. Take a step that is new. We've loveable boys space that needs the
        your face threes company best . . .
      </Paragraph>
      <Link>Read More</Link>
    </Card>
  );
}
