import styles from "./news.module.css"
//import notices from "../../json/news.json"

import image0 from "./imgs/aulainauguraleteabgrupodreamers2024.3.jpeg"
import image1 from "./imgs/faetecpaiolorganizaeventodemodelosemniteroi.2_thumb.jpeg"
import image2 from "./imgs/jkparticipadeeventosesc.3_thumb.jpeg"
import image3 from "./imgs/producaodemoda2024eter.jpeg"

function News() {

    let notices = [
        {
            "title": "Com presença de Rodolfo Medina, alunos da ETE Adolpho Block assistem palestra in...",
            "description": "Parceria entre a escola vinculada à Faetec e Grupo Artplan chega ao terceiro ano oferecendo experiências diferenciadas aos alunos do curso de publicidade Vivenciar o cotidiano de uma agência de publicidade [...]",
            "image": image0
        },
        {
            "title": "Alunos da ETE Juscelino Kubitschek participam de evento em promoção da saúde e b...",
            "description": "No último dia 12 de abril, os alunos dos cursos Técnicos de Análises Clínicas e de Guia de Turismo da Escola Técnica Estadual Juscelino Kubitschek (ETEJK), unidade da Fundação de  [...]",
            "image": image1
        },
        {
            "title": "Faetec Nilópolis é convidada para organizar evento de Escola de Modelos",
            "description": "A Faetec Paiol, situada em Nilópolis e vinculada à Fundação de Apoio à Escola Técnica (Faetec), foi convidada pela 'School Models', uma escola de modelos em Niterói, para auxiliar [...]",
            "image": image2
        },
        {
            "title": "Alunos do curso de Produção de Moda da Faetec assistem palestra sobre Decoloniza...",
            "description": "Atividade fez parte das ações do Fashion Revolution, movimento global que existe desde 2014 e que trabalha para que a moda conserve e restaure o meio ambiente, priorizando as pessoas acima [...]",
            "image": image3
        }
    ]

    return (
        <section className={styles.notices}>
            <h1>Notícias</h1>
            <div className={styles.news}>
                {
                    notices.map((notice, index) => (

                        <div key={index} className={styles.notice_body}>
                            <h2>{notice.title}</h2>
                            <div style={{ display: "flex" }}>
                                <img alt="notice_image" src={notice.image} />
                                <p>{notice.description}</p>
                            </div>
                        </div>
                    ))

                }
            </div>
            <h3 className={styles.moreNotices}>veja mais notícias</h3>
        </section>
    );
}

export default News;