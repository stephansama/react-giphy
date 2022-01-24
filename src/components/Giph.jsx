import './Giph.css'

const Giph = ({ img }) => {
	return (
		<div id='giph'>
			{img ? <img src={img} alt='Giphy image' /> : 'No image to display'}
			<></>
		</div>
	)
}

export default Giph
