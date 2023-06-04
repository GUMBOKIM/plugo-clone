import CartData, {Cart} from "./data/CartData";

class CartAPI {
    data = CartData;

    addCartItem(productInfo: Omit<Cart, 'cartItemId'>) {
        const newCartItemId = this.data[this.data.length - 1].cartItemId;
        this.data.push({
            cartItemId: newCartItemId,
            ...productInfo
        })
    }

    removeCartItem(cardItemId: number){
        this.data = this.data.filter(item => item.cartItemId !== cardItemId);
    }

    getCartItemList() {
        return this.data;
    }
}

const CartRepository = new CartAPI();

export default CartRepository;