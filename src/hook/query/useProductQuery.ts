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

    const useFetchProductList = () => useQuery({
        queryKey: [queryKey.product, "LIST"],
        queryFn: ProductRepository.getProductList,
    })

    const useFetchProductDetail = (productId: number) => useQuery({
        queryKey: [queryKey.product, productId],
        queryFn: () => ProductRepository.getProduct(productId)
    })

    return {
        createProduct,
        useFetchProductList,
        useFetchProductDetail
    }
}

export default useProductQuery;