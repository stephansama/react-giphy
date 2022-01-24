import { useState, useEffect } from 'react'

import Giph from './components/Giph'
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'

import './App.css'

const API = 'JqNSdM3EphAe44xGlefWHkoVwshhXcBT'
const API_URL = 'https://api.giphy.com/v1/gifs/trending?api_key=#'
let used = []

function App() {
	const [currentImgs, setImgs] = useState([])
	const [selectedImg, setSelected] = useState(null)

	// load 100 gifs from giphy and
	// set the selected gif to the first of the array
	const loadGif = () => {
		fetch(API_URL.replace('#', API)).then((response) => {
			response.json().then((data) => {
				data.data.forEach((gif, i) => {
					setImgs((oldVal) => [...oldVal, gif.images.original.url])
					if (i === 0) setSelected(gif.images.original.url)
				})
			})
		})
	}

	// find a random index from gif array
	// make sure random index is not in the previouslyUsed indexes
	// load gif from loaded gif array
	const changeGif = () => {
		const index = Math.floor(Math.random() * currentImgs.length)
		if (used.length === currentImgs.length) used = []
		if (used.indexOf(index) === -1) {
			used.push(index)
			setSelected(currentImgs[index])
		} else {
			changeGif()
		}
	}

	// make API call to Giphy on pageload
	useEffect(() => loadGif(), [])

	return (
		<>
			<Header />
			<Button title='NEXT GIF' action={changeGif} />
			<Giph img={selectedImg} />
			<Footer />
		</>
	)
}

export default App
