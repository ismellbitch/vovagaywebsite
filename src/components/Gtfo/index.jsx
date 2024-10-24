import { Link } from 'react-router-dom'
import gtfovid from '../../assets/gtfovid.mp4'
import styles from './Gtfo.module.scss'

function Gtfo(){
    return(
        <Link to="/" className={styles.gtfo}><video loop autostart autoPlay src={gtfovid}/></Link>
    )
}

export default Gtfo