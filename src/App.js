import {useState} from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { Layout } from 'antd';

import Sider from './components/Sider';
// import IaList from './components/IaList';
// import AddIa from './components/addIa/Test';
import HeaderApp from './components/Header';
import AddIa from './components/addIa/AddIa';


function App() {
  const { Footer, Content } = Layout;
  const [visible, setVisible] = useState()
  return (
    <Layout
      style={{ minHeight: '100vh' }}
    >
      <HeaderApp setVisible={setVisible}/>

      <Sider visible={visible} setVisible={setVisible}/>
      <Content>
        {/* <IaList/> */}
        {/* <div className='form-container'> */}
          {/* <AddIa /> */}
        {/* </div> */}
        <AddIa/>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
