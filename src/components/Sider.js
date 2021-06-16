// import {useState} from 'react'
import { Drawer } from 'antd';
import SiderMenu from './SiderMenu';

function Sider({ visible, setVisible }) {

    return (
        <>
            <Drawer
                title="Menu"
                placement={'left'}
                width={320}
                mask={false}
                closable={true}
                onClose={() => setVisible(false)}
                visible={visible}
                bodyStyle={{ background: '#0e1c81', color: 'white' }}
                headerStyle={{ height: 64 }}
            >
                <SiderMenu />
            </Drawer>
        </>
    );
}

export default Sider
