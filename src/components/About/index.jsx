import styles from './About.module.scss'
import city from '../../assets/city.png'

function About(){
    return(
        <section>
            <h2>О компании</h2>
            <p className={styles.desc}>
            Aliquam augue enim phasellus egestas nisl urna senectus ultricies. Vitae consequat odio faucibus eget suspendisse ultricies. Pharetra diam viverra ut adipiscing aliquam. Massa nulla lobortis nulla tellus ut ut elementum. Viverra fermentum adipiscing cras purus a. Vitae pretium lacus faucibus rhoncus nisi neque. Sagittis odio egestas suspendisse sed imperdiet urna.
            </p>
            <div className={styles.buttons}>
                <button>Команда</button>
                <button>Наши компетенции</button>
                <button>Профессионалы</button>
                <button>Взаимодействие с органами</button>
            </div>
            <div className={styles.block}>
                <p>Fringilla dignissim lectus velit amet nisi erat sit. Nisi facilisi pretium pharetra amet a mauris amet amet ut. Odio tellus et in imperdiet pellentesque id. Scelerisque et a proin nisi. Ut interdum lobortis porta enim viverra eleifend sodales mollis. Gravida in senectus lacinia eget nec. Mauris eu sed et quisque dignissim. Odio sed eget id vitae sollicitudin sodales augue egestas. Sapien elementum nisi est ornare aliquam viverra nibh amet donec.</p>
                <img src={city} alt="" />
            </div>
        </section>
    )
}

export default About