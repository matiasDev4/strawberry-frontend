import type { productInterface } from "../config/productsTypes"

export const insertProduct = async ({products}:{products: productInterface}) => {
    const form = new FormData()
    form.append('name', products.name)
    form.append('description', products.description)
    form.append('image', products.image)
    form.append('stock', String(products.stock))
    form.append('price', String(products.price))
    form.append('active', String(products.active))
    const response = await fetch('http://127.0.0.1:8000/products/create', {
        method: 'POST',
        body: form
    })

    if (!response.ok) throw new Error('Error al crear el producto')
    
    return await response.json()
}