import React, { Fragment, useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
import { TOKEN, USER_LOGIN } from '../../util/setting/setting';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
     DesktopOutlined,
     PieChartOutlined,
     FileOutlined,
     TeamOutlined,
     UserOutlined,
     LogoutOutlined,
} from '@ant-design/icons';
// import { _ } from 'history';
import _ from 'lodash';
import { history } from '../../App';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// function getItem(label, key, icon, children) {
//      return {
//           key,
//           icon,
//           children,
//           label,
//      };
// }

// const items = [
//      getItem('Option 1', '1', <PieChartOutlined />),
//      getItem('Option 2', '2', <DesktopOutlined />),
//      getItem('User', 'sub1', <UserOutlined />, [
//           getItem('Tom', '3'),
//           getItem('Bill', '4'),
//           getItem('Alex', '5'),
//      ]),
//      getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//      getItem('Files', '9', <FileOutlined />),
// ];
export default function AdminTemplate(props) {


     const { Component, ...restProps } = props;
     const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
     const [collapsed, setCollapsed] = useState(false);

     const onCollapse = (collapsed) => {
          // console.log(collapsed);
          setCollapsed(collapsed);
     };
     useEffect(() => {
          window.scrollTo(0, 0)
     })

     const infoUser = JSON.parse(localStorage.getItem(USER_LOGIN))
     // console.log(infoUser);
     if (infoUser === null) {
          return <Redirect to='/login' />
     }
     if (infoUser.maLoaiNguoiDung === 'KhachHang') {
          alert('Bạn không có quyền truy cập trang này')
          return <Redirect to='/home' />
     }
     return <Route {...restProps} render={(propsRoute) => {
          // const { collapsed } = this.state;
          return <Fragment>

               <Layout style={{ minHeight: '100vh', }}>

                    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>

                         <img className="logo" style={{ width: '42px', }} src="./Images/logo-02-01.png" alt="" />

                         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                              <SubMenu key={"sub1"} icon={<UserOutlined />} title="User">
                                   <Menu.Item key="19" icon={<UserOutlined />}>
                                        <NavLink to="/admin/user">User</NavLink>
                                   </Menu.Item>
                                   <Menu.Item key="20" icon={<UserOutlined />}>
                                        <NavLink to="/admin/user/add">Add User</NavLink>
                                   </Menu.Item>
                              </SubMenu>

                              <SubMenu key={"sub2"} icon={<FileOutlined />} title="Film">
                                   <Menu.Item key="21" icon={<FileOutlined />}>
                                        <NavLink to="/admin/films">Films</NavLink>
                                   </Menu.Item>
                                   <Menu.Item key="22" icon={<FileOutlined />}>
                                        <NavLink to="/admin/films/addnew">Add New</NavLink>
                                   </Menu.Item>
                              </SubMenu>

                              <Menu.Item key="3" icon={<DesktopOutlined />}>
                                   <NavLink to="/admin/showtime">Showtime</NavLink>
                              </Menu.Item>

                         </Menu>
                    </Sider>
                    <Layout className="site-layout">
                         <Header
                              className="site-layout-background"
                              style={{
                                   padding: 0,
                              }}
                         />
                         <Content style={{ margin: '0 16px' }}>
                              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                                   <Breadcrumb.Item>User</Breadcrumb.Item>
                                   <Breadcrumb.Item>Bill</Breadcrumb.Item>
                              </Breadcrumb> */}
                              <div
                                   className="site-layout-background" style={{
                                        padding: 24,
                                        minHeight: 360,
                                   }}>
                                   <Component {...restProps} />
                              </div>
                         </Content>
                         <Footer
                              style={{
                                   textAlign: 'center',
                              }}
                         >
                              Ant Design ©2018 Created by Ant UED
                         </Footer>
                    </Layout>
               </Layout>
          </Fragment>
     }} >

     </Route>
}
