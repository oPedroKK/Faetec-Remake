import styles from "./menu.module.css"

function Menu() {
    return(
        <nav className={styles.menu}>
            <a href="/">Pagina inicial</a>
            <a href="/">Institucional</a>
            <a href="/">Ações e programas</a>
            <a href="/">Participação social</a>
            <a href="/">Auditoriais</a>
            <a href="/">Convênios e transferências</a>
            <a href="/">Servidores</a>
            <a href="/">Receitas e despesas</a>
            <a href="/">Licitações e contratos</a>
            <a href="/">Informações classificadas</a>
            <a href="/">Serviço de informação ao cidadão - SIC</a>
            <a href="/">Perguntas frequentes</a>
            <a href="/">Dados Abertos</a>
        </nav>
    )
}

export default Menu;