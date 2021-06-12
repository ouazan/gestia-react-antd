import { MenuOutlined } from '@ant-design/icons';
import { Layout,Button } from 'antd';

export default function HeaderApp({ setVisible }) {
    const { Header } = Layout
    return (
        <Header
            style={{ color: 'white', backgroundColor: '#0e1c81 ' }}
        >
            <Button type="link">
                <MenuOutlined
                    onClick={() => setVisible(true)}
                    style={{ fontSize: 24 }}
                />
            </Button>

        </Header>
    )

}
