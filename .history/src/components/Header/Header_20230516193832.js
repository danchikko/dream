import './Header.css'
import logo from '../img/logoIUK.png'

const Header = () => {
    return (
        <div className='MainHeaderContainer'>
            <img src={logo} alt="logo" />
            <ul>
                <li>LEAD Академия</li>
                <li>Партнёрская программа</li>
                <li>Помощь</li>
            </ul>
        </div>
    )
}

export default Header;