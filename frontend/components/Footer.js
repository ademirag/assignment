import "./../styles/globals.less";
import { Layout, Menu, Typography, Image, Row, Col } from "antd";

const { Title, Paragraph, Text, Link } = Typography;
const { Footer } = Layout;

export default function MainFooter({ menu, order, onOrderChange }) {
  console.log(order);
  return (
    <Footer>
      {menu !== false ? (
        <Menu mode="horizontal" selectable={false}>
          <Menu.Item key="newst-first-footer">
            <a
              className={order === "desc" ? "selected" : ""}
              onClick={() => {
                onOrderChange("desc");
              }}
            >
              NEWEST FIRST
            </a>
          </Menu.Item>
          <span>|</span>
          <Menu.Item key="oldest-first-footer">
            <a
              className={order === "asc" ? "selected" : ""}
              onClick={() => {
                onOrderChange("asc");
              }}
            >
              OLDEST FIRST
            </a>
          </Menu.Item>
        </Menu>
      ) : null}
      <Row>
        <Col span={12}>
          <Image src={"/img/logo-inverted.png"} width={91} />
        </Col>
        <Col span={12}>
          <Title level={3}>
            ABOUT ME<span className={"border"}></span>
          </Title>
          <Paragraph>
            Nulla consectetur arcu gravida dui tempor aliquet. Fusce congue
            tellus nisi, sit amet finibus turpis commodo ut. Sed aliquet neque
            vitae nisl sodales ornare. Suspendisse vitae consectetur ipsum.{" "}
          </Paragraph>
        </Col>
      </Row>
    </Footer>
  );
}
