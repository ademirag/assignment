import { useState, useEffect } from "react";
import Head from "next/head";
import { Space, Menu, PageHeader, Image, Layout, Pagination } from "antd";
import PostList from "./../components/PostList";
import Footer from "./../components/Footer";
import "./../styles/globals.less";
import { gql } from "@apollo/client";
import { graphQLClient } from "./../models/utils";

const { Content } = Layout;

const POST_PER_PAGE = 6;

const Home = function ({ data, defaultOrder }) {
  const [postData, setPostData] = useState(data.posts);
  const [order, setOrder] = useState(defaultOrder);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    var skipAmount = (page - 1) * POST_PER_PAGE;
    const result = await graphQLClient.query({
      query: gql`
        query {
          posts(limit: ${POST_PER_PAGE}, start:${skipAmount}, sort:"created_on:${order}") {
            title
            content
            created_on
            slug
            feature_image {
              url
            }
          }
        }
      `,
    });
    setPostData(result.data.posts);
  }, [page, order]);

  return (
    <div>
      <Head>
        <title>MAX Blog</title>
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
          <Menu mode="horizontal" selectable={false}>
            <Menu.Item key="newst-first-header">
              <a
                className={order === "desc" ? "selected" : ""}
                onClick={() => {
                  setOrder("desc");
                }}
              >
                NEWEST FIRST
              </a>
            </Menu.Item>
            <span>|</span>
            <Menu.Item key="oldest-first-header">
              <a
                className={order === "asc" ? "selected" : ""}
                onClick={() => {
                  setOrder("asc");
                }}
              >
                OLDEST FIRST
              </a>
            </Menu.Item>
          </Menu>
          <PostList data={postData} />
          <Pagination
            defaultCurrent={1}
            defaultPageSize={POST_PER_PAGE}
            total={data.postCount}
            className={"pagination"}
            onChange={(page) => {
              setPage(page);
            }}
          />
        </Content>
        <Footer
          onOrderChange={(order) => {
            setOrder(order);
          }}
          order={order}
        />
      </Layout>
    </div>
  );
};

export default Home;

export const getStaticProps = async (context) => {
  const { data } = await graphQLClient.query({
    query: gql`
      query {
        postCount
        posts(limit: 6, sort: "created_on:desc") {
          title
          content
          created_on
          slug
          feature_image {
            url
          }
        }
      }
    `,
  });
  return {
    revalidate: 10,
    props: { data, defaultOrder: "desc" },
  };
};
