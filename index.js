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

export const GolondrinasInmutables = {
    crear(nombre, edad = 1, energia = 30) {
        return {nombre, energia, edad}
    },

    volar(golondrina, km) {
        return {...golondrina, energia: golondrina.energia - km * 3}
    },

    comer(golondrina, gramos) {
        return {...golondrina, energia: golondrina.energia + gramos * 2}
    }
}
