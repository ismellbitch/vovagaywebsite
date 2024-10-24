import styles from './ContactsHeader.module.scss'
import arrow from '../../assets/arrow.png'
import { Link } from 'react-router-dom'

function ContactsHeader() {
    return (
        <div className={styles.ContactsHeader}>
            <div className={styles.content}>
                <nav>
                    <Link to='/'>Главная</Link>
                    <img src={arrow} alt="" />
                    <Link to='/second'>Услуги</Link>
                    <img src={arrow} alt="" />
                    <Link to='/contacts'>Контакты</Link>
                </nav>
                <h1>Контакты</h1>
            </div>
        </div>
    )
}

export default ContactsHeader