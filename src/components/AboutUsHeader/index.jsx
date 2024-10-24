import styles from './AboutUsHeader.module.scss'
import arrow from '../../assets/arrow.png'
import { Link } from 'react-router-dom'

function AboutUsHeader() {
    return (
        <div className={styles.AboutUsHeader}>
            <div className={styles.content}>
                <nav>
                    <Link to='/'>Главная</Link>
                    <img src={arrow} alt="" />
                    <Link to='/second'>Услуги</Link>
                    <img src={arrow} alt="" />
                    <Link to='/about_us'>О нашей компании</Link>
                </nav>
                <h1>О нашей компании</h1>
            </div>
        </div>
    )
}

export default AboutUsHeader