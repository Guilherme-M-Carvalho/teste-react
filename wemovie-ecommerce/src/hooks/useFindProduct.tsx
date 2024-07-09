import { useCallback, useState } from "react"
import { ProductProps } from "../types/products"
import { api } from "../services/api"

export function useFindProducts() {

    const [isPending, setIsPending] = useState<boolean>(false)

    const handleFind: () => Promise<ProductProps[]> = useCallback(async () => {
        setIsPending(true)
        let products: ProductProps[] = []
        try {
            const { data } = await api<{ products: ProductProps[] }>({ method: "get", url: "/movies" })
            products = data.products.map(el => {
                return {
                    ...el,
                    amount: 0
                }
            })
        } catch (error) {

        }
        setIsPending(false)
        return products
    }, [])

    return {
        handleFind,
        isPending
    }
}