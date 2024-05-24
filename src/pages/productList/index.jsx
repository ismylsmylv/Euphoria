import Clothing from "../../components/Clothing/Clothing.jsx"
import ClothingFor from "../../components/ClothingFor/ClothingFor.jsx"
import Filter from "../../components/Filter/Filter.jsx"
import './style.scss'
function ProductsDetail() {
    return (
        <>
            <div className="container product-list">
                <Filter />
                <Clothing />
            </div>
            <div className="container">
                <ClothingFor />
            </div>
        </>
    )
}

export default ProductsDetail
