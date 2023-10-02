/* Registro de Exposiciones de Arte
Implemente una clase "'ExposiciónArte" que temga propiedades como "nombre","artista" y "fecha de exhibición".
Desarrolla funciones que permitan agregar,editar y eliminar exposiciones de arte en un registro.Además, desarrolla una función
que muestre las exposiciones de un artista específico.*/

class ExposiciónArte{
    constructor(nombre,artista,fecha){
        let nombre_=nombre;
        let artista_=artista;
        let fecha_=fecha;

        this.getNombre = () => nombre_;
        this.getArtista = () => artista_;
        this.getFecha = () => fecha_;

        /*editar una exposición*/

        this.setNombre = function nombreN (NuevoNombre){
            nombre_=NuevoNombre;
        };
        this.setArtista = function artistaN(NuevoArtista){
            artista_=NuevoArtista;
        };
        this.setFecha= function fechaN(NuevaFecha){
            fecha_=NuevaFecha
        };
    }

}

class Controladora{
    constructor() {
        let exposiciones = [];

        this.getExposiciones = () => exposiciones;

        /*agregar una exposicion, validadando q ya no exista dicha exposición por su nombre*/

        this.agregarE = function (nombre,artista,fecha){
            let esta=false;
            if(exposiciones.length>0){
                for(let i=0;i<exposiciones.length && !esta;i++){
                    if(exposiciones[i].getNombre()==nombre)
                    esta=true;
                }
            }
            if(!esta) {
            exposiciones.push(new ExposiciónArte(nombre,artista,fecha));
            console.log('Se agregó correctamente la exposición de arte '+ nombre);
            }

        };

        /*editar una exposicion dada*/

        this.editarE = function (expo){
            if(exposiciones.length>0){
                for(let i=0;i<exposiciones.length;i++){
                    if(exposiciones[i].getNombre()==expo.getNombre){
                        exposiciones.splice(i,1,expo);
                    }
                }

            }
            console.log(exposiciones[i]);
        };

        /*eliminar una exposicion*/

        this.eliminarE = function (nombreExpo){
            let stop=false;
            let pos=-1;
            for(let i=0;i<exposiciones.length && !stop;i++){
                if(exposiciones[i].getNombre()==nombreExpo){
                pos=i;    
                stop=true;
                }       
            
            }  
            exposiciones.splice(pos,1);
            console.log('Se eliminó la exposición '+  ' " ' +  nombreExpo + ' " ');

        };

        /*mostrar exposiciones de un artista específico*/

        this.mostrar = function(nombreA){
            let obras = [];
            let obra;
            for(let i=0;i<exposiciones.length;i++){
                obra=exposiciones[i].getNombre();
                if(exposiciones[i].getArtista()==nombreA){
                    obras.push(obra);
                }
            }
            console.log('Las exposiciones realizadas por'+' '+ nombreA +' son: \n'  + obras.join(" \n"));

        };
            
    }
}

const controladora= new Controladora();
controladora.agregarE("Noche Estrellada", "Vincent van Gogh", "1889");
controladora.agregarE("La Gioconda", "Leonardo da Vinci", "1503");
controladora.agregarE("Saturno devorando a su hijo", "Francisco de Goya", "1819");
controladora.agregarE("Autorretrato", "Vincent van Gogh", "1889");
controladora.agregarE("Lirios", "Vincent van Gogh", "1889");
controladora.agregarE("La última cena", "Leonardo da Vinci", "1498");


controladora.mostrar("Vincent van Gogh");
controladora.mostrar("Leonardo da Vinci");

controladora.eliminarE("La última cena");

controladora.mostrar("Leonardo da Vinci");




