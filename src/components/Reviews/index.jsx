import styles from './Reviews.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect } from 'react';

function Reviews(){
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    
    let n;
    const space = useEffect(()=>{
        n = 50;
    },[])
    return(
        <section>
            <h2>Отзывы о нашей работе</h2>

            <Swiper
                className={styles.swiper}
                pagination={pagination}
                spaceBetween={24}
                slidesPerView={3}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={img1} alt="" />
                        <div className={styles.text}>
                            <h3>Blandit placerat eget ultrices gravida</h3>
                            <p>Nisl id blandit pharetra sodales vel diam vitae. Aliquet pulvinar nunc nam faucibus pellentesque etiam et. Ac iaculis velit amet pulvinar iaculis purus sociis in elementum. Eu ut magna tellus ipsum nibh volutpat aliquam at. Tempor sed habitant lectus quam tristique. Condimentum tortor massa est in eu enim. Metus nullam egestas eget libero vel. Amet nulla egestas et ipsum. Amet eu ac amet non aliquam et amet. Quis a auctor ut cras suspendisse in sem elementum nisl. Eu aliquet lobortis.</p>
                            <h4>ИВАНОВ ИВАН</h4>
                            <span className={styles.zalupa}><p>Коммерческий директор</p></span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={img2} alt="" />
                        <div className={styles.text}>
                            <h3>Platea libero netus vel mauris massa</h3>
                            <p>Ultrices enim vitae dignissim pharetra at. In id enim vulputate massa massa. Nisl quis purus amet mauris egestas porta non. Eget platea pharetra at leo faucibus nibh ipsum convallis euismod. Non quam turpis massa et cras facilisis ut blandit in. Faucibus sed in pellentesque morbi adipiscing proin consequat viverra vitae. Molestie pulvinar facilisi lorem pharetra. In turpis lectus non fermentum scelerisque lectus montes massa leo. Lectus in non tortor cursus. Ultrices sollicitudin cursus dictumst.</p>
                            <h4>ИВАНОВ ИВАН</h4>
                            <span className={styles.zalupa}><p>Коммерческий директор</p></span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={img3} alt="" />
                        <div className={styles.text}>
                            <h3>Vestibulum enim faucibus suspendisse quisque sit tellus sit. Congue neque viverra pharetra.</h3>
                            <p>Nam nunc suspendisse felis augue non pellentesque. Ut nam neque ornare pretium sodales feugiat gravida. Eleifend ut erat ornare ac. Non orci mi eu quam varius commodo mi blandit. Risus nec et amet tincidunt viverra sagittis nunc non. Lectus aliquet tempor pulvinar scelerisque odio condimentum at. Pharetra dolor elit eu aliquam tincidunt ipsum felis viverra. Enim dolor tellus.</p>
                            <h4>ИВАНОВ ИВАН</h4>
                            <span className={styles.zalupa}><p>Коммерческий директор</p></span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={img1} alt="" />
                        <div className={styles.text}>
                            <h3>Blandit placerat eget ultrices gravida</h3>
                            <p>Nisl id blandit pharetra sodales vel diam vitae. Aliquet pulvinar nunc nam faucibus pellentesque etiam et. Ac iaculis velit amet pulvinar iaculis purus sociis in elementum. Eu ut magna tellus ipsum nibh volutpat aliquam at. Tempor sed habitant lectus quam tristique. Condimentum tortor massa est in eu enim. Metus nullam egestas eget libero vel. Amet nulla egestas et ipsum. Amet eu ac amet non aliquam et amet. Quis a auctor ut cras suspendisse in sem elementum nisl. Eu aliquet lobortis.</p>
                            <h4>ИВАНОВ ИВАН</h4>
                            <span className={styles.zalupa}><p>Коммерческий директор</p></span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={img2} alt="" />
                        <div className={styles.text}>
                            <h3>Platea libero netus vel mauris massa</h3>
                            <p>Ultrices enim vitae dignissim pharetra at. In id enim vulputate massa massa. Nisl quis purus amet mauris egestas porta non. Eget platea pharetra at leo faucibus nibh ipsum convallis euismod. Non quam turpis massa et cras facilisis ut blandit in. Faucibus sed in pellentesque morbi adipiscing proin consequat viverra vitae. Molestie pulvinar facilisi lorem pharetra. In turpis lectus non fermentum scelerisque lectus montes massa leo. Lectus in non tortor cursus. Ultrices sollicitudin cursus dictumst.</p>
                            <h4>ИВАНОВ ИВАН</h4>
                            <span className={styles.zalupa}><p>Коммерческий директор</p></span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide}>
                        <img src={img3} alt="" />
                        <div className={styles.text}>
                            <h3>Vestibulum enim faucibus suspendisse quisque sit tellus sit. Congue neque viverra pharetra.</h3>
                            <p>Nam nunc suspendisse felis augue non pellentesque. Ut nam neque ornare pretium sodales feugiat gravida. Eleifend ut erat ornare ac. Non orci mi eu quam varius commodo mi blandit. Risus nec et amet tincidunt viverra sagittis nunc non. Lectus aliquet tempor pulvinar scelerisque odio condimentum at. Pharetra dolor elit eu aliquam tincidunt ipsum felis viverra. Enim dolor tellus.</p>
                            <h4>ИВАНОВ ИВАН</h4>
                            <span className={styles.zalupa}><p>Коммерческий директор</p></span>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </section>
    )
}

export default Reviews