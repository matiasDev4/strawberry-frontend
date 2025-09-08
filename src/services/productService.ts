
export const insertProduct = async (data: FormData) => {

    const response = await fetch('http://127.0.0.1:8000/products/create', {
        method: 'POST',
        body: data
    })

    if (!response.ok) throw new Error('Error al crear el producto')
    
    return await response.json()
}

export const getAllProducts = async () => {
    const response = await fetch('http://127.0.0.1:8000/products', {
        method: 'GET',
    })

    if (!response.ok) throw new Error('No se encontraron productos')
    return await response.json()
}