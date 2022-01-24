import './Button.css'

const Button = ({ title, action }) => {
	return (
		<button onClick={() => action()}>
			<span>{title}</span>
		</button>
	)
}

export default Button
