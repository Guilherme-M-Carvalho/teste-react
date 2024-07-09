import { ReactNode, createContext } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductProps } from "../types/products";
import { useFindProducts } from "../hooks/useFindProduct";

export const ProductsContext = createContext({} as {
    handleRemove: (index: number) => void;
    handleClearCar: () => void;
    handleAddProduct: (index: number) => void;
    handleMinusProduct: (index: number) => void;
    handleChangeAmount: (index: number, val: number) => void;
    handleSetProducts: (newProducts: ProductProps[]) => void;
    products: ProductProps[];
    handleFind: () => Promise<ProductProps[]>;
    itemsAmount: number;
    isPending: boolean;
});

export function ProductsProvider({children}:{children: ReactNode}){

    const products = useProducts()
    const findProducts = useFindProducts()

    return (<ProductsContext.Provider value={{...products, ...findProducts}}>
        {children}
    </ProductsContext.Provider>)
}