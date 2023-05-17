import logo from '../img/logoIUK.png'
import './MapPage.css'

const MapPage = () => {
	return (
		<div className='mapPageContainer'>
			<h2 className='TitleContact'>НАШИ КОНТАКТЫ</h2>
            <img className='mapLogo' src={logo} alt='logo' />

            <div className='ContactBlock'>
                <a className='Mail' href='mailto:info@iuk.kg'>info@iuk.kg</a>
                <p>Бишкек, Л. Толстого, 17А/1</p>
            </div>
		</div>
	)
}

export default MapPage
