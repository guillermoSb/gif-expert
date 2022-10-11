import { useState } from "react"

export function AddCategory({onAddCategory}) {
	const [inputValue, setInputValue] = useState('')

	// Event handlers
	const onInputChange = (e) => { setInputValue(e.target.value) }
	const onFormSubmit = (e) => {
		e.preventDefault()
		const cleanedValue = inputValue.trim()
		if (cleanedValue.length <= 1) return;
		onAddCategory(cleanedValue)
		setInputValue('')	// Reset the input value
	}
	

	return (
		<form onSubmit={ onFormSubmit }>
			<input
				type={"text"}
				value={ inputValue }
				onChange={ onInputChange }
				placeholder="Buscar gifs"
			/>
		</form>
	)
}
