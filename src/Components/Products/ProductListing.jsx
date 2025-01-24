

import react, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../Products/Product'

function ProductListing() {
    const [prod, setProd] = useState([])
    useEffect(() => {
        async function getProducts() {
            debugger;
            const GetProductsurl = 'https://localhost:44371/api/Products/GetProductList'
            axios.get(GetProductsurl).then((result) => {
                setProd(result.data)
                console.log(result.data.length);
            })

        }
        getProducts();
    }, [])

    return (
        <div>
            {prod && prod.map(product => <Product productID={product.productId} productName={product.productName}
            ProductPrice={product.productPrice} />)}
        </div>
    )
}
export default ProductListing;