import { useState, useEffect } from "react";
import styles from "./courses.module.css";

import image1 from "./imgs/6.png"
import image2 from "./imgs/4.png"
import image3 from "./imgs/12.png"
import image4 from "./imgs/3.png"

function Courses() {

    let imgList = [
        image1,
        image2,
        image3,
        image4
    ]

    const [image, setImage] = useState(0)

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setImage(image + 1)
            if(image === 3){
                setImage(0)
            }
        }, 10000)

        return () => clearInterval(imageInterval)
    }, [image])


    return(
        <div className={styles.courses}>
            <img 
                id="slider"
                className={styles.imageCourse}
                src={imgList[image]} 
                alt="courses_imgs"
            />
        </div>
    )
}

export default Courses;