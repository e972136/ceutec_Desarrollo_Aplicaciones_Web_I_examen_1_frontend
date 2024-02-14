import React from "react";

export const Estimaciones = () => {

  const listado = [
    {
      id: 1,
      placa: "4ab",
      asegurado: "Juan perez",
      estimadoPor: "Rosbinda",
      fechaEvaluacion: "2022/10/14"
    }
    , {
      id: 2,
      placa: "32ss",
      asegurado: "Mamerto Rodrigez",
      estimadoPor: "Rosbinda",
      fechaEvaluacion: "2022/10/14"
    }
    , {
      id: 3,
      placa: "21as",
      asegurado: "Fendando Del Rincon",
      estimadoPor: "Claudia",
      fechaEvaluacion: "2022/10/14"
    }
  ];


  return (
    <div className="container">
      <h1>Estimaciones</h1>
      <form action="" method="get" autocomplete="off">
        <div className="input-group mb-3">
          <button className="btn btn-primary" type="submit" id="button-addon1">
            <i className="fa fa-search"></i>
          </button>
          <input
            type="text"
            name="busqueda"
            claclassNamess="form-control"
            placeholder="Buscar"
          />
        </div>
      </form>

      <a  href="/crear" className="btn btn-success ">
        Agregar Estimacion <i className="fa fa-plus-square" aria-hidden="true"></i>
      </a>

      <table className="table table-dark table-striped">
        <thead>
          <tr className="bg-dark text-white">
            <th className="col-1">Est</th>
            <th className="col-1">Placa</th>
            <th className="col-3">Asegurado</th>
            <th className="col-3">Estimado por</th>
            <th className="col-2">Fecha</th>
            <th className="col-2">Acciones</th>
          </tr>
        </thead>
        <tbody>


          {
            listado.map( (item) => (
              <tr>
                <td className="col-1" >{item.id}</td>
                <td className="col-1" >{item.placa}</td>
                <td className="col-3" >{item.asegurado}</td>
                <td className="col-3" >{item.estimadoPor}</td>
                <td className="col-2" >{item.fechaEvaluacion}</td>
                <td className="col-2">
                  <a className="btn btn-warning">Editar
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </a>
                </td>
              </tr>
            ))
          }





        </tbody>
      </table>
    </div>
  );
};
