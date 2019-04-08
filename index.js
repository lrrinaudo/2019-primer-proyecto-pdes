export class Golondrina {
    constructor(energia = 30){
        this.energia = energia
    }

    volar(km){
        this.energia -= km * 3
    }

    comer(gramos){
        this.energia += gramos * 2
    }

}