import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {Cart} from "../../repository/data/CartData";
import CartRepository from "../../repository/CartRepository";
import queryKey from "./queryKey";

const useCartQuery = () => {
    const queryClient = useQueryClient();

    const addCartItem = useMutation({
        mutationFn: (itemInfo: Omit<Cart, 'cartItemId'>) => CartRepository.addCartItem(itemInfo),
        onSuccess: () => queryClient.invalidateQueries([queryKey.cart])
    })

    const removeCartItem = useMutation({
        mutationFn: (cartItemId: number) => CartRepository.removeCartItem(cartItemId),
        onSuccess: () => queryClient.invalidateQueries([queryKey.cart])
    })

    const useFetchCartItems = () => useQuery({
        queryKey: [queryKey.cart],
        queryFn: CartRepository.getCartItemList
    })

    return {
        addCartItem,
        removeCartItem,
        useFetchCartItems
    }
}


export default useCartQuery;