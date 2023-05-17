import logo from '../img/logoIUK.png'

const MapPage = () => {
	return (
		<div className='mapPageContainer'>
			<h2>НАШИ КОНТАКТЫ</h2>
            <div>
                <img src={logo} alt='logo' />
                <a href='mailto:info@iuk.kg'>info@iuk.kg</a>
                <p></p>
            </div>
		</div>
	)
}

export default MapPage
