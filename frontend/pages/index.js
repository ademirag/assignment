import Head from "next/head";
import { Space, Menu, PageHeader, Image, Layout, Pagination } from "antd";
import PostCard from "./../components/PostCard";
import Footer from "./../components/Footer";
import "./../styles/globals.less";

const { Content } = Layout;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="main-layout">
        <PageHeader
          className={"header"}
          title={
            <a className={"logo"}>
              <Image src={"/img/logo.png"} width={150} />
            </a>
          }
        />
        <Content>
          <Menu mode="horizontal">
            <Menu.Item key="newst-first-header">
              <a
                className={"selected"}
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                NEWEST FIRST
              </a>
            </Menu.Item>
            <span>|</span>
            <Menu.Item key="oldest-first-header">
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                OLDEST FIRST
              </a>
            </Menu.Item>
          </Menu>
          <Space className={"post-card-container"} size={2} wrap>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </Space>
          <Pagination defaultCurrent={1} total={50} className={"pagination"} />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}
