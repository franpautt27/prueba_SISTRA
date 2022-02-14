import React , {useState, useEffect} from "react";
import { CardComponent } from "./CardComponent";
import semaforo from "../assets/semaforo.jpg";

export const Cards = () => {

    // Data Storage

    const url = "http://palmira.rts.com.co:4010/getTrama";

    const [datosEquipo, setDatosEquipo] = useState({
        codigo: "",
        claveTiempo: {
            yearModificacion: "",
            mesModificacion: "",
            diaModificacion: "",
            horaModificacion : ""
        },
        hora: "",
        minuto: "",
        segundo: "",
        year: "",
        mes: "",
        dia: "",
        contadorCruce: "",
        b1: "",
        b2: "",
        b3: "",
        b4: "",
        image: semaforo

    });

    const mesNumeroAString = (mesNumero) => {
      const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
      const mes = meses[mesNumero-1];
      return mes;
    }

    const formatoHora = (segundos) => {
      const hora = Math.floor(segundos / 3600);
      let horaString = hora;
      const minuto = Math.floor((segundos/3600 - hora) * 60);
      let minutoString = minuto;
      const segundo = Math.round((((segundos/3600 - hora) * 60) - minuto)*60);
      let segundoString = segundo;
      if(hora.toString().length === 1){
        horaString = "0" + hora;
      }
      if (minuto.toString().length ===1){
        minutoString = "0" + minuto;
      }
      if(segundo.toString().length === 1){
        segundoString = "0" + segundo;
      }
      return horaString + ":" + minutoString + ":" + segundoString;
    }
    const analisisB1 = (numeroB1) => {
      switch (numeroB1) {
        case 0:
          return "Equipo en normal funcionamiento";
        case 1:
          return "El conteo está activado y el contador está avanzando";
        case 2:
          return "Al cruce ya le llegó la señal de sincronismo";
        case 4:
          return "El cruce está en destello";
        case 8:
          return "El cruce está en todo rojo por conexión de la central";
      
        default:
          return "";
      }

    }
    const analisisB2 = (numeroB2) => {
      switch (numeroB2) {
        case 0:
          return "Equipo en normal funcionamiento";
        case 1:
          return "Ya se ejecutó el primer ciclo";
        case 2:
          return "El cruce está destellando por Rojo Fundido";
        case 4:
          return "El cruce detectó una luz Verde Fundida";
        case 8:
          return "El cruce está destellando por Verde Conflictivo";
      
        default:
          return "";
      }

    }
    const analisisB3 = (numeroB3) => {
      switch (numeroB3) {
        case 0:
          return "Equipo en normal funcionamiento";
        case 1:
          return "El Cruce se encuentra en Destello Manual";
        case 2:
          return "El cruce se encuentra en Destello Automático";
        case 4:
          return "El cruce se encuentra en Stop Manual";
        case 8:
          return "El cruce se encuentra Apagado desde la Central";
      
        default:
          return "";
      }

    }
    const analisisB4 = (numeroB4) => {
      switch (numeroB4) {
        case 0:
          return "Equipo en normal funcionamiento";
        case 1:
          return "Está activo el plan de Conexión";
        case 2:
          return "Está activo el plan de Desconexión";
        
        default:
          return "";
      }

    }

    
  

    useEffect( () => {
      const fetchApi = async () => {
        const response = await fetch(url);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const codigoCrudo =  responseJSON.trama.substring(2,6);
        const codigoDecimal =  parseInt(codigoCrudo, 16);
        const yearModificacionCrudo = responseJSON.trama.substring(6,8);
        const yearModificacion = parseInt(yearModificacionCrudo, 16);
        const mesModificacionCrudo = responseJSON.trama.substring(8,10);
        const mesModificacionNumero = parseInt(mesModificacionCrudo, 16);
        const mesModificacion = mesNumeroAString(mesModificacionNumero);
        const diaModificacionCrudo = responseJSON.trama.substring(10,12);
        const diaModificacion = parseInt(diaModificacionCrudo, 16);
        const segundosCrudos = responseJSON.trama.substring(12, 17);
        const segundosTotales = parseInt(segundosCrudos, 16);
        const horaModificacion = formatoHora(segundosTotales);
        const horaCruda = responseJSON.trama.substring(17,19);
        const hora = parseInt(horaCruda, 16);
        const minutoCrudo = responseJSON.trama.substring(19,21);
        const minuto = parseInt(minutoCrudo, 16);
        const segundoCrudo = responseJSON.trama.substring(21,23);
        const segundo = parseInt(segundoCrudo, 16);
        const yearCrudo = responseJSON.trama.substring(23, 25);
        const year = parseInt(yearCrudo, 16);
        const mesCrudo = responseJSON.trama.substring(25, 27);
        const mes = mesNumeroAString(parseInt(mesCrudo, 16));
        const diaCrudo = responseJSON.trama.substring(27, 29)
        const dia = parseInt(diaCrudo, 16);
        const contadorCruceCrudo = responseJSON.trama.substring(29,31);
        const contadorCruce = parseInt(contadorCruceCrudo, 16);
        const b1Crudo = responseJSON.trama.substring(31,32);
        const b1Numero = parseInt(b1Crudo);
        const b1 = analisisB1(b1Numero);
        const b2Crudo = responseJSON.trama.substring(32, 33);
        const b2Numero = parseInt(b2Crudo);
        const b2 = analisisB2(b2Numero);
        const b3Crudo = responseJSON.trama.substring(33,34);
        const b3Numero = parseInt(b3Crudo);
        const b3 = analisisB3(b3Numero);
        const b4Crudo = responseJSON.trama.substring(34,35);
        const b4Numero = parseInt(b4Crudo);
        const b4 = analisisB4(b4Numero);
        
        setDatosEquipo({
            codigo: codigoDecimal,
            claveTiempo: {
                yearModificacion,
                mesModificacion,
                diaModificacion,
                horaModificacion
            },
            hora,
            minuto,
            segundo,
            year,
            mes,
            dia,
            contadorCruce,
            b1,
            b2,
            b3,
            b4
        });
        
      }
        fetchApi();
    },[]);

    //End of data storage


  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row justify-content-center">
        <div className="col-md-4">
            <CardComponent datosEquipo = {datosEquipo} />
        </div>
      </div>
    </div>
  );
};
