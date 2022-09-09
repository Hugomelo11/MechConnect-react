import { Layout } from "antd";
import { Space } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import "../styles/Footer.css";
const {Footer } = Layout
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
export default function FooterSec() {
  return (
    <>
      <Footer className="footer">
      <Space>
    <IconFont type="icon-github" />
    <IconFont type="icon-linkedn" />
    <IconFont type="icon-twitter" />
  </Space>
        <img
          src="MechConnectLogo.png"
          alt="MechConnect logo"
          className="footer-img"
        />
      MechConnect ©2022 Created by H.M.S 
      </Footer>
    </>
  );
}
