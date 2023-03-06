
import Search from './Search'
import Card from './Card'

const Snack = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <p className="my-3 text-center fs-1">Snack Shop</p>
            <Search/>
            <Card />
        </div>
    )
}

export default Snack;