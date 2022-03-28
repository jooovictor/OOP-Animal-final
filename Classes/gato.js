import { Animal } from "./animal.js";

class Gato extends Animal {
    // props

    #raca
    #territorio = {
        0: 'em cima do notebook.',
        1: 'na cama.',
        2: 'em cima da mesa.',
        3: 'no sofa.',
        4: 'no teclado.',
        5: 'na cara do dono.'
    }

    constructor (sexo = null, herbivoro=false, carnivoro=true, cor=null, pelagem=null, selvagem=true, raca='vira lata', reinoFilo) {
        super(herbivoro, carnivoro, sexo, cor, pelagem, selvagem, reinoFilo)
        this.#raca = raca
    }

    //metodos

    dormir() {
        const spot = this.#territorio[Math.floor(Math.random() * 6)]
        return `O gato dormiu ${spot}`
    }

    miar() {
        return 'miau'
    }

    telhado() {
        if (this.selvagem) {
            return 'O gato acaba arranjando confusão no telhado alheio'
        }
        return 'O gato passa a noite miando no proprio telhado'
    }
}

export { Gato }
