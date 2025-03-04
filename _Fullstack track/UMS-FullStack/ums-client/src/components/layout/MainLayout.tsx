import { Layout, Menu } from "antd";
import { Outlet } from "react-router";
import { adminSidebarItems } from "../../routes/admin.routes";
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
      style={{paddingTop:'60px'}}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminSidebarItems}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0 }}>
          <div
            style={{
              color: "white",
              padding: "5px 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="">UMS System</h1>
          </div>
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
          >
           <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
