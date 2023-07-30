import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { Button, Dropdown } from "antd";
import { FiMonitor } from "react-icons/fi";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const { Content, Footer, Header } = Layout;

const items = [
  {
    key: "1",
    label: <Link href="/parts/processor">CPU / Processor</Link>,
  },
  {
    key: "2",
    label: <Link href="/parts/motherboard">Motherboard</Link>,
  },
  {
    key: "3",
    label: <Link href="/parts/ram">RAM</Link>,
  },
  {
    key: "4",
    label: <Link href="/parts/powerSupply">Power Supply Unit</Link>,
  },
  {
    key: "5",
    label: <Link href="/parts/storage">Storage Device</Link>,
  },
  {
    key: "6",
    label: <Link href="/parts/monitor">Monitor</Link>,
  },
  {
    key: "7",
    label: <Link href="/parts">Others</Link>,
  },
];

const RootLayout = ({ children }) => {
  const { data: session } = useSession();

  const [size, setSize] = useState("large");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div />
        <Menu theme="dark" mode="vertical">
          <Link href="/">
            <items
              style={{
                margin: "0px 25px",
                color: "white",
              }}
            >
              Home
            </items>
          </Link>
          {session?.user ? (
            <items>
              <Button onClick={() => signOut()} type="primary" danger>
                Logout
              </Button>
            </items>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/login"
            >
              <items>Login</items>
            </Link>
          )}
          <Dropdown
            style={{
              margin: "0px 25px",
            }}
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button
              style={{
                margin: "0px 25px",
              }}
            >
              parts
            </Button>
          </Dropdown>
          <Link href="/pcBuilder">
            <Button type="dashed" size={size}>
              pc builder
            </Button>
          </Link>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        pc builder ©2023 Created by jasim
      </Footer>
    </Layout>
  );
};

export default RootLayout;
