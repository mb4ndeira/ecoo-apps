export type Product = {
    id: string,
    name: string,
    price: number,
    quantity: number
}

export type Purchase = {
    products: Product[],
    total: number
}