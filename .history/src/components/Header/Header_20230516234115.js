import './Header.css'
import logo from '../img/logoIUK.png'

const Header = () => {
	return (
		<div c>
			<div className='MainHeaderContainer'>
				<img className='logo' src={logo} alt='logo' />
				<ul className='ul-callon'>
					<li>LEAD Академия</li>
					<li>Партнёрская программа</li>
					<li>Помощь</li>
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
