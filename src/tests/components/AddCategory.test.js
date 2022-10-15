import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => {
	test('debe de cambiar el valor de la caja de texto', () => {
		render(<AddCategory onAddCategory={() => { }} />)	// Renderizar el add category
		const input = screen.getByRole('textbox');
		fireEvent.input(input, { target: { value: 'Nueva Cateogria' } })
		expect(input.value).toBe('Nueva Cateogria')
	})

	test('Debe de llamar onAddCategory si el input tiene un valor', () => {
		const inputValue = 'Star Wars'

		const onAddCategory = jest.fn();	// Es una simulacion de una funcion


		render(<AddCategory onAddCategory={onAddCategory} />)
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form')
		fireEvent.input(input, { target: { value: inputValue } })
		fireEvent.submit(form)
		expect(input.value).toBe('')	// El input tiene un string vacio
		expect(onAddCategory).toHaveBeenCalledTimes(1)
		expect(onAddCategory).toHaveBeenCalledWith(inputValue)	// Esperar que la funcion haya sido llamada con el valor del text box
	})

	test('No debe de llamar onAddCategory si el input no tiene valor.', () => {
		const onAddCategory = jest.fn();	// Es una simulacion de una funcion
		render(<AddCategory onAddCategory={onAddCategory} />)
		const form = screen.getByRole('form')
		fireEvent.submit(form)
		expect(onAddCategory).not.toHaveBeenCalled()
	})
})