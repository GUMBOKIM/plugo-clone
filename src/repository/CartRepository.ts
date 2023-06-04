import CartData, {Cart} from "./data/CartData";
import {Product} from "./data/ProductData";
import ProductRepository from "./ProductRepository";

interface CartProduct extends Cart {
    product: Product;
}

class CartAPI {

    async addCartItem(productInfo: Omit<Cart, 'cartItemId'>) {
        const newCartItemId = CartData[CartData.length - 1]?.cartItemId ?? 1;
        CartData.push({
            cartItemId: newCartItemId,
            ...productInfo
        })
    }

    async removeCartItem(cardItemId: number) {
        // @ts-ignore
        CartData = CartData.filter(item => item.cartItemId !== cardItemId);
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