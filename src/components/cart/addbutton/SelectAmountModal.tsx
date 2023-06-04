import Modal from "../../../common/Modal";
import React, {useState} from "react";
import styled, {css} from "styled-components";

interface SelectAmountModalProps {
    stock: number;
    setAmount: (amount: number) => void;
}

const SelectAmountModal: React.FC<SelectAmountModalProps> = ({stock, setAmount}) => {
    const [amountTemp, setAmountTemp] = useState(0);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmountTemp(Number(e.target.value));
    }

    const handleClickAmount = (amount: number) => {
        if (amount > 0) {
            if (amount > stock) {
                alert("재고보다 많습니다.")
            } else {
                setAmount(amount)
            }
        }
    }

    return (
        <Modal>
            <span>수량을 선택해주세요</span>
            <AmountList>
                <AmountListItem available={1 <= stock} onClick={() => handleClickAmount(1)}>1</AmountListItem>
                <AmountListItem available={2 <= stock} onClick={() => handleClickAmount(2)}>2</AmountListItem>
                <AmountListItem available={3 <= stock} onClick={() => handleClickAmount(3)}>3</AmountListItem>
                <AmountListItem available={4 <= stock} onClick={() => handleClickAmount(4)}>4</AmountListItem>
                <AmountListItem available={5 <= stock} onClick={() => handleClickAmount(5)}>5</AmountListItem>
                <AmountListItem available><input type="number" onChange={handleChangeInput}/>
                    <button onClick={() => handleClickAmount(amountTemp)}>추가</button>
                </AmountListItem>
            </AmountList>
        </Modal>
    )
}

const AmountList = styled.ul`
  all: unset;

  display: flex;
  flex-direction: column;
  gap: 10px;
`

const AmountListItem = styled.li<{ available: boolean }>`
  all: unset;

  border: gray 1px solid;

  ${({available}) => available ? css`

  ` : css`
    background-color: red
  `};
`


export default SelectAmountModal;