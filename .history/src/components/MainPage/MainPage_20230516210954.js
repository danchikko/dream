import './MainPage.css'
import luptop from '../img/luptop.png'

const MainPage = () => {
	return (
		<div className='container'>
			<div className='main-title'>
				<h2>АКАДЕМИЧЕСКИЙ КОНСОРЦИУМ</h2>
				<h2>«МЕЖДУНАРОДНЫЙ УНИВЕРСИТЕТ КЫРГЫЗСТАНА»</h2>
			</div>
            <div>
                <img src={luptop} alt='' />
            </div>
		</div>
	)
}

export default MainPage;
