import { fireEvent, render, screen } from "@testing-library/react"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"

jest.mock("../../hooks/useFetchGifs")	// Indicar a jest que vamos a hacer un mock de esa funcion

describe('Pruebas en el componente <GifGrid>', () => {
	useFetchGifs.mockReturnValue({
		images: [],
		isLoading: true
	})
	const category = 'Star Wars'
	test('Debe de mostrar loading al inicio', () => {
		render(<GifGrid category={category} />)
		expect(screen.getByText('Loading')).toBeTruthy()
		expect(screen.getByText(category)).toBeTruthy()
	})

	test('Debe de mostrar items cuando se cargan las imagenes desde useFetchGifs', () => {
		const images = [{
			id: 'ABC',
			title: 'Lego',
			url: 'http://example.com/value.jpg'
		}, {
			id: 'ABCD',
			title: 'Star Wars',
			url: 'http://example.com/value2.jpg'
		}]
		useFetchGifs.mockReturnValue({
			gifs: images,
			isLoading: false
		})

		render(<GifGrid category={category} />)
		expect(screen.getAllByRole('img').length).toBe(2)
	})

})