import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import queryKey from "./queryKey";
import ProductRepository from "../../repository/ProductRepository";
import {Product} from "../../repository/data/ProductData";

const useProductQuery = () => {
    const queryClient = useQueryClient();

    const createProduct = useMutation({
        mutationFn: (product: Omit<Product, 'productId'>) => ProductRepository.createProduct(product),
        onSuccess: () => queryClient.invalidateQueries([queryKey.product])
    })

    const getProductList = () => useQuery({
        queryKey: [queryKey.product, "list"],
        queryFn: ProductRepository.getProductList,
    })

    const getProductDetail = (productId: number) => useQuery({
        queryKey: [queryKey.product, productId],
        queryFn: () => ProductRepository.getProduct(productId)
    })

    return {
        createProduct,
        getProductList,
        getProductDetail
    }
}

export default useProductQuery;