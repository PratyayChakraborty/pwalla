import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Flex, Text, Image, } from '@chakra-ui/react';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpeg"
import lo from "../assets/lo.jpg"

const { Header, Content, Footer, Sider } = Layout;
const MainLayout = () => {
    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider
                breakpoint="base"
                collapsedWidth="0"
                hight="1000px"
                onBreakpoint={(broken) => {
                    // console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    // console.log(collapsed, type);
                }}
                backgroundColor="skyblue"
                theme='blue'
            >
                {/* <div className="logo" >
                    <Image src={lo} width={"60px"} borderRadius={"10px"} padding="5px"></Image>
                </div>  */}
                <Menu
                    style={{
                        position: "sticky",
                        top: "0",
                        zIndex: "1"
                    }}
                    theme="dark"
                    mode="inline"
                    backgroundColor="skyblue"
                    defaultSelectedKeys={[' ']}
                    onClick={({ key }) => {
                        if (key === "signout") {

                        }
                        else {
                            navigate(key)
                        }
                    }}
                    items={[
                        {
                            key: 'Dashboard',
                            // icon: <UserOutlined />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'users',
                            // icon: <VideoCameraOutlined />,
                            label: 'Users',
                            // children: [{
                            //     key: 'users',
                            //     // icon: <VideoCameraOutlined />,
                            //     label: 'All Users'
                            // }
                            // ]
                        },
                        {
                            key: 'police',
                            // icon: <VideoCameraOutlined />,
                            label: 'Police',
                            // children: [{
                            //     key: 'users',
                            //     // icon: <VideoCameraOutlined />,
                            //     label: 'All Users'
                            // }
                            // ]
                        },
                        {
                            key: 'complains',
                            // icon: <VideoCameraOutlined />,
                            label: 'Complains',
                            // children: [{
                            //     key: 'AllSalesMan',
                            //     // icon: <VideoCameraOutlined />,
                            //     label: 'All SalesMan'
                            // },
                            // {
                            //     key: 'AddSalesMan',
                            //     // icon: <VideoCameraOutlined />,
                            //     label: 'Register SalesMan'
                            // }
                            // ]
                        },
                        {
                            key: 'emergency',
                            // icon: <VideoCameraOutlined />,
                            label: 'Emergency',
                            // children: [{
                            //     key: 'users',
                            //     // icon: <VideoCameraOutlined />,
                            //     label: 'All Users'
                            // }
                            // ]
                        },
                        {
                            key: 'messages',
                            // icon: <VideoCameraOutlined />,
                            label: 'Messages',
                            // children: [{
                            //     key: 'users',
                            //     // icon: <VideoCameraOutlined />,
                            //     label: 'All Users'
                            // }
                            // ]
                        },
                        {
                            key: 'rating',
                            // icon: <VideoCameraOutlined />,
                            label: 'Rating',
                            // children: [{
                            //     key: 'users',
                            //     // icon: <VideoCameraOutlined />,
                            //     label: 'All Users'
                            // }
                            // ]
                        },


                        {
                            key: 'update',
                            // icon: <VideoCameraOutlined />,
                            label: 'Update',
                            // children: [{
                            //     key: 'users',
                            //     // icon: <VideoCameraOutlined />,
                            //     label: 'All Users'
                            // }
                            // ]
                        },
                        {
                            key: 'logs',
                            // icon: <VideoCameraOutlined />,
                            label: 'Logs',
                            // children: [{
                            //     key: 'users',
                            //     // icon: <VideoCameraOutlined />,
                            //     label: 'All Users'
                            // }
                            // ]
                        },
                        {
                            key: '',
                            // icon: <VideoCameraOutlined />,
                            label: 'Log Out',

                        }
                    ]}
                />
            </Sider>
            <Layout style={{ position: "relative" }}>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        position: "sticky",
                        height: "60px",
                        top: 0,
                        zIndex: 99
                    }}
                >
                    <Flex pl={2} backgroundColor="rgb(0,21,41)" color="white" justifyContent="space-between" alignItems="center" height="60px">
                        <Text fontSize="xl" fontWeight="bold" p={"2px"}>
                            <Image src={lo} width={"60px"} borderRadius={"10px"} padding="5px"></Image>
                            {/* Control Panel */}
                        </Text>
                        {/* <Text fontSize="xl" fontWeight="bold" mr="50px"  >
                            <AiOutlineUser />
                        </Text> */}
                    </Flex>
                </Header>

                <Content
                    style={{
                        padding: '24px 16px',

                    }}
                >

                    <Outlet />

                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Police Walla ©2023 All rights reserved..!
                </Footer>
            </Layout>
        </Layout>
    );
};
export default MainLayout;