import { MenuOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

export default function HeaderApp() {
    const { Header } = Layout
    return (
        <Header
            style={{ color: 'white', backgroundColor: '#0e1c81 ' }}
        >
            <MenuOutlined
                style={{ fontSize: 24 }}
            />
        </Header>
    )

}
