
import Search from './Search'
import Card from './Card'
import {useState} from "react"
import {data} from './Data'

const Snack = () => {
    const [text,setText] = useState("");
    const keys= ["name","price","category"]
    const handleOnChange = (e) => {
        setText(e.target.value)
        console.log(text)
    }
    
    const search = (data) => {
        return data.filter(d=>
            keys.some(key=>d[key].toLowerCase().includes(text))
        )
    }
    return (
        <div className='d-flex flex-column align-items-center'>
            <p className="my-3 text-center fs-1">Snack Shop</p>
            <Search handleOnChange={handleOnChange} text={text}/>
            <Card data={data} search={search(data)}/>
        </div>
    )
}

export default Snack;