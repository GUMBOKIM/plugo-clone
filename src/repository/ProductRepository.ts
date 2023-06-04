import ProductData, {Product} from "./data/ProductData";

class ProductAPI {

    async createProduct(product: Omit<Product, "productId">) {
        const newProductId = ProductData[ProductData.length - 1].productId + 1;
        ProductData.push({
            productId: newProductId,
            ...product
        })
        return newProductId;
    }

    async getProductList() {
        return ProductData;
    }

    async getProduct(productId: number) {
        const product = ProductData.find(product => product.productId === productId);
        if (!product) throw new Error();
        return product;
    }
}

const ProductRepository = new ProductAPI();

export default ProductRepository;