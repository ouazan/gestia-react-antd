import { useState, useEffect } from 'react'
import { Form, Select } from "antd";
import update from '../update'

function InputBull() {

    const [taureaux, setTaureaux] = useState([])

    useEffect(() => {
        update('taureaux', taureaux, setTaureaux)
    }, [])

    // const handelTaureau = (e) => {
    //     const nom = e.target.value
    //     const taureau = taureaux.find(taureau => taureau.nom === nom).id
    //     setTaureau(taureau)
    // }
    return (
        <Form.Item name="taureau">
            <Select
                placeholder="Taureau"
                showSearch
                optionFilterProp="children"
                // onChange={(value) => getCategorie(value)}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {taureaux.map(taureau => {
                    return (
                        <Select.Option
                            key={taureau.id}
                            value={taureau.id}
                        >
                            {taureau.nom}
                        </Select.Option>
                    )
                })}
            </Select>

        </Form.Item>
        // <div className="form-group">
        //     <label for="taureau" className="form-label">Taureau</label>
        //     <div className="input-group mb-2">
        //         <input
        //             className="form-control"
        //             list="taureaux"
        //             id="producteur"
        //             onChange={(e) => handelTaureau(e)}
        //         />
        //         <datalist id="taureaux">
        //             {taureaux.map(taureau => {
        //                 return (
        //                     <option key={taureau.id} value={taureau.nom} />
        //                 )
        //             })}
        //         </datalist>
        //     </div>

        // </div>
    )
}

export default InputBull
