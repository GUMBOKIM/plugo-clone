import useProductQuery from "../../../hook/query/useProductQuery";
import * as S from "./ProductList.style";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const {useFetchProductList} = useProductQuery();
    const {isLoading, data} = useFetchProductList();

    if (isLoading) <div>...Loading</div>

    console.log(data);

    return <S.Container>
        {data?.map(item => (
            <ProductItem key={item.productId}
                         id={item.productId}
                         name={item.name}
                         price={item.price}
                         imgUrl={item.images[0]}
                         isStock={item.isStock}
                         colorOptions={item.colorOption}
            />
        ))}
    </S.Container>
}

export default ProductList;