import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/router/index'
import App from "@/App";
import '@/assets/font/font.scss'
import '@/assets/style/index.scss' //全局css
import 'antd/dist/reset.css';
import '@/assets/style/antd.scss' //自定义antd样式
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Router />
  // </React.StrictMode>,
)
