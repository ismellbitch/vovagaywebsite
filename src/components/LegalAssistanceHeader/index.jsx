import { Link } from 'react-router-dom'
import styles from './LegalAssistanceHeader.module.scss'
import arrow from '../../assets/arrow.png'

function LegalAssistanceHeader() {
    return (
        <div className={styles.LegalAssistanceHeader}>
            <div className={styles.content}>
                <nav>
                    <Link to='/'>Главная</Link>
                    <img src={arrow} alt="" />
                    <Link to='/second'>Услуги</Link>
                    <img src={arrow} alt="" />
                    <Link to='/legal'>Юридическое сопровождение бизнеса</Link>
                </nav>
                <h1>Юридическое сопровождение бизнеса</h1>
            </div>
        </div>
    )
}

export default LegalAssistanceHeader