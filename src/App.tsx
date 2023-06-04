import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateProductPage from "./page/admin/CreateProductPage";
import CartPage from "./page/cart/CartPage";
import ProductListPage from "./page/product/list/ProductListPage";
import ProductDetailPage from "./page/product/detail/ProductDetailPage";
import Header from "./components/header/Header";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="admin/product/create" element={<CreateProductPage/>}/>
                    <Route path="product/list" element={<ProductListPage/>}/>
                    <Route path="product/:productId"  element={<ProductDetailPage/>}/>
                    <Route path="cart" element={<CartPage/>}/>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
