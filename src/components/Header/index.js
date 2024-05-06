import styles from "./header.module.css"

function Header() {
    return(
        <section className={styles.header}>
            <a href="/" className={styles.headerTitle} >FAETEC</a>

            <div className={styles.headerItems}>
                <h4>redes sociais</h4>
                <nav className={styles.itens}>
                    <div className={styles.tw}>
                        <i class="fa fa-twitter"></i>
                        <p>Twitter</p>
                    </div>
                    <div className={styles.fb}>
                        <i class="fa fa-facebook"></i>
                        <p>Facebook</p>
                    </div>
                    <div className={styles.yt}>
                        <i class="fa fa-youtube-play"></i>
                        <p>Youtube</p>
                    </div>
                </nav>
            </div>
            
        </section>
    )
}

export default Header;