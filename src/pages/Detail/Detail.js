import React, { useEffect } from 'react'
import { Button, CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import '../../assets/style/circle.css'
import { Tabs, Radio, Space } from 'antd';
import { useSelector } from 'react-redux';
const { TabPane } = Tabs;
export default function Detail(props) {


     const filmDetail = useSelector(state => state.quanLyPhimReducer.filmDetail);
     useEffect(() => {
          let { id } = props.computedMatch.params;
     }, [])

     return (

          <div style={{ backgroundImage: 'url(https://picsum.photos/1000)', minHeight: '100vh' }}>
               <CustomCard
                    style={{
                         minHeight: '100vh'
                    }}
                    effectColor="rgba(255,255,255,0.4)" // required
                    color="#fff" // default color is white
                    blur={20} // default blur value is 10px
                    borderRadius={-100} // default border radius value is 10px
               >
                    <div className="grid grid-cols-12 p-20">
                         <div className="col-span-4 col-start-4">
                              <div className="grid grid-cols-2">
                                   <img src="https://picsum.photos/200/350" alt="123" />
                                   <div className="">
                                        <p>tên phim</p>
                                        <p>Mô tả</p>
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
                    <div className="mt-20 container">
                         <Tabs tabPosition={'left'}>
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
               </CustomCard>
          </div >
     )
}
