
export const insertProduct = async (data: FormData) => {
    const response = await fetch('https://strawberry.discloud.app/products/create', {
        method: 'POST',
        body: data
    })
    return response
}

export const getAllProducts = async () => {
    const response = await fetch('https://strawberry.discloud.app/products', {
        method: 'GET',
    })
    if (!response.ok) throw new Error('No hay productos')
    return await response.json()
}

export const deleteProduct = async (id: number) => {
    const response = await fetch(`https://strawberry.discloud.app/products/delete/${id}`, {
        method: 'DELETE',
    })
    return await response.json()

}

export const updateProduct = async (id:number, data: FormData) => {
    const response = await fetch(`https://strawberry.discloud.app/products/update/${id}`, {
        method: 'PUT',
        body: data
    })
    return response 
}