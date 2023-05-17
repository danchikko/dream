import './Header.css'
import logo from '../img/logoIUK.png'

const Header = () => {
	return (
		<div className='MainHeaderContainer'>
			<img src={logo} alt='logo' />
			<ul className='ul-callon'>
				<li>LEAD Академия</li>
				<li>Партнёрская программа</li>
				<li>Помощь</li>
			</ul>
			<div className='register'>
				<button >Вход</button>
				<button>Регистрация</button>
			</div>
		</div>
	)
}

export default Header
