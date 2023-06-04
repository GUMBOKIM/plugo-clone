export interface Cart {
    cartItemId: number;
    productId: number;
    amount: number;
    option?: {
        optionId: number;
        itemId: number;
    }[]
}

let CartData: Cart[] = [];

export default CartData;