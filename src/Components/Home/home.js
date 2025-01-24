import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
 import  ProductListing  from '../Products/ProductListing';

const Home = () => {
    const [name, setName] = useState('');
    const [navigate, setNavigate] = useState(false);
    return <ProductListing />;
}
export default Home