import logo from '../img/logoIUK.png'

const MapPage = () => {
	return (
		<div className='mapPageContainer'>
			<h2>НАШИ КОНТАКТЫ</h2>
            <div>
                <img src={logo} alt='logo' />
                <a href='mailto:vlad@webref.ru'>info@iuk.kg</a>
            </div>
		</div>
	)
}

export default MapPage
