import useClima from "../hooks/useClima"
import { useState } from "react";

const Formulario = () => {


    const { busqueda, datosBusqueda,consultarClima } = useClima();
    const { alerta, setAlerta } = useState(false);


    const { ciudad, pais } = busqueda

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios.');
            return;
        }
        consultarClima(busqueda);

    }


    return (
        <div className="contenedor">
            {alerta && <p>{alerta}</p>}
            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad: </label>
                    <input onChange={datosBusqueda} type="text" id="ciudad" name="ciudad" value={ciudad} />
                </div>
                <div className="campo">
                    <label htmlFor="pais">País: </label>
                    <select  onChange={datosBusqueda} name="pais" id="pais" value={pais}>
                        <option value="">-- Seleccione un País --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                        <option value="CO">Colombia</option>
                    </select>
                </div>
                <input type="submit" value='Consultar Clima' />
            </form>
        </div>
    )
}

export default Formulario