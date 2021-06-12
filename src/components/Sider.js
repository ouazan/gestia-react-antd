// import {useState} from 'react'
import { Drawer} from 'antd';
import SiderMenu from './SiderMenu';

function Sider({visible,setVisible}) {
   
        return (
            <>
                <Drawer
                    title="Menu"
                    placement={'left'}
                    closable={true}
                    onClose={()=>setVisible(false)}
                    visible={visible}
                >
                    <SiderMenu/>
                </Drawer>
            </>
        );
    }

export default Sider
