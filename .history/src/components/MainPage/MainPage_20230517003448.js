import './MainPage.css'
import { HiOutlineMinus } from 'react-icons/hi'

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
						<HiOutlineMinus className='line' />
						<li>WhatsAPP</li> |<li>Telegram</li> |<li>Instagram</li>
					</ul>
					<div className='sample'>
						<p>
							Кофедра компьютерных информационных систем и
							управления
						</p>
					</div>
					<div className='info-block'>
						<button className='department'>О кафедре</button>
						<button className='teacher-block'>Профессорско-преподавательский состав</button>
					</div>
				</div>
			</div>
			<div className='luptop-block'>
				<div className='luptop'>
                    <video width="300" height="200" controls>
                        <source src=''
                    </video>
                </div>
			</div>
		</div>
	)
}

export default MainPage
