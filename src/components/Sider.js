import React from 'react'
import { Drawer, Button, Space } from 'antd';
import SiderMenu from './SiderMenu';

class Sider extends React.Component {
    state = { visible: false, placement: 'left' };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        const { placement, visible } = this.state;
        return (
            <>
                <Space>
                    <Button type="primary" onClick={this.showDrawer}>
                        Open
          </Button>
                </Space>
                <Drawer
                    title="Menu"
                    placement={placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                    key={placement}
                >
                    <SiderMenu/>

                </Drawer>
            </>
        );
    }
}
export default Sider
