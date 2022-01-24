import './Giph.css'

const Giph = ({ img }) => {
	return (
		<div id='giph'>
			{img ? <img src={img} alt='Giphy' /> : 'No image to display'}
			<></>
		</div>
	)
}

export default Giph
