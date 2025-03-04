/*const persona={
    nombre: 'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip: 5532213,
        lat:14.3232,
        lng: 34.923342
    }
};*/

//console.table({ persona } );
//console.log({ persona } );

//Desestructuracion o Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

//const { nombre, edad, clave} = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const retornaPersona = ({nombre,edad}) => {
    console.log(nombre, edad)
}

retornaPersona(persona)


//Desestructuracion o Asignacion Desestructurante Arreglos
/*const personajes = ['Goku','Vegeta','Trunks']
const [, , p3] = personajes;

const retornaArreglo = () =>{
    return ['ABC',123];
}
const [letras,numeros] = retornaArreglo();
console.log(letras, numeros)
console.log(p3);

const useState= (valor)=>{
    return [valor,()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Goju');

console.log(nombre)
setNombre();*/

//IMPORTACIONES Y EXPORTACIONES
/*import {heroes} from '../src/Data/heroes'

console.log(heroes)

const getHeroeById=(id)=>{
    return heroes.find((heroe)=> heroe.id===id);
}
console.log(getHeroeById(2))

const getHeroesByOwner = (owner)=>{
    return heroes.filter((heroe)=> heroe.owner===owner);
}
console.log(getHeroesByOwner('DC'));*/



//PROMESAS
/*const promesa=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve();
    }, 2000);
});

promesa.then(()=>{
    console.log('Promesa THEN')
})*/

//API

const apiKey='NNR6N3GmEttkFdwbJjtFEsbtPA42X3O5';

const peticion=fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
.then(resp => resp.json())
.then(({data}) => {
   const{url}= data.images.original;
   const img = document.createElement('img');
   img.src=url;
   document.body.append(img);
})

.catch(console.warn);