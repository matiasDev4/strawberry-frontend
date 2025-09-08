
export const insertProduct = async (data: FormData) => {

    const response = await fetch('https://strawberry-api.onrender.com/products/create', {
        method: 'POST',
        body: data
    })

    if (!response.ok) throw new Error('Error al crear el producto')
    
    return await response.json()
}

export const getAllProducts = async () => {
    const response = await fetch('https://strawberry-api.onrender.com/products', {
        method: 'GET',
    })

    if (!response.ok) throw new Error('No se encontraron productos')
    return await response.json()
}