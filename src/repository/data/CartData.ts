export interface Cart {
    cartItemId: number;
    productId: number;
    amount: number;
    option?: {
        optionId: number;
        itemId: number;
    }[]
}

const CartData: Cart[] = [];

export default CartData;