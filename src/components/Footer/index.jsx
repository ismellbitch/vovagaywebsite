import styles from './Footer.module.scss'
import logo from '../../assets/logo.png'
import vk from '../../assets/vk.png'
import mail from '../../assets/mail.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className={styles.top}>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
                <nav>
                    <Link to="/legal">Сопровождение бизнеса</Link>
                    <Link to="/second">Дист. обучение</Link>
                    <Link to="/second">Лицензирование</Link>
                    <Link to="/about_us">О нас</Link>
                    <Link to="/contacts">Контакты</Link>
                </nav>
                <img className={styles.round} src={vk} alt="" />
                <img className={styles.round} src={mail} alt="" />
                <button>ЗАКАЗАТЬ ЗВОНОК</button>
            </div>
            <div className={styles.bot}>
                <p>© СЕВЕРО-ЗАПАДНЫЙ ЮРИДИЧЕСКИЙ ЦЕНТР "АЛЬЯНС" . 2023 г.</p>
            </div>
        </footer>
    )
}

export default Footer