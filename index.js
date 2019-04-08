export function crearGolondrina(){
    return {
        energia: 30,
        volar: function(km){
            this.energia -= km * 3
        },
        comer: function(gramos){
            this.energia += gramos * 2
        }
    }
}