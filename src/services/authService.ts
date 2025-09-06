export const userLogin = async (username: string, password: string) => {
    const form = new FormData()
    form.append('username', username)
    form.append('password', password)

    const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        body: form
    })
    if (!response.ok) throw new Error('Error al iniciar sesion')
    return await response.json()
}

export const getUserData = async (token: string) => {

    const response = await fetch('http://127.0.0.1:8000/user/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    if (!response.ok) throw new Error('Error en la peticion')

    return await response.json()
}