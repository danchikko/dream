import './MainPage.css'
import luptop from '../img/luptop.png'
import {HiOutlineMinus} from 'react-icons/hi'
import logo from '../img/logoIUK.png'

const MainPage = () => {
	return (
		<div className='container'>
			<div>
				<div className='main-title'>
					<h2>АКАДЕМИЧЕСКИЙ КОНСОРЦИУМ</h2>
					<h2>«МЕЖДУНАРОДНЫЙ УНИВЕРСИТЕТ КЫРГЫЗСТАНА»</h2>
				</div>
                <div className='contact-block'>
                    <ul className='contact'>
                        <HiOutlineMinus className='line'/>
                        <li>WhatsAPP</li> |
                        <li>Telegram</li> |
                        <li>Instagram</li> 
                    </ul>
                    <div className='sample'>
                        <img src={logo} alt="logo"/>
                        <p>Ков</p>
                    </div>
                </div>
			</div>
			<div className='luptop-block'>
				<img className='luptop' src={luptop} alt='luptop' />
			</div>
		</div>
	)
}

export default MainPage
