import { useState, useEffect } from "react";
import { Form, Select, Button, Input, Row, Col } from 'antd';
import update from '../update'

const InputProducteur = () => {

    const secteur = 9
    const [producteurs, setProducteurs] = useState([])
    const [filterProd, setFilterProd] = useState(true)
    const [isGroup, setIsGroup] = useState(false)

    // Filtrer la liste des producteurs sur zone/secteur
    const filtredProd = producteurs.filter(prod => {
        return prod.secteur === secteur
    })
    const prodList = filterProd ? filtredProd : producteurs

    // Determiner la categorie du producteur
    const getCategorie = (value) => {
        const catProducteur = producteurs.find(producteur => producteur.id === value).categorie
        setIsGroup(catProducteur === "PARTICULIER" ? false : true)
    }

    // Si la liste des producteurs n'est pas présente localement la telecharger
    useEffect(() => {
        update('producteurs', producteurs, setProducteurs)
    }, [])

    return (
        <>
            <Row gutter={16} justify="space-between">
                <Col className="gutter-row" span={18}>
                    <Form.Item name="producteur">
                        <Select
                            name="producteur"
                            placeholder="Producteur"
                            showSearch
                            optionFilterProp="children"
                            onChange={(value) => getCategorie(value)}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {prodList.map(producteur => {
                                return (
                                    <Select.Option
                                        key={producteur.id}
                                        value={producteur.id}
                                    >
                                        {`${producteur.id} - ${producteur.nom}`}
                                    </Select.Option>)
                            })}
                        </Select>
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={6} >
                    <Button
                        type="primary"
                        onClick={() => setFilterProd(!filterProd)}
                        style={{ width: "100%" }}
                    >
                        {filterProd ? "Secteur" : "Zone"}
                    </Button>
                </Col>

            </Row>

            {isGroup &&
                <Form.Item name='eleveur'>
                    <Input
                    type='text'
                        placeholder='Eleveur'
                    />
                </Form.Item>
            }
        </>



    )
}
export default InputProducteur