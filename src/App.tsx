import { Catalago } from "./Components/Catalogo"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { Inicio } from "./Components/Inicio"

export const App = () => {
    return (
        <>
            <Header />
            <Inicio />
            <Catalago />
            <Footer />
        </>
    )
}