import { useState } from 'react'
import './App.less'
import { Layout } from 'antd';
import Sider from './components/Sider';
import HeaderApp from './components/Header';


function App() {
  const { Footer, Content } = Layout;
  const [visible, setVisible] = useState()
  return (
    <Layout
      style={{ minHeight: '100vh' }}
    >
      <HeaderApp setVisible={setVisible} />

      <Content>
        <Sider visible={visible} setVisible={setVisible} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
