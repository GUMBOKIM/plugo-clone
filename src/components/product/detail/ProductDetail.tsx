import React, {useState} from "react";
import useProductQuery from "../../../hook/query/useProductQuery";
import * as S from "./ProductDetail.style";
import ProductOption from "./ProductOption";
import CartAddButton from "../../cart/addbutton/CartAddButton";

interface ProductDetailProps {
    productId: number;
}

const ProductDetail: React.FC<ProductDetailProps> = ({productId}) => {
    const {useFetchProductDetail} = useProductQuery();

    const [selectedImg, setSelectedImg] = useState(0);
    const handleClickImageSelectItem = (index : number) => setSelectedImg(index);

    const {isLoading, data} = useFetchProductDetail(productId);

    if (isLoading) return <div>...Loading</div>
    if (!data) return <div>Unregistered Product</div>
    return (
        <S.Container>
            <S.LeftSection>
                <img width="100%" src={data.images[selectedImg]} alt={`상품-${productId}`} />
                <S.ImageSelect>
                    {data.images.map((imageUrl, index) => (
                        <S.ImageSelectItem key={imageUrl}>
                            <img width="100%"
                                 src={imageUrl}
                                 alt={`상품-${productId}-${index}`}
                                 onClick={() => handleClickImageSelectItem(index)}/>
                        </S.ImageSelectItem>
                    ))}
                </S.ImageSelect>
            </S.LeftSection>
            <S.RightSection>
                <S.Stock stock={data.isStock}>
                    {data.isStock ? "재고 있음" : "재고 없음"}
                </S.Stock>
                <S.Name>{data.name}</S.Name>
                <S.Price>{data.price}</S.Price>
                <S.Content>{data.desc}</S.Content>
                <CartAddButton productId={productId} size="LARGE"/>
                {data.options?.map(option => <ProductOption key={option.optionId} productId={productId} {...option}/>)}
            </S.RightSection>
        </S.Container>
    )
}

export default ProductDetail;