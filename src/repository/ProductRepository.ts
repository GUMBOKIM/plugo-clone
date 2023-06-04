import ProductData, {Product} from "./data/ProductData";

class ProductAPI {
    data = ProductData;

    createProduct(product: Omit<Product, "productId">) {
        const newProductId = this.data[this.data.length - 1].productId + 1;
        this.data.push({
            productId: newProductId,
            ...product
        })
    }

    getProductList() {
        return this.data;
    }

    getProduct(productId: number) {
        const product = this.data.find(product => product.productId === productId);
        if (!product) throw new Error();
        return product;
    }
}

const ProductRepository = new ProductAPI();

export default ProductRepository;