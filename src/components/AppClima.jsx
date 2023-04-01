import Formulario from "./Formulario"
import useClima from "../hooks/useClima"
import Resultado from "./Resultado"
import Spinner from "./Spinner"

const AppClima = () => {

    const { resultado, cargando, noResultado } = useClima()

    return (
        <>
            <header>
                <h1>Buscador de Clima</h1>
            </header>
            <main className="dos-columnas">
                <Formulario />

                {cargando ? <Spinner /> :
                    resultado?.name ? <Resultado /> :
                        noResultado ?
                        <p className="loading">{noResultado}</p>:
                        <p className="loading">El Clima se mostrará aqui.</p>}

            </main>
        </>
    )
}

export default AppClima