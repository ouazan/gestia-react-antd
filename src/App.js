import './App.css'
import 'antd/dist/antd.css'
import { Layout } from 'antd';

import Sider from './components/Sider';
// import IaList from './components/IaList';
import AddIa from './components/AddIa';
import HeaderApp from './components/Header';


function App() {
  const { Footer, Content } = Layout;
  return (
    <Layout
      style={{ minHeight: '100vh' }}
    >
      <HeaderApp />

      <Sider />
      <Content>
        {/* <IaList/> */}
        <div className='form-container'>
          <AddIa />
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
