import './Header.css'
import logo from '../img/logoIUK.png'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" />
            <div>
                <>LEAD Академия</>
            </div>
        </div>
    )
}

export default Header;