import './MainPage.css'
import { HiOutlineMinus } from 'react-icons/hi'
import React from 'react';
import './index.html';
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
						<button className='department'> О кафедре</button>
						<button className='teacher-block'>
						Профессорско-преподавательский состав
						</button>
					</div>
				</div>
			</div>
			<div className='luptop-block'>
				<div className='luptop'>
					<iframe
						width='348'
						height='220'
						src='https://www.youtube.com/embed/XKC4auDn07U'
						title='Международный Университет Кыргызстана    1 августа 2022г.'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	)
}
function App() {
    return (
      <div>
        <a href='./index.html' button>Скачать файл</a>
      </div>
    );
  }
  
  export default App;
export default MainPage
