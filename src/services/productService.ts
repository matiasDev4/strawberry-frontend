import { API_URL } from "./authService"

export const categorys = [{
    'name':'Remeras'
},{
    'name':'Pantalones'
},{
    'name':'Conjuntos'
},{
    'name':'Vestidos'
},{
    'name':'Tops'
}]

export const insertProduct = async (data: FormData) => {
    const response = await fetch(`${API_URL}/products/create`, {
        method: 'POST',
        body: data
    })
    return response
}

export const getAllProducts = async () => {
    const response = await fetch(`${API_URL}/products`, {
        method: 'GET',
    })
    if (!response.ok) throw new Error('No hay productos')
    return await response.json()
}

export const getProduct = async (id: number | null) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'GET',
    })
    if (!response.ok) throw new Error('No hay productos')
    return await response.json()
}

export const deleteProduct = async (id: number) => {
    const response = await fetch(`${API_URL}/products/delete/${id}`, {
        method: 'DELETE',
    })
    return await response.json()

}

export const updateProduct = async (id:number, data: FormData) => {
    const response = await fetch(`${API_URL}/products/update/${id}`, {
        method: 'PUT',
        body: data
    })
    return response 
}