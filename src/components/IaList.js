import { useState, useEffect } from "react";
import axios from "axios";
import { Table} from 'antd';

export default function IaList() {
    const [iaListe, setIaListe] = useState([])
    const secteur = iaListe.map(ia => ia.secteur)
    const secteurFiltred = secteur.filter((item, index) => secteur.indexOf(item) === index)
    const columns = [
        {
            title: 'Zone',
            dataIndex: 'zone',
        },
        {
            title: 'Secteur',
            dataIndex: 'secteur',
            filters: secteurFiltred.map(secteur => { return ({ text: secteur, value: secteur }) }),
            onFilter: (value, record) => record.secteur.indexOf(value) === 0,
        },
        {
            title: 'Date',
            dataIndex: 'dateIa',
        },
        {
            title: 'Ref',
            dataIndex: 'refProd',
            sorter: (a, b) => a.refProd - b.refProd,
        },
        {
            title: 'Nom',
            dataIndex: 'nomProd',
        },
        {
            title: 'Bénificiaire',
            dataIndex: 'benificiaire',
        },
        {
            title: 'Nom taureau',
            dataIndex: 'taureau',
        },
        {
            title: 'Race taureau',
            dataIndex: 'raceTaureau',
        },
        {
            title: 'Cat taureau',
            dataIndex: 'catSemence',
        },
        {
            title: 'Id',
            dataIndex: 'numFemelle',
        },
        {
            title: 'Cat femelle',
            dataIndex: 'catFemelle',
        },
        {
            title: 'Race femelle',
            dataIndex: 'raceFemelle',
        },
    ];

    const data = iaListe.map((ia, index) => {
        return {
            key: index,
            zone: ia.zone,
            secteur: ia.secteur,
            dateIa: ia.dateIa,
            refProd: ia.refProd,
            nomProd: ia.nomProd,
            benificiaire: ia.benificiaire,
            taureau: ia.taureau,
            raceTaureau: ia.raceTaureau,
            catSemence: ia.catSemence,
            numFemelle: ia.numFemelle,
            catFemelle: ia.catFemelle,
            raceFemelle: ia.raceFemelle
        }
    })

    useEffect(() => {
        axios.get(`http://localhost:5000/gestia/inseminations`)
            .then(result => {
                const iaListe = result.data
                setIaListe(iaListe)
            })
    }, [])
    console.log(iaListe)
    return (
        <Table
            columns={columns}
            dataSource={data}
            scroll={{ y: 450, x: 'max-content', scrollToFirstRowOnChange: true }}
            size='small'
            bordered
            pagination={{ defaultPageSize: 20 }}
            title={() => 'LISTE IA'}
            expandable
        />
    )
}
