

import react, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../Products/Product'
import { useNavigate } from "react-router-dom";

function ProductListing() {
    const [prod, setProd] = useState([])
    const navigate = useNavigate();
    const BEARER_TOKEN = localStorage.getItem("token");
    useEffect(() => {
        if(BEARER_TOKEN!=""){
            getProducts();
            
        }
        else{
            navigate('./LoginSignUp')
        }
        async function getProducts() {
            debugger;
            const GetProductsurl = 'https://localhost:44371/api/Products/GetProductList'
            axios.get(GetProductsurl,{
                headers: {
                    'Authorization': `Bearer ${BEARER_TOKEN}`
                }
            }).then((result) => {
                setProd(result.data)
                console.log(result.data.length);
            })

        }
        
    }, [])

    return (
        <div>
            {prod && prod.map(product => <Product productID={product.productId} productName={product.productName}
            ProductPrice={product.productPrice} />)}
        </div>
    )
}
export default ProductListing;