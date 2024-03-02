import { useState } from "react";
import axios from 'axios';
//rafc para crear nuevo
import { Aseguradoras } from './Aseguradoras'

export const AseguradorasRegistro = () => {
    const url = 'http://localhost:9090/api/aseguradora';

    const [aseguradora, setAseguradora] = useState();


    const aseguradoraHandler = (event) => {

        const { name, value } = event.target;
        setAseguradora(value);

    }

    const submitHandler = async () => {

        event.preventDefault();
        const data = {
            nombre: aseguradora
        }

        const result = await axios.post(url, data);
        const resultData = (await result).data;

        console.log(result);
        console.log(resultData);

    }


    return (
        <>
        <Aseguradoras/>
            <div className='container mt-5' >                
                <form onSubmit={submitHandler}>
                    <legend>Registro de Aseguradoras</legend>
                    <fieldset>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Aseguradora</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    name="aseguradora"
                                    onChange={aseguradoraHandler}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Crear Aseguradora</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
