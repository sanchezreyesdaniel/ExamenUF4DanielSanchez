import React, { useState } from "react";
import { ModalFormEditar } from "./ModalEditar";

export function Card({ id, titulo, texto, imagen }) {
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setShowModal(true);
  };
//Hola
  return (
    <div>
      <div id={id} className="card" style={{ width: "18rem" }}>
        <img src={imagen} alt="" />
        <div className="card-body">
          <h5 className="card-title">Card {titulo}</h5>
          <p className="card-text">{texto}</p>
          {/* Abrir el modal al hacer clic en el botón "Editar" */}
          <button onClick={handleEdit} className="btn btn-primary">
            Editar
          </button>
          <a href="#" className="btn btn-danger ml-2">
            Eliminar
          </a>
        </div>
      </div>
      {showModal && <ModalFormEditar />}
    </div>
  );
}
