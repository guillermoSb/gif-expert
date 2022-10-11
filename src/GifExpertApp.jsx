import { useState } from "react"
import {AddCategory, GifGrid} from "./components"

export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['Star wars'])

	const onAddCategory = (newCategory) => {
		// Si la categoria ya existe, no hay que insertar
		if (categories.includes(newCategory)) return
		setCategories( cat => [newCategory, ...categories] )
	}
	
	return (
		<>
			
			<h1>GifExpertApp</h1>
			
			<AddCategory onAddCategory={onAddCategory}  />
			
	
			{categories.map((category) => (<GifGrid key={category} category={category}/>))}
	
	
		</>
	)
}
