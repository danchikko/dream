import './Header.css'
import logo from '../img/logoIUK.png'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" />
            <div>
                <div>LEAD Академия</div>
            </div>
        </div>
    )
}

export default Header;