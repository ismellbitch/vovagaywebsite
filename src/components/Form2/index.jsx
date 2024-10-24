import styles from './Form.module.scss'

function Form2() {
    return (
        <section className={styles.form}>
            <div className={styles.content}>
                <h2>
                    Вы нуждаетесь в консультации или у вас возникли вопросы?<br /><br />
                    Напишите нам несколько слов по вашей теме, и мы свяжемся с вами.
                </h2>
                <form action="">
                    <h3>
                        <span>Бесплатный</span><br /> аудит документации
                    </h3>
                    <input type="text" className={styles.textinput} placeholder='Имя' />
                    <input type="text" className={styles.textinput} placeholder='Email' />
                    <input type="text" className={styles.textinput} placeholder='Телефон' />
                    <div className={styles.checkblock}>
                        <input type="checkbox" className={styles.checkinput} name="" id="" />
                        <p>Согласие на обработку персональных данных</p>
                    </div>
                    <button>
                        ОТПРАВИТЬ
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Form2