import './Header.css'
import logo from '../img/logoIUK.png'

const Header = () => {
    return (
        <div className='MainHeaderContainer'>
            <img src={logo} alt="logo" />
            <ul className='ul-callon'>
                <li>LEAD Академия</li>
                <li>Партнёрская программа</li>
                <li>Помощь</li>
            </ul>
            <div>
                <button>
                LEAD АкадемияПартнёрская программа
Вход
Регистрация
Помощь

Главная
LEAD Академия
Партнёры
Помощь
УДОБНЫЙ
КОНСТРУКТОР
ЧАТ-БОТОВ
Разработай сам или закажи под ключ

WhatsApp | Telegram | Viber | Вконтакте


                </button>
                <button>

                </button>
            </div>
        </div>
    )
}

export default Header;