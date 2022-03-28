class Animal {
    // Props estatica

    static msg = {
        'ALIMENTO_OUT_OF_BOUNDS': 'Insira um alimento valido entre (carne, fruta e racao)',
        'ALIMENTO_EXCEP': 'O animal não come esse alimento'
    }

    // Props

    #sexo
    #herbivoro
    #carnivoro
    #cor
    #pelagem
    #selvagem
    #reinoFilo

    constructor(herbivoro=false, carnivoro=false, sexo=null, cor=null, pelagem=null, selvagem=true, reinoFilo=null) {
        this.#herbivoro = herbivoro
        this.#carnivoro = carnivoro
        this.#sexo = sexo
        this.#cor = cor
        this.#pelagem = pelagem
        this.#selvagem = selvagem
        this.#reinoFilo = reinoFilo
    }

    //Getter

    get selvagem() {
        return this.#selvagem;
    }

    //metodos

    locomocao() {
        return 'Caminhando. . .'
    }

    comer(alimento) { // carne, fruta ou ração

        if (alimento !== 'carne' && alimento !== 'fruta' && alimento !== 'racao') {
            throw Animal.msg.ALIMENTO_OUT_OF_BOUNDS
        }else if (this.#carnivoro && this.#herbivoro) {
            return 'Nhami Nhami'
        }else if (this.#carnivoro && alimento == 'fruta') {
            throw Animal.msg.ALIMENTO_EXCEP
        }else if (this.#herbivoro && alimento == 'carne') {
            throw Animal.msg.ALIMENTO_EXCEP
        }

        return 'Nhami Nhami'
    }

    dormir() {
        return 'ZzZzZ'
    }

}

export { Animal };

