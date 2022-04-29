import React from 'react';
import { Button, CustomCard } from '@tsamantanis/react-glassmorphism';
import '@tsamantanis/react-glassmorphism/dist/index.css';
import '../../assets/circle.css';
import { Tabs, Radio, Space } from 'antd';

const { TabPane } = Tabs;

export default function Detail() {

     return (
          <div style={{ backgroundImage: 'url(https://picsum.photos/200/300)', minHeight: '100vh', }}>
               <CustomCard
                    style={{ paddingTop: 150, minHeight: '100vh' }}
                    effectColor="fff" // required
                    color="fff" // default color is white
                    blur={10} // default blur value is 10px
                    borderRadius={-10} // default border radius value is 10px
               >
                    <div className="grid grid-cols-12">
                         <div className="col-span-4 col-start-4">
                              <div className="grid-cols-2">
                                   <img src="https://picsum.photos/200/300" alt="" />
                                   <div >
                                        <p>Tên phim</p>
                                        <p>mô tả</p>
                                   </div>
                              </div>

                         </div>
                         <div className="col-span-4">
                              <div className="c100 p50 big">
                                   <span>50%</span>
                                   <div className="slice">
                                        <div className="bar" />
                                        <div className="fill" />
                                   </div>

                              </div>
                         </div>
                    </div>
                    <div className='m-10 container'>
                         <Tabs tabPosition={'right'}>
                              <TabPane tab="Tab 1" key="1">
                                   Content of Tab 1
                              </TabPane>
                              <TabPane tab="Tab 2" key="2">
                                   Content of Tab 2
                              </TabPane>
                              <TabPane tab="Tab 3" key="3">
                                   Content of Tab 3
                              </TabPane>
                         </Tabs>
                    </div>

               </CustomCard >

          </div >
     )
}

