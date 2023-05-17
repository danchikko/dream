import './Header.css'
import logo from '../img/logoIUK.png'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" />
            <ul>
                <>LEAD Академия</>
            </ul>
        </div>
    )
}

export default Header;