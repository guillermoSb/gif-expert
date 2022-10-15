import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en getGifs', () => {
	test('Debe de retornar un arreglo de gifs', async () => {
		const gifs = await getGifs('Star Wars')
		expect(gifs.length).toBeGreaterThan(0)
		// Esperar que tenga un objeto con las propiedades correctas
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		})
	})
})