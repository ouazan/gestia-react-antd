import { Row, Col, Form, Radio, Switch } from 'antd'


export default function InputPayement() {

    return (
        <>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item name="acteSansPaillette" label="Acte sans paillette :">
                        <Switch checkedChildren="OUI" unCheckedChildren="NON" style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item 
                    name="modePayement"
                    // rules={[
                    //     {
                    //         required: true,
                    //         message: 'Choisir un mode de payement',
                    //     },
                    // ]}
                    >
                        <Radio.Group buttonStyle="solid" style={{ width: "100%" }}>
                            <Radio.Button value="CASH" style={{ width: "50%", textAlign: "center" }}>CASH</Radio.Button>
                            <Radio.Button value="FINANCEMENT" style={{ width: "50%", textAlign: "center" }}>FINANCEMENT</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}