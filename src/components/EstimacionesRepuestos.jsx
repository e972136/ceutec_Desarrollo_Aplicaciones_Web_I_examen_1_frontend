import React from 'react'

export const EstimacionesRepuestos = () => {

    const listado = [
        {
            id: 1,
            descripcion: "bumper",
            precio: "100.50"
        },
        {
            id: 2,
            descripcion: "fender",
            precio: "888.25"
        },
        {
            id: 3,
            descripcion: "vidrio",
            precio: "1994"
        }
    ];


    return (
        <>
            <div className="container">
            <a href="/crear" className="btn btn-primary">Regresar</a>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center">Repuestos</h3>
                            </div>

                            <div className="card-body">

                                <form method="POST" className="row">
                                    <div className="col-1">
                                        <label for="estimacion" ><b>Estimacion</b></label>
                                    </div>

                                    <div className="col-2">
                                        <input type="text" className="form-control" id="estimacion" readonly />
                                    </div>


                                    <div className="col-9"></div>


                                    <div className="col-3 mt-1">
                                        <button type="submit" className="btn btn-success form-control">Guardar<i className="fa fa-plus-square " aria-hidden="true"></i></button>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <input type="reset" id="resetButton" className="btn btn-danger form-control" name="reset" />
                                    </div>
                                    <div className="col-3 mt-1">
                                        <a href="/" className="btn btn-warning form-control">Agregar<i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="col-3"></div>

                                    <div className="col-12">
                                        <fieldset>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="col-2">id</th>
                                                        <th className="col-8">Descripcion</th>
                                                        <th className="col-2">Precio</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        listado.map((item) => (
                                                            <tr>
                                                                <td className="col-2">{item.id}</td>
                                                                <td className="col-8">{item.descripcion} </td>
                                                                <td className="col-2">{item.precio} </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </fieldset>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
