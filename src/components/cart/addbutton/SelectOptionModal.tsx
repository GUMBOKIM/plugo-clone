import React from "react";
import Modal from "../../../common/Modal";
import styled, {css} from "styled-components";

interface SelectOptionModalProps {
    options: {
        optionId: number;
        optionName: string;
        items: {
            itemId: number;
            itemName: string;
            images: string[];
            stock: number;
            price: number;
        }[];
    }[]
    setOption: (optionId: number, itemId: number) => void;
}

const SelectOptionModal: React.FC<SelectOptionModalProps> = ({options, setOption}) => {

    const handleClickOptionItem = (optionId: number, itemId: number, stock: number) => {
        if (stock > 0) {
            setOption(optionId, itemId);
        } else {
            alert("재고가 없습니다.")
        }
    }

    return (
        <Modal>
            {options.map(option =>
                <div key={option.optionId}>
                    <span>{option.optionName} 선택:</span>
                    <OptionList>
                        {option.items.map(item => (
                            <OptionListItem key={item.itemId}
                                            isAvailable={item.stock > 0}
                                            onClick={() => handleClickOptionItem(option.optionId, item.itemId, item.price)}>
                                <span>{item.itemName}</span>
                                <span>{item.price}</span>
                                <OptionItemImg src={item.images[0]} alt={`${item.itemName} 옵션`}/>
                            </OptionListItem>
                        ))}
                    </OptionList>
                </div>
            )}
        </Modal>
    )
}

const OptionList = styled.ul`
  all: unset;

  display: flex;
  flex-direction: column;
  gap: 10px;
`

const OptionListItem = styled.li<{ isAvailable: boolean }>`
  all: unset;

  border: gray 1px solid;

  ${({isAvailable}) => isAvailable ? css`

  ` : css`
    background-color: red
  `};
`

export const OptionItemImg = styled.img`
  width: 40px;
  height: 40px;
  margin-left: auto;
`


export default SelectOptionModal;