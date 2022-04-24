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
} from '@ant-design/icons';
// import { _ } from 'history';
import _ from 'lodash';
import history from 'history';

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
     // if (localStorage.getItem(USER_LOGIN)) {
     //      alert('Bạn không có quyền truy cập trang này');
     //      return <Redirect to='/' />
     // }
     // if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
     //      alert('Bạn không có quyền truy cập trang này ');
     //      return <Redirect to='/' />
     // }
     // const operation = <Fragment>
     //      {!_.isEmpty(userLogin) ? <Fragment><button onClick={() => {
     //           history.push('/profile')
     //      }}> <div style={{ width: 50, height: 50, display: 'flex', justifyContent: 'center' }} className="text-2xl ml-5 rounded" {{
     //           localStorage.removeItem(USER_LOGIN);
     //           localStorage.removeItem(TOKEN);
     //           history.push('/home');
     //           window.location.reload();
     //      }} className="text-blue-800"></div> Đăng Xuất</button> </Fragment> : ""}
     // </Fragment>

     return <Route {...restProps} render={(propsRoute) => {
          // const { collapsed } = this.state;
          return <Fragment>
               <Layout style={{ minHeight: '100vh', }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                         <div className="logo" >
                              <img style={{ width: '42px', }} src="./Images/logo-02-01.png" alt="" />
                         </div>
                         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                              <Menu.Item key="1" icon={<UserOutlined />}>
                                   <NavLink to="/admin/user">User</NavLink>
                              </Menu.Item>

                              <SubMenu key={"sub1"} icon={<FileOutlined />} title="film">
                                   <Menu.Item key="2" icon={<FileOutlined />}>
                                        <NavLink to="/admin/films">Films</NavLink>
                                   </Menu.Item>
                                   <Menu.Item key="4" icon={<FileOutlined />}>
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
                              <Breadcrumb style={{ margin: '16px 0' }}>
                                   <Breadcrumb.Item>User</Breadcrumb.Item>
                                   <Breadcrumb.Item>Bill</Breadcrumb.Item>
                              </Breadcrumb>
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
