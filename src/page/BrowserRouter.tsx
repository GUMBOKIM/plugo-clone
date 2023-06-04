import {createBrowserRouter} from "react-router-dom";
import CreateProductPage from "./admin/CreateProductPage";
import CartPage from "./cart/CartPage";
import ProductListPage from "./product/list/ProductListPage";
import ProductDetailPage from "./product/detail/ProductDetailPage";

const BrowserRouter = createBrowserRouter([
    {
        path: "admin/product/create",
        element: <CreateProductPage/>
    },
    {
        path: "cart",
        element: <CartPage/>
    },
    {
        path: "product/list",
        element: <ProductListPage/>
    },
    {
        path: "product/:id",
        element: <ProductDetailPage/>
    }
]);

export default BrowserRouter;