import { useState } from "react"
import { ProductProps } from "../types/products"

export function useProducts() {

    const [products, setProducts] = useState<ProductProps[]>([])

    const handleSetProducts = (newProducts: ProductProps[]) => {
        setProducts(newProducts)
    }

    const handleAddProduct = (index: number) => {
        setProducts(arr => {
            arr[index].amount += 1
            arr[index].inCart = true
            return [...arr]
        })
    }

    const handleMinusProduct = (index: number) => {
        setProducts(arr => {
            if (arr[index].amount) {
                arr[index].amount -= 1
            }
            if(!arr[index].amount){
                arr[index].inCart = false
            }
            return [...arr]
        })
    }
    const handleRemove = (index: number) => {
        setProducts(arr => {
            arr[index].inCart = false
            arr[index].amount = 0
            return [...arr]
        })
    }

    const handleChangeAmount = (index: number, val: number) => {
        setProducts(arr => {
            arr[index].amount = val
            return [...arr]
        })
    }

    const handleClearCar = () => {
        setProducts(arr => {
            arr.map(el => {
                el.amount = 0
                el.inCart = false
            })
            return [...arr]
        })
    }
    const itemsAmount = products.reduce((acc, val) => acc + (val.amount ? Number(val.amount) : 0), 0)

    return {
        handleClearCar,
        handleRemove,
        handleChangeAmount,
        handleAddProduct,
        handleMinusProduct,
        handleSetProducts,
        products,
        itemsAmount
    }
}