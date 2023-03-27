import React from 'react'
import styles from '@/assets/style/App.module.scss'
import { Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import dataTool from "@/components/RouterTable";
const { Content, Sider } = Layout;

import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()
  const changeContent: MenuProps['onClick'] = (e) => {
    const key: any = e.key
    navigate(dataTool[key].url)
  }
  return (
    <div id='app'>
      <Layout hasSider>
        <Sider className={styles.tools}  >
          <div className={styles.logo} />
          <Menu mode="inline" onClick={changeContent} defaultSelectedKeys={['0']} items={dataTool} />
        </Sider>
        <Layout className="site-layout">
          {/* <Header style={{ padding: 0, background: '#fff' }} /> */}
          <Content style={{ margin: '5px 16px 0', overflow: 'initial', height: "97.5vh" }}>
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>

    </div>
  )
}


export default App
