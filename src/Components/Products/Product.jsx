import Button from 'react-bootstrap/Button';
import lenovoimg from '../Products/Lenovo laptop image.webp'
import '../Products/Product.css'
function Product({ productID, productName, ProductPrice }) {
    return (
        <div class="container px-2">
            <div class="row gx-5">
                <div class="col">
                    <img src={lenovoimg} alt="prodImage" width={400} height={300} />
                </div>
                <div class="col">
                    <h1> {productName}</h1>
                    <h2> Rs.{ProductPrice}.00</h2>
                    <Button type="button" class="btn btnCart">Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}
export default Product;