import './MainPage.css'
import luptop from '../img/luptop.png'

const MainPage = () => {
	return (
		<div className='container'>
			<div>
				<div className='main-title'>
					<h2>АКАДЕМИЧЕСКИЙ КОНСОРЦИУМ</h2>
					<h2>«МЕЖДУНАРОДНЫЙ УНИВЕРСИТЕТ КЫРГЫЗСТАНА»</h2>
				</div>
                <div>
                    <ul>
                        <li>___</li>
                        
                    </ul>
                </div>
			</div>
			<div className='luptop-block'>
				<img className='luptop' src={luptop} alt='luptop' />
			</div>
		</div>
	)
}

export default MainPage
