import '../style/Footer.css'

function Footer(){

    // pequeno script para o ano dinâmico
    let anoAtual = new Date().getFullYear();

    return(
        <>
            <footer className="footer">
                <p>
                    © {anoAtual} - lucassantDev Portfólio
                </p>
            </footer>
        
        </>
    )
}

export default Footer