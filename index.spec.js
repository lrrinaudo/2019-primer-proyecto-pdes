import { Golondrina, GolondrinasInmutables as GI} from "./index"

describe("pepita basica", () => {
    it("deberia volar y consumir energia", () => {
        const pepita = new Golondrina(30)
        pepita.volar(2)
        expect(pepita.energia).toEqual(24)
    })

    it("deberia comer y ganar energia", () => {
        const pepita = new Golondrina(30)
        pepita.comer(3)
        expect(pepita.energia).toEqual(36)
    })
})

describe("pepita inmutable", () => {
    it("deberia volar y consumir energia", () => {
        const pepita = GI.volar(GI.crear("pepita"), 4)
        expect(pepita).toMatchObject({nombre: "pepita", edad: 1, energia: 18})
        // expect(pepita.energia).toEqual(24)
        // expect(pepita.nombre).toEqual("pepita")
        // expect(pepita.edad).toEqual(1)
    })
})
