import useCartQuery from "../../../hook/query/useCartQuery";

const CartItemList = () => {
    const {useFetchCartItems, removeCartItem} = useCartQuery();
    const {data} = useFetchCartItems();
    const {mutate} = removeCartItem;

    const handleClickRemoveButton = (cardItemId: number) => {
        mutate(cardItemId);
    }

    return <div>
        <ul>
            {data?.map(cartItem => {
                return (
                    <li key={cartItem.cartItemId}>
                        <span>{cartItem.product.name}</span>
                        <span>{cartItem.amount}</span>
                        <button onClick={() => handleClickRemoveButton(cartItem.cartItemId)}>삭제</button>
                    </li>
                )
            })}
        </ul>
    </div>
}

export default CartItemList;