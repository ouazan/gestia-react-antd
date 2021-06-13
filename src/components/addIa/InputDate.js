import { Form, DatePicker } from 'antd';
import 'moment/locale/fr'
import local from 'antd/es/date-picker/locale/fr_FR'

const InputDate = ({form}) => {
    
    return (
        <>
            <Form.Item
                noStyle
                name="dateIa"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
            </Form.Item>
            <Form.Item>
                <DatePicker
                    format={'DD-MM-YYYY'}
                    locale={local}
                    style={{ width: "100%" }}
                    onChange={(date, dateString) => form.setFieldsValue({ dateIa: dateString })}
                />
            </Form.Item>
        </>
    );
};
export default InputDate

