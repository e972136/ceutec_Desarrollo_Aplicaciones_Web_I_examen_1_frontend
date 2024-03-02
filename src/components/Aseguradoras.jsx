import React from 'react'

export const Aseguradoras = () => {
    return (
        <>
            <div className="container">


                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Aseguradoras</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a href="/aseguradoras-registro" className="btn btn-primary ">
                                    Agregar Aseguradora <i className="fa fa-plus-square" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/aseguradoras-actualiza" className="btn btn-success ">
                                    Editar Aseguradora <i className="fa fa-plus-square" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/aseguradoras-elimina" className="btn btn-danger ">
                                    Eliminar Aseguradora <i className="fa fa-plus-square" aria-hidden="true"></i>
                                </a>
                            </li>              
                        </ul>
                    </div>
                </nav>





            </div>
        </>
    )
}
