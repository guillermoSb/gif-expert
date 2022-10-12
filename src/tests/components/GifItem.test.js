import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components/GifItem"

describe('Pruebas en <GifItem>', () => {
	const title = 'Star Wars'
	const url = 'https://github.com/guillermoSb'
	test('Debe de hacer match con el snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />)
		expect(container).toMatchSnapshot()
	})

	test('Debe de mostrar la imagen con el URL indicado y el ALT indicado', () => {
		render(<GifItem title={title} url={url} />)
		const { src, alt } = screen.getByRole('img')
		expect(src).toEqual(url)
		expect(alt).toEqual(title)
	})

	test('Debe de mostrar el titulo como un texto', () => {
		render(<GifItem title={title} url={url} />)
		expect(screen.getByText(title)).toBeTruthy();
	})
})