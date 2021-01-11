import Head from "next/head";
import { PageHeader, Image, Layout, Typography } from "antd";
import Footer from "./../../components/Footer";
import "./../../styles/globals.less";

const { Content } = Layout;
const { Title, Text } = Typography;

export default function Home() {
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
          onBack={() => null}
        />
        <Content className={"post-card post"}>
          <Image src={"/img/dummy-image-1.jpg"} />
          <Title level={2}>Fight Between Chiks And Cats</Title>
          <div className={"date-label"}>
            <span></span>
            <Text>May 10, 2016</Text>
            <span></span>
          </div>
          <div className={"content"}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              viverra odio ac eleifend feugiat. Nulla eget cursus nulla. Etiam
              et placerat risus, eget finibus sapien. Nulla facilisi. Nam sed
              tortor vitae leo mollis placerat. Curabitur enim arcu, suscipit
              vel tortor eget, congue placerat neque. Praesent efficitur lacus
              tincidunt, pulvinar magna non, facilisis leo. Curabitur auctor
              turpis ac neque dapibus, et hendrerit urna dictum. Praesent
              ultrices gravida dolor, vitae facilisis diam dapibus vitae. Donec
              auctor sapien vitae tellus varius imperdiet. Sed lobortis turpis
              vel massa pretium, non pellentesque sem viverra. Fusce scelerisque
              velit nisi, eu molestie purus euismod sollicitudin. Morbi ut
              vehicula est, eu pharetra sapien. Vivamus eget ante sapien.
            </p>
            <p>
              Curabitur hendrerit metus id tincidunt porta. Nulla sagittis neque
              tortor, non egestas urna tristique ac. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Aliquam non odio ac ex accumsan sagittis. Nunc
              fringilla, nibh at feugiat scelerisque, ipsum nibh dictum diam, id
              eleifend ligula nibh eget est. Maecenas feugiat mi quis lorem
              dapibus, sit amet porta mi eleifend. Fusce lorem dolor, consequat
              eu erat eget, consectetur efficitur elit. Vivamus id odio nibh.
              Mauris hendrerit at tellus a commodo.
            </p>
            <p>
              Suspendisse ac ligula dictum velit iaculis sodales. Etiam eget
              nibh id libero fermentum ullamcorper non sit amet augue. Mauris
              eleifend tristique purus eget sollicitudin. Fusce ac lorem a nisi
              consequat tempus in id turpis. Morbi nec laoreet diam. Aenean
              pulvinar eleifend congue. Vestibulum vitae lobortis arcu. Proin ut
              ipsum non orci aliquam sollicitudin ut vel lacus. Nullam egestas,
              felis nec semper pharetra, augue dui semper massa, ut vehicula sem
              ante sed ipsum. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Duis pulvinar neque id
              ante pellentesque, sed eleifend tellus varius. Ut in leo purus.
              Nulla euismod porta pulvinar. Sed nec nunc tellus. Nunc eget magna
              vel urna pellentesque varius quis eu lectus.
            </p>
          </div>
        </Content>
        <Footer menu={false} />
      </Layout>
    </div>
  );
}
