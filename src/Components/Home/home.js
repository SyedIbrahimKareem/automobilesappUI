import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ProductListCardView } from "./CardList/ProductListCardView";

const Home = () => {
    const [name, setName] = useState('');
    const [navigate, setNavigate] = useState(false);
    return <ProductListCardView />;
}
export default Home