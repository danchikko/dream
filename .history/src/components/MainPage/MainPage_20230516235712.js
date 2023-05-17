import './MainPage.css'
import luptop from '../img/luptop.png'
import {HiOutlineMinus} from 'react-icons/hi'

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
                        <p>Кофедра компьютерных информационных систем и управления</p>
                    </div>
                    <div>
                        <button>

                        </button>
                        <button>
                            
                        </button>
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
