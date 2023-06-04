import {useParams} from "react-router-dom";
import ProductDetail from "../../../components/product/detail/ProductDetail";

const ProductDetailPage = () => {
    const {productId} = useParams();
    return <ProductDetail productId={Number(productId)} />
}

export default ProductDetailPage;