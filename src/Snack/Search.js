
const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #212121",
    borderRadius: "10px",
    padding: "8px 10px"
}
const Search = () => {
    return (
        <div className="d-flex justify-content-center my-3">
            <input style={style} type="search" placeholder="Search.." />
        </div>
    )
}

export default Search