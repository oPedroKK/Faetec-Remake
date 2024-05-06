import styles from "./footer.module.css"
import logos from "./imgs/logo-faetec.png"

function Footer() {
    return(
        <section className={styles.footer}>
            <img className={styles.logo} src={logos} alt="faetec_rj_logo"/>
        </section>
    )
}

export default Footer;