import styles from './AboutUsText.module.scss'
import pdf from '../../assets/pdf.png'

function AboutUsText() {
    return (
        <div className={styles.AboutUsText}>
            <div className={styles.content}>
                <p>
                    Imperdiet arcu et nunc maecenas. In vestibulum urna in sed elementum placerat nunc aliquam purus. Fringilla purus donec at turpis. Et aliquam velit tortor ac egestas integer mi. Eu elementum faucibus in aenean eget eu. Penatibus sagittis urna et dolor viverra iaculis egestas habitant. Viverra tempor facilisi nisl eget a velit molestie. Viverra nec cras condimentum non scelerisque nec in tincidunt lacus. Lorem amet adipiscing vestibulum tincidunt. Facilisi egestas tortor purus ac porttitor pretium et est arcu.
                </p>
                <h2>Felis lectus libero nunc netus porttitor faucibus. Est justo.</h2>
                <p>
                    Dui faucibus sit a vitae at. Sagittis laoreet non sit in eget faucibus elementum. Sed euismod nisl diam arcu. Tellus egestas etiam non feugiat felis convallis duis ac. Nunc sit risus sed est et eget vel suspendisse tempor. Eros morbi scelerisque a in risus. Lectus vel vitae eget dictum mauris penatibus ac adipiscing habitant.<br /><br />
                    Nibh mattis mi tristique velit posuere turpis faucibus. Faucibus etiam bibendum non risus. Commodo fringilla elit vitae lobortis consectetur quisque et mauris. Metus in non semper leo ac in. Diam elementum quam magna.
                </p>
                <ol>
                    <li>сопровождение сделок, составление и аудит документации;</li>
                    <li>урегулирование споров с контрагентами в досудебном порядке;</li>
                    <li>защита прав и интересов клиента в судах всех инстанций;</li>
                    <li>оформление лицензий, сертификатов и разрешений контрольно-надзорных органов;</li>
                    <li>обучение и повышение квалификации персонала, пр.</li>
                </ol>
                <h2>Dui nec sagittis aenean bibendum tellus. Sapien ornare et.</h2>
                <p>
                    Tristique adipiscing ipsum volutpat at pulvinar nibh magna. Duis est tortor augue fermentum dolor amet blandit ligula in. Mauris in amet malesuada proin. Est scelerisque in dui gravida massa condimentum nisl. Diam eget lobortis et rutrum. Morbi pretium vulputate lacus purus aliquam pharetra. Est lorem sit et sit netus donec pretium eu. Massa maecenas adipiscing quis aliquet quis rhoncus quisque. Bibendum odio tristique dictum suspendisse viverra fermentum et. Etiam habitant quis ultrices non tortor est.<br /><br />
                    Tempus in lacus vehicula vulputate. Maecenas vitae sed amet augue feugiat volutpat sem lectus nunc. Arcu.
                </p>
                <div className={styles.pdfs}>
                    <div>
                        <img src={pdf} alt="" />
                        <h3>Реквизиты</h3>
                    </div>
                    <div>
                        <img src={pdf} alt="" />
                        <h3>Сертификаты</h3>
                    </div>
                    <div>
                        <img src={pdf} alt="" />
                        <h3>Отзывы</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsText