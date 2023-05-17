import './Header.css'
import logo from '../img/logoIUK.png'

const Header = () => {
	return (
		<div className='header'>
			<div className='MainHeader'>
				<img className='logo' src={logo} alt='logo' />
				<ul className='ul-callon'>
					<li>МЕЖДУНАРОДНЫЙ УНИВЕРСИТЕТ КЫРГЫЗСТАНА</li>
				</ul>
				<div className='register-block'>
					<button className='entrance'>Вход</button>
					<button className='registration'>Регистрация</button>
				</div>
			</div>
		</div>
	)
}

export default Header
