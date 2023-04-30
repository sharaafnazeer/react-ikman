import {createBrowserRouter, Outlet} from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import NotFound from "../Pages/NotFound";
import Product from "../Pages/Products/Product";

const Router = () => {

    const routes = [
        {
            path: "/",
            element: <Home/>,
            errorElement: <NotFound/>
        },
        {
            path: "/categories",
            element: <Products/>,
            children: [
                {
                    path: "test",
                    element: <div>Test Page</div>,
                },
                {
                    path: ":name",
                    element: <Product/>,
                },
            ]
        },
        {
            path: "/all-adds",
            element: <Products/>,
        },
    ];
    return createBrowserRouter(routes);
}

export default Router;