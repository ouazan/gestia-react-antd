import {
    Row,
    Col,
    Form,
    Button
} from 'antd'

import InputProducteur from './InputProducteur'
import InputBull from './InputBull'
import InputFemelle from './InputFemelle'
import InputPayement from './InputPayement'
import InputDate from './InputDate'

const AddIa = () => {

    const [form] = Form.useForm()
    const onFinish = (values) => {
        console.log('Success:', values)
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <Row>
            <Col xs={0} sm={2} md={4} lg={7}></Col>
            <Col xs={24} sm={20} md={16} lg={10}>
                <div style={{ padding: '16px' }}>
                    <Form
                        form={form}
                        name="addIa"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                       
                        <InputDate form={form}/>
                        <InputProducteur />
                        <InputBull />
                        <InputFemelle />
                        <InputPayement />

                        <Form.Item >
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Enregistrer
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Col>
            <Col xs={0} sm={2} md={4} lg={7}></Col>
        </Row>
    );
};

export default AddIa