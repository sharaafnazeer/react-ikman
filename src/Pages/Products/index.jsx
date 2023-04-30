import {Navigate, Outlet, useLocation, useParams, useSearchParams} from "react-router-dom";
import {useState} from "react";

const Products = () => {
    const location = useLocation();
    const params = useParams(); // getting path parameters
    const [searchParams] = useSearchParams(); // getting query parameters

    const [categories, setCategories] = useState([]);

    if (location.pathname === '/categories') {
        return <Navigate to={categories[0].key}/>
    }

    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}
export default Products;