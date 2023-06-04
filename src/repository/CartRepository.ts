import CartData, {Cart} from "./data/CartData";
import {Product} from "./data/ProductData";
import ProductRepository from "./ProductRepository";

interface CartProduct extends Cart {
    product: Product;
}

class CartAPI {

    async addCartItem(productInfo: Omit<Cart, 'cartItemId'>) {
        const newCartItemId = CartData.length > 0 ? CartData[CartData.length - 1].cartItemId + 1 : 1;
        CartData.push({
            cartItemId: newCartItemId,
            ...productInfo
        })
    }

    async removeCartItem(cardItemId: number) {
        const filterData =  CartData.filter(item => item.cartItemId !== cardItemId);
        while(CartData.length !== 0) {
            CartData.pop();
        }

        for (let i = 0; i < filterData.length; i++) {
            CartData.push(filterData[i]);
        }

    }

    async getCartItemList(): Promise<CartProduct[]> {
        const productData = await ProductRepository.getProductList();
        return CartData.map(cartItem => ({
            ...cartItem,
            product: productData.find(product => product.productId === cartItem.productId)!
        }));
    }
}

const CartRepository = new CartAPI();

export default CartRepository;