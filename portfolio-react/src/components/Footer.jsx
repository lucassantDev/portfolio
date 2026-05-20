
function Footer(){

    // pequeno script para o ano dinâmicocd
    let anoAtual = new Date().getFullYear();

    return(
        <>
            <footer className="text-center h-24">
                <p className="text-[var(--color05)]">
                    © {anoAtual} - lucassantDev Portfólio
                </p>
            </footer>
        
        </>
    )
}

export default Footer