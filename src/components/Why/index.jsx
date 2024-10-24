import styles from './Why.module.scss'
import shot from '../../assets/shot.png'
import graph from '../../assets/graph.png'

function Why(){
    return(
        <section>
            <h2>Почему мы?</h2>
            <div className={styles.gigablock}>
                <div className={styles.left}>
                    <div>
                        <div className={styles.zlpa}>
                            <img src={shot} alt="" />
                            <p>Достижение поставленных клиентом целей</p>
                        </div>
                        <div className={styles.zlpa}>
                            <img src={shot} alt="" />
                            <p>Нацелены на долгосрочное сотрудничество</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.zlpa}>
                            <img src={shot} alt="" />
                            <p>Лояльная ценовая политика</p>
                        </div>
                        <div className={styles.zlpa}>
                            <img src={shot} alt="" />
                            <p>Всегда готовы идти навстречу клиенту</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.zlpa}>
                            <img src={shot} alt="" />
                            <p>Высокая квалификация и практический опыт</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.cool_text}>
                    <p>
                    Non diam laoreet faucibus amet ut lacus sed convallis viverra. At purus mattis in consectetur vel.
                    </p>
                    </div>
                    <img src={graph} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Why