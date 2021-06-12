import {
    Row,
    Col,
    Form,
    Input,
    Button,
    DatePicker,
    Select
    // InputNumber,
    // Switch,
} from 'antd'
import moment from 'moment'
import 'moment/dist/locale/fr'
import local from 'antd/es/date-picker/locale/fr_FR'
import InputProducteur from './InputProducteur'

// const {Item}=Form


const FormEx = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row>
            <Col xs={0} sm={2} md={4} lg={7}></Col>
            <Col xs={24} sm={20} md={16} lg={10}>
                <div className='merse' style={{ padding: '16px' }}>
                    <Form
                        name="addIa"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item name='dateIa'>
                            <DatePicker format={'DD/MM/YYYY'} locale={local} style={{ width: "100%" }}/>
                        </Form.Item>

                        <InputProducteur />
                       

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

export default FormEx
