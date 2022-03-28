import { Animal } from "./animal.js"
import { Filo } from "./filo.js";

class Papagaio extends Animal {

    //props 

    #bico

    constructor (sexo=null, herbivoro=true, carnivoro=false, cor=null, pelagem='penas', selvagem='false', bico='achatado', reinoFilo=null){
        super(herbivoro, carnivoro, sexo, cor, pelagem, selvagem, reinoFilo)
        this.#bico = bico
    }

    //metodos

    locomocao() {
        return 'plap plap ( voando ) '
    }

    imitar (frase='fala alguma coisa') {
        return `Arr ${frase} Arrr Arr ${frase}`;
    }

}

export { Papagaio }