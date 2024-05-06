import styles from "./others.module.css"

import image0 from "./imgs/BANNER-UNIFAETEC.jpg"
import image1 from "./imgs/Banner_ouve_rj.png"
import image2 from "./imgs/Novos_Caminhos_banner_lateral_site.jpg"
import image3 from "./imgs/PortalDaTransparencia102023.png"
import image4 from "./imgs/WhatsAppImage2022-08-30at12.09.42.jpeg"
import image5 from "./imgs/banner_lateral_site.jpg"

function Others() {

    let otherFonts = [
        {name: "GestEdu_IMAGE", image: image0},
        {name: "VirtuBibl_IMAGE", image: image1},
        {name: "NovosCam_IMAGE", image: image2},
        {name: "UniCorp_IMAGE", image: image3},
        {name: "PTransparencia_IMAGE", image: image4},
        {name: "OuveRJ_IMAGE", image: image5}
    ]

    return(
        <section className={styles.others}>
            <h1 className={styles.othersTitle}>Outras fontes faetec</h1>
            <div className={styles.othersFontsSite}>
                {
                    otherFonts.map((adress, index) => (
                        <img className={styles.othersImages} src={adress.image} alt={adress.name} key={index}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Others;