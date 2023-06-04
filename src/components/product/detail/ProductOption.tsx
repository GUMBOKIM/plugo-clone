import * as S from "./ProductOption.style"
import React from "react";
import CartAddButton from "../../cart/addbutton/CartAddButton";

interface ProductOptionProps {
    productId: number;
    optionId: number;
    optionName: string;
    items: {
        itemId: number;
        itemName: string;
        images: string[];
        stock: number;
        price: number;
    }[]
}

const ProductOption: React.FC<ProductOptionProps> = ({productId, optionId, optionName, items}) => {
    return (
        <S.Container>
            <S.OptionName>{optionName}</S.OptionName>
            <S.OptionList>
                {items.map(item => (
                    <S.OptionItem key={item.itemId}>
                        <S.OptionItemImg src={item.images[0]} alt={`옵션-${optionId}-${item.itemId}`}/>
                        <S.OptionContentWrapper>
                            <span>{item.itemName}</span>
                            <span>{item.price}</span>
                        </S.OptionContentWrapper>
                        <CartAddButton productId={productId} size="SMALL" selectedOption={{optionId, itemId: item.itemId}}/>
                    </S.OptionItem>
                ))}
            </S.OptionList>
        </S.Container>
    )
}

export default ProductOption;