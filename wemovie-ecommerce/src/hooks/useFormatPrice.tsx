export function useFormat(){
    return {
        handleFormat(val: number){
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2
            }).format(val)
        }
    }
}