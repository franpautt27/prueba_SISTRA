import React, { useState } from "react";
import semaforo from "../assets/semaforo.jpg";
import "./cards.css";
import { Button, Modal } from "react-bootstrap";

export const CardComponent = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={semaforo} alt="" className="card-img-top" />
      </div>

      <div className="card-body text-light">
        <h4 className="card-title">
          <b> Equipo semaf&oacute;rico </b>
        </h4>
        <p className="card-text text-secondary">
          Los semáforos son dispositivos de señalización mediante los cuales se
          regula la circulación de vehículos, bicicletas y peatones en vías,
          asignando el derecho de paso o prelación de vehículos y peatones
          secuencialmente, por las indicaciones de luces de color rojo, amarillo
          y verde, operadas por una unidad electrónica de control.
        </p>
        <button className="btn btn-outline-success " onClick={handleShow}>
          Ver Informaci&oacute;n del equipo
        </button>

        <Modal className="my-modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-light">
              Informaci&oacute;n t&eacute;cnica:
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-light text-center">
            <b>C&oacute;digo del equipo:</b> {props.datosEquipo.codigo} <br />
            <b>Fecha modificaci&oacute;n:</b>{" "}
            {(props.datosEquipo.claveTiempo.diaModificacion.toString().length === 1 ? "0" + props.datosEquipo.claveTiempo.diaModificacion : props.datosEquipo.claveTiempo.diaModificacion)  +
              " de " +
              props.datosEquipo.claveTiempo.mesModificacion +
              " del 20" +
              (props.datosEquipo.claveTiempo.yearModificacion.toString().length === 1 ? "0" + props.datosEquipo.claveTiempo.yearModificacion : props.datosEquipo.claveTiempo.yearModificacion)}{" "}
            <br />
            <b>Hora modificaci&oacute;n:</b>{" "}
            {props.datosEquipo.claveTiempo.horaModificacion} <br />
            <b>Fecha Publicaci&oacute;n:</b>{" "}
            {(props.datosEquipo.dia.toString().length === 1
              ? "0" + props.datosEquipo.dia
              : props.datosEquipo.dia) +
              " de " +
              props.datosEquipo.mes +
              " del 20" +
              props.datosEquipo.year}{" "}
            <br />
            <b>Hora Publicaci&oacute;n:</b>{" "}
            {(props.datosEquipo.hora.toString().length === 1
              ? "0" + props.datosEquipo.hora
              : props.datosEquipo.hora) +
              ":" +
              (props.datosEquipo.minuto.toString().length === 1
                ? "0" + props.datosEquipo.minuto
                : props.datosEquipo.minuto) +
              ":" +
              (props.datosEquipo.segundo.toString().length === 1
                ? "0" + props.datosEquipo.segundo
                : props.datosEquipo.segundo)}{" "}
            <br />
            <b>Contador de Cruce:</b> {props.datosEquipo.contadorCruce}
          </Modal.Body>
          <Modal.Header>
            <Modal.Title className="text-light">Estados:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-light text-center">
            <b>B1:</b> {props.datosEquipo.b1} <br />
            <b>B2:</b> {props.datosEquipo.b2} <br />
            <b>B3:</b> {props.datosEquipo.b3} <br />
            <b>B4:</b> {props.datosEquipo.b4} <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
