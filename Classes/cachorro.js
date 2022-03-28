import { Animal } from "./animal.js";


class Cachorro extends Animal{

    //props

    #focinho
    #porte
    #raca
    #latidos = {
        0: 'Au! Au! Au!',
        1: 'Woof!',
        2: 'Auuuu!',
        3: 'Grrr Au!'
    }

    constructor(sexo=null, herbivoro=false, carnivoro=true, cor=null, pelagem=null, selvagem=true, porte=null, focinho='comum', raca='vira lata', reinoFilo=null) {
        super(herbivoro, carnivoro, sexo, cor, pelagem, selvagem, reinoFilo)
        this.#porte = porte
        this.#focinho = focinho
        this.#raca = raca
    }

    //metodos

    latir() {
        const latido = this.#latidos[Math.floor(Math.random() * 4)]
        return latido;
    }

    pedir() {
        if (this.selvagem) {
            return 'O cão pede com seus olhos marejados e consegue uma carne do açougueiro'
        }
        return 'O cão convence o dono a dar-lhe mais ração com um olhar triste'
    }

}

export { Cachorro }
