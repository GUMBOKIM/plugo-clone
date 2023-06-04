import useProductQuery from "../../../hook/query/useProductQuery";
import React, {useState} from "react";
import useCartQuery from "../../../hook/query/useCartQuery";
import * as S from "./CardAddButton.style";
import SelectAmountModal from "./SelectAmountModal";
import SelectOptionModal from "./SelectOptionModal";

interface CardAddButtonProps {
    productId: number;
    selectedOption?: {
        optionId: number;
        itemId: number;
    }
    size: "LARGE" | "SMALL"
}

const CartAddButton: React.FC<CardAddButtonProps> = ({productId, selectedOption, size}) => {
    const {useFetchProductDetail} = useProductQuery();
    const {data} = useFetchProductDetail(productId);
    const {addCartItem} = useCartQuery();
    const {mutate} = addCartItem;

    const [modalStatus, setModalStatus] = useState<"CLOSE" | "OPTION" | "AMOUNT">("CLOSE");
    const [tempSelectedOption, setTempSelectedOption] = useState<undefined | {
        optionId: number,
        itemId: number;
    }>(selectedOption);

    const handleClickAddButton = () => {
        // 옵션이 없거나 옵션이 선택 되있는 경우 => 수량 체크
        if (!data?.options && selectedOption) {
            setModalStatus("AMOUNT");
        } else {
            setModalStatus("OPTION");
        }
    }

    const setOption = (optionId: number, itemId: number) => {
        setTempSelectedOption({optionId, itemId});
        setModalStatus("AMOUNT");
    }

    const setAmount = (amount: number) => {
        mutate({
            productId,
            amount,
            option: tempSelectedOption
        }, {
            onSuccess: () => setModalStatus("CLOSE")
        })
    }

    const stock = data?.stock ?
        data?.stock :
        (data?.options?.find(option => option.optionId === tempSelectedOption?.optionId)?.items.find(item => item.itemId === tempSelectedOption?.itemId)?.stock);


    return (
        <>
            <S.Button size={size} onClick={handleClickAddButton}>추가</S.Button>
            {data && (
                <>
                    {modalStatus === "OPTION" && (
                        <SelectOptionModal options={data.options!} setOption={setOption}/>
                    )}
                    {modalStatus === "AMOUNT" && (
                        <SelectAmountModal stock={Number(stock)} setAmount={setAmount}/>
                    )}
                </>
            )}

        </>
    );
}

export default CartAddButton;