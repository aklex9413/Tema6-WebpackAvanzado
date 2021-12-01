import _ from 'lodash';
import './estilo.css';
import Imagen from './imagen.PNG';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';
import './estilo.scss';

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log('SW Registrado', registration)
        }).catch(error => {
            console.log("SW no registrado", error)
        })
    })
}

function componente(){
    const elemento = document.createElement('div');
    elemento.innerHTML = _.join(['Hola', Datos[0][1]], ' ');
    elemento.classList.add('hola');
    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);
    return elemento;
}

document.body.appendChild(componente());
document.body.classList.add('fondo')