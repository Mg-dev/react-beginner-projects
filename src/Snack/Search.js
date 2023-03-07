import {useState} from 'react'
const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #21212160",
    borderRadius: "10px",
    padding: "8px 10px"
}
const Search = ({handleOnChange,text}) => {
    
    return (
        <div className="d-flex justify-content-center my-3">
            <input value={text} style={style} type="text" placeholder="Search.." onChange={handleOnChange}/>
        </div>
    )
}

export default Search