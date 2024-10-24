import styles from './ContactsText.module.scss'

function ContactsText() {
    return (
        <div className={styles.contactsText}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.block}>
                        <h3>Адрес</h3>
                        <p>Placerat sollicitudin mauris amet mi sem sed eu. Auctor ut urna in a. Ut.</p>
                    </div>
                    <div className={styles.block}>
                        <h3>Телефон</h3>
                        <p><span>+7 911 123 45 67</span></p>
                        <p><span>+7 (812) 123 45 67</span></p>
                    </div>
                    <div className={styles.block}>
                        <h3>Email</h3>
                        <p><span>info@test.ru</span></p>
                    </div>
                </div>
                <iframe src="https://yandex.ru/map-widget/v1/org/isaakiyevskiy_sobor/157776064978/?ll=30.306125%2C59.934081&z=14" width={636} height={480}></iframe>
            </div>
        </div>
    )
}

export default ContactsText