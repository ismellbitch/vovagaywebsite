import styles from './Company.module.scss'
import header1 from '../../assets/header1.png'
import header2 from '../../assets/header2.png'

function Company(){
    return(
        <div className={styles.main}>
                <div className={styles.content}>

                <h1>Консалтинговая компания Эксперт-Рос инвест</h1>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <img src={header1} alt="" />
                        <div>
                            <h3>Сопровождение бизнеса</h3>
                            <p>Aliquet ac leo arcu erat id sit rhoncus lectus. Donec pretium cursus pretium scelerisque quis posuere sed aliquet. Nibh convallis mi sodales pretium adipiscing ac. Turpis vitae augue.</p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <img src={header2} alt="" />
                        <div>
                            <h3>Дистанционное обучение</h3>
                            <p>Enim urna ac nunc consectetur sed donec. Facilisis bibendum suspendisse at pretium amet. Egestas a ultrices odio dignissim varius. Ipsum egestas nisl.</p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <img src={header2} alt="" />
                        <div>
                            <h3>Лицензирование компаний</h3>
                            <p>Urna arcu suspendisse nibh volutpat. Felis diam odio vitae sit. Eget purus sed tincidunt tortor at. Viverra adipiscing vitae iaculis sapien amet sit morbi tincidunt adipiscing. Sagittis eget.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company