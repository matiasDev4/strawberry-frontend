import { useState } from "react"
import { userLogin } from "../services/authService"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()
    const handlerLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (username.trim() !== '' && password.trim() !== ''){
            const sessionData = await userLogin(username.trim(), password.trim())
            localStorage.setItem('token', sessionData['access_token'])
            if (sessionData) {
                navigation('/panel')
            }
        }
    }

    return (
        <section className="flex justify-center items-center h-screen">
            <form 
            onSubmit={(e)=>handlerLogin(e)}
            className="w-full md:w-[350px] h-auto bg-white py-2 px-4 flex flex-col gap-y-5 rounded-lg
            shadow-[0px_0px_10px_black]/10">
                <h1 className="pt-4 text-center font-play
                text-xl">Iniciar sesion</h1>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor=""
                    className="font-play font-normal"
                    >Usuario</label>
                    <input type="text" 
                    onChange={(e)=>setUsername(e.target.value)}
                    value={username}
                    className="border py-2 px-4 outline-0 border-red-400/50 rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor=""
                    className="font-play font-normal"
                    >Contraseña</label>
                    <input type="text" 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    className="border py-2 px-4 outline-0 border-red-400/50 rounded-md"
                    />
                </div>
                <button className="bg-red-500 py-2 font-play text-white text-lg rounded-lg my-4">
                    Ingresar
                </button>
            </form>
        </section>
    )
}