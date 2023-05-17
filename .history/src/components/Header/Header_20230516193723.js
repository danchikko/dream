import './Header.css'
import logo from '../img/logoIUK.png'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" />
            <ul>
                <li>LEAD Академия</li>
                <li>LEAD АкадемияПартнёрская программа</li>
            </ul>
        </div>
    )
}

export default Header;