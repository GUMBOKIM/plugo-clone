import React from "react";
import * as S from "./ProductItem.style";
import {useNavigate} from "react-router-dom";

interface ProductItemProps {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    isStock: boolean;
    colorOptions?: string[];
}

const ProductItem: React.FC<ProductItemProps> = ({id, name, price, imgUrl, isStock, colorOptions}) => {
    const navigate = useNavigate();
    const handleClickItem = () => navigate(`/product/${id}`);

    return (
        <S.Container onClick={handleClickItem}>
            <S.ImageWrapper>
                <img width="100%" height="100%" src={imgUrl} alt={`상품-${id} 이미지`}/>
                <S.Stock stock={isStock}>{isStock ? "재고 있음" : "재고 없음"}</S.Stock>
            </S.ImageWrapper>
            <S.ColorOptions>
                {colorOptions?.map(color => <S.Color key={color} color={color}/>)}
            </S.ColorOptions>
            <S.Name>{name}</S.Name>
            <S.Price>{price}</S.Price>
        </S.Container>
    )
}

export default ProductItem;