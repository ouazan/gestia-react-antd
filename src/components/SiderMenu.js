
import { Menu } from 'antd'
import { FormOutlined , UnorderedListOutlined , ArrowsAltOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default function SiderMenu() {

  const handleClick = e => {
    console.log('click ', e)
  }

  return (
    <Menu
          // onClick={this.handleClick}
          style={{ width: 256 }}
          mode="inline"
          theme={'dark'}
        >

          <SubMenu key="subEnregistrer" icon={<FormOutlined />} title="Enregistrer">
            <Menu.Item key="EnregistrerIa">Insémination</Menu.Item>

          </SubMenu>
          <SubMenu key="subConsulter" icon={<UnorderedListOutlined />} title="Consulter">
            <Menu.Item key="ConsulterIa">Insémination</Menu.Item>
          </SubMenu>

          <SubMenu key="subStock" icon={<ArrowsAltOutlined />} title="Stock">
            
          </SubMenu>

        </Menu>
  );
}
