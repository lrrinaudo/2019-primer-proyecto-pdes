import { Golondrina } from "./index"

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