import Head from "next/head";
import { PageHeader, Image, Layout, Typography } from "antd";
import Footer from "./../../components/Footer";
import "./../../styles/globals.less";
import { gql } from "@apollo/client";
import {
  graphQLClient,
  sanitizeContent,
  formatDate,
} from "./../../models/utils";

const { Content } = Layout;
const { Title, Text } = Typography;

const PostPage = function ({ data }) {
  data = data.getBySlug[0];
  return (
    <div>
      <Head>
        <title>Gönderi</title>
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
          onBack={() => {
            window.location = "/";
          }}
        />
        <Content className={"post-card post"}>
          <Image src={"/img/dummy-image-1.jpg"} />
          <Title level={2}>{data.title}</Title>
          <div className={"date-label"}>
            <span></span>
            <Text>{formatDate(data.created_on)}</Text>
            <span></span>
          </div>
          <div
            className={"content"}
            dangerouslySetInnerHTML={{ __html: sanitizeContent(data.content) }}
          ></div>
        </Content>
        <Footer menu={false} />
      </Layout>
    </div>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const { data } = await graphQLClient.query({
    query: gql`
      query {
        posts {
          slug
        }
      }
    `,
  });

  return {
    paths: data.posts.map((item) => {
      return { params: { slug: item.slug } };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { data } = await graphQLClient.query({
    query: gql`
    query {
      getBySlug(slug:"${context.params.slug}") {
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
    revalidate: 30,
    props: { data },
  };
};
