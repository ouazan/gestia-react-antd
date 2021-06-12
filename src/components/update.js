import axios from 'axios'

export default function update(key, tab, setState) {
    if (localStorage.getItem(key))
        setState(JSON.parse(localStorage.getItem(key)))
    else {
        axios.get(`http://localhost:5000/gestia/${key}`)
            .then(result => {
                const tab = result.data
                setState(tab)
                localStorage.setItem(key, JSON.stringify(tab))
            })
            .catch(err => alert(err.message))
    }
} 