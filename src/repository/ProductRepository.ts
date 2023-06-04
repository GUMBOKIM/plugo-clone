import ProductData, {Product} from "./data/ProductData";

class ProductAPI {
    data = ProductData;

    async createProduct(product: Omit<Product, "productId">) {
        const newProductId = this.data[this.data.length - 1].productId + 1;
        this.data.push({
            productId: newProductId,
            ...product
        })
    }

    async getProductList() {
        return this.data;
    }

    async getProduct(productId: number) {
        const product = this.data.find(product => product.productId === productId);
        if (!product) throw new Error();
        return product;
    }
}

const ProductRepository = new ProductAPI();

export default ProductRepository;