import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import AdminBookings from "./AdminBookings";

const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onMenuItemClcked = (index) => {
    setActiveIndex(index);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo"
          style={{
            height: "32px",
            margin: "16px",
            background: "rgba(255, 255, 255, 0.3)",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={(index) => {
            onMenuItemClcked(index.key);
          }}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Users",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Bookings",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Vehicles",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleCollapsed,
              style: { fontSize: "18px", padding: "0 24px", cursor: "pointer" },
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#fff",
          }}
        >
          {activeIndex === "2" && <AdminBookings />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
