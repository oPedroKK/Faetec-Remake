import { useEffect, useState } from "react";
import styles from "./slider.module.css"

import nextButtonImage from "./imgs/right.png"
import prevButtonImage from "./imgs/back.png"

import image0 from "./imgs/AtualizacaoDoBannerEAD.jpeg"
import image1 from "./imgs/BannerCodigoEtica.png"
import image2 from "./imgs/BannerDoEstagioExterno2024.jpeg"
import image3 from "./imgs/BannerIntegridadeFAETEC.png"
import image4 from "./imgs/BannerSisu2024.png"
import image5 from "./imgs/MulheresMil2024atualizado.jpeg"
import image6 from "./imgs/BannerPRONATECmulheresmil.png"

function Slider() {

    let announces = [
        image0,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ]

    const [prevImage, setPrevImage] = useState(0);
    const [imageId, setImageId] = useState(1);
    const [nextImage, setNextImage] = useState(0);

    const totalImages = announces.length - 1;

    useEffect(() => {
        const announceUpdate = setInterval(() => {
            setImageId(imageId !== totalImages ? imageId + 1 : 0)
        }, 5000)

        setPrevImage(imageId <= 0 ? totalImages : imageId - 1)
        setNextImage(imageId === totalImages ? 0 : imageId + 1)

        return () => clearInterval(announceUpdate);
    }, [imageId, prevImage, totalImages, nextImage])

    const nextButton = () => {
        setImageId(imageId !== totalImages ? imageId + 1 : 0)
    }

    const prevButton = () => {
        setImageId(imageId !== 0 ? imageId - 1 : totalImages)
    }

    return (
        <section className={styles.news}>
            <h1>Novidades</h1>
            <div className={styles.slider}>

                <button onClick={prevButton} className={styles.buttonImage}>
                    <img src={prevButtonImage} alt="button_image_back"/>
                </button>

                <div>
                    <img src={announces[prevImage]} id="otherImage" className={styles.imageMini} alt="last" />
                    <img src={announces[imageId]} id="mainImage" className={styles.imageMain} alt="main" />
                    <img src={announces[nextImage]} id="otherImage" className={styles.imageMini} alt="next" />
                </div>

                <button onClick={nextButton} className={styles.buttonImage}>
                    <img src={nextButtonImage} alt="button_image_next"/>
                </button>

            </div>
        </section>
    )
}

export default Slider;