import { useState, useEffect } from "react";
import update from '../update'
import { Row, Col, Form, InputNumber, Radio, Select } from 'antd'


export default function InputFemelle() {
    const [races, setRaces] = useState([])

    useEffect(() => {
        update('races', races, setRaces)
    }, [])
    return (
        <>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item name="idFemelle">
                        <InputNumber placeholder='Id femelle' style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12} align="right">
                    <Form.Item name="catFemelle" >
                        <Radio.Group buttonStyle="solid" style={{ width: "100%" }}>
                            <Radio.Button value="VACHE" style={{ width: "50%", textAlign: "center" }}>VACHE</Radio.Button>
                            <Radio.Button value="GÉNISSE" style={{ width: "50%", textAlign: "center" }}>GÉNISSE</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item name="raceFemelle">
                        <Select placeholder='Race femelle' style={{ width: '100%' }}>
                            {races.map(race => {
                                return (
                                    <Select.Option
                                        key={race.id}
                                        value={race.id}
                                    >
                                        {race.nom}
                                    </Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="rangIa">
                        <InputNumber placeholder='Rang IA' style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>

        </>
    )
}