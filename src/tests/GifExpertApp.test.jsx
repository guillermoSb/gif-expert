import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas en el componente <GifExpertApp>', () => { 
	test('No debe de agregar una cateogria repetida', () => { 
		render(<GifExpertApp />)
		const input = screen.getByRole('textbox')
		const form = screen.getByRole('form')
		fireEvent.input(input, { target: { value: 'Star wars' } })
		fireEvent.submit(form)
		expect(screen.getAllByText('Star wars').length).toBe(1)
	})
	test('Debe de agregar una nueva categoria', () => { 
		render(<GifExpertApp />)
		const input = screen.getByRole('textbox')
		const form = screen.getByRole('form')
		fireEvent.input(input, { target: { value: 'Otra' } })
		fireEvent.submit(form)
		expect(screen.getAllByText('Otra').length).toBe(1)
	 })
 })