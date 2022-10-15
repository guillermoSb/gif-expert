
import { fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks"


describe('Pruebas en el hook useGetGifs', () => {
	test('Debe de regresar el estado inicial', () => {
		const { result } = renderHook(() => useFetchGifs('Star Wars'))	// Render the hook
		const { gifs, isLoading } = result.current;
		expect(gifs.length).toBe(0)
		expect(isLoading).toBeTruthy();
	})

	test('Debe de regresar un arreglo de imagenes y el isLoading false', async () => {
		const { result } = renderHook(() => useFetchGifs('Star Wars'))	// Render the hook
		// Espera a que la funcion obtenga las imagenes
		await waitFor(
			() => expect(result.current.gifs.length).toBeGreaterThan(0)
		)

		expect(result.current.gifs.length).toBeGreaterThan(0)
		expect(result.current.isLoading).toBeFalsy();
	})
})