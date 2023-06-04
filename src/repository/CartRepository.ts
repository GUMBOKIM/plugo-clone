import CartData, {Cart} from "./data/CartData";

class CartAPI {
    data = CartData;

    async addCartItem(productInfo: Omit<Cart, 'cartItemId'>) {
        const newCartItemId = CartData[CartData.length - 1].cartItemId;
        CartData.push({
            cartItemId: newCartItemId,
            ...productInfo
        })
    }

    async removeCartItem(cardItemId: number){
        // @ts-ignore
        CartData = CartData.filter(item => item.cartItemId !== cardItemId);
    }

    async getCartItemList() {
        return CartData;
    }
}

const CartRepository = new CartAPI();

export default CartRepository;