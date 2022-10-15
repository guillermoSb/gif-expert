import { useFetchGifs } from '../hooks';
import { GifItem } from './';
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

	const { gifs = [], isLoading } = useFetchGifs(category);

	// const [gifs, setGifs] = useState([])

	// const getImages = async () => {
	// 	const gifs = await getGifs(category)
	// 	setGifs(gifs)
	// }

	// useEffect(() => {
	// 	getImages();
	// }, [])

	return (
		<>
			<h3>{category}</h3>
			{
				isLoading && (<h2>Loading</h2>)
			}
			<div className='card-grid'>
				{gifs.map((gif) => (
					<GifItem
						key={gif.id}
						{...gif} // Esparcir todas las propiedades del gif en el child component.
					/>
				))}
				
			</div>
		</>
	)
}
GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
}