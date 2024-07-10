import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedComponent(){
  //Presentación
    // const typed = new Typed('.typed', {
    //     strings: ['Desarrollo Web Front-End',
    //             'Maquetación web',
    //             'Consultora BI',
    //             'Operadora Técnica de Radio'],
    //     //stringsElement: ,
    //     typeSpeed: 75, //Velocidad en milisegundos para poner una letra
    //     startDelay: 300, //Tiempo de retraso en iniciar la animación
    //     backSpeed: 75, //Velocidad en milisegundos en borrar una letra
    //     smartBackspace: false, //Eliminar solamente las palabreas que sean nuevas en una cadena de texto
    //     shuffle: false, //Alterar el orden en el que escribe las palabras
    //     backDelay: 2000, //Tiempo de espera despues de que termina de escribir una palabra
    //     loop: true, //Repetir el array
    //     loopCount: false, //Cant de veces que repite el array. False = infinite
    //     showCursor: true, //Si el cursor palpita 
    //     cursorChar: '|', //Caracter de cursor
    //     contentType: 'html', //html o null para texto sin formato
    // }); 

  // Creamos una referencia para el elemento DOM que contendrá el texto tipeado
  const typedElement = useRef(null);

    useEffect(() => {
    // Configuración de Typed.js
        const options = {
        strings: [
            'Desarrollo Web Front-End',
            'Maquetación web',
            'Consultora BI',
            'Operadora Técnica de Radio'
        ],
        typeSpeed: 75,
        startDelay: 300,
        backSpeed: 75,
        smartBackspace: false,
        shuffle: false,
        backDelay: 2000,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html',
        };

        // Inicialización de Typed.js
        const typed = new Typed(typedElement.current, options);

        // Limpiar la instancia de Typed.js al desmontar el componente
        return () => {
        typed.destroy();
        };
    }, []);

  return (
    <div>
      <span className="desarrollo typed" ref={typedElement}></span>
    </div>
  );
}


