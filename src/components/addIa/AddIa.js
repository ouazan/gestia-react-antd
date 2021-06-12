import {useState} from 'react'
import { Form, Input, Button, InputNumber, Row, Col, Select, Radio, Switch } from 'antd';

const { Option } = Select

export default function AddIa() {
  const [values, setvalues] = useState({})
  return (
    <Row>
      <Col xs={0} sm={2} md={4} lg={6}></Col>
      <Col xs={24} sm={20} md={16} lg={12}>
        <div className='merse' style={{ padding: '16px' }}>
          <Form
          name="basic"
      
          onFinish={values=>console.log(values)}
          onFinishFailed={(errorInfo)=>console.log(errorInfo)}
          >
            <Form.Item
              name='producteur'
              value={'merde'}
            >
              <Select
                size={'large'}
                showSearch
                style={{ width: '80%' }}
                placeholder='Producteur'
                onChange={value=>setvalues({...values,producteur:value})}
                optionFilterProp="children"
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
              <Button type="primary" style={{ width: '20%' }}>Zone</Button>
            </Form.Item>

            {/* <Form.Item>
              <Input placeholder="Eleveur" />
            </Form.Item>
            <Form.Item>
              <Select
                showSearch
                placeholder='Taureau'
                onChange={''}
                optionFilterProp="children"
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <InputNumber placeholder='Id femelle' style={{ width: '50%' }} />

              <Radio.Group defaultValue="VACHE" buttonStyle="solid" style={{ width: '50%' }}>
                <Radio.Button value="VACHE">Vache</Radio.Button>
                <Radio.Button value="GÉNISSE">Génisse</Radio.Button>
              </Radio.Group>

              <Select placeholder='Race femelle' style={{ width: '50%' }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>

              <InputNumber placeholder='Rang IA' style={{ width: '50%' }} />
            </Form.Item>
            <Form.Item label="Acte sans paillette">
              <Switch checkedChildren="OUI" unCheckedChildren="NON" unChecked />
            </Form.Item>
            <Form.Item label='Mode de payement'>
              <Radio.Group buttonStyle="solid" >
                <Radio.Button value="FINANCEMENT">FINANCEMENT</Radio.Button>
                <Radio.Button value="CASH">CASH</Radio.Button>
              </Radio.Group>
            </Form.Item> */}
            <Form.Item>
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
      <Col xs={0} sm={2} md={4} lg={6}></Col>
    </Row>
  );

}