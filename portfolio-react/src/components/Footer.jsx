
function Footer(){

    // pequeno script para o ano dinâmicocd
    let anoAtual = new Date().getFullYear();

    return(
        <>
            <footer className="text-center h-24">
                <p className="text-sm md:text-[var(--color05)] md:text-lg">
                    © {anoAtual} - lucassantDev Portfólio
                </p>
            </footer>
        
        </>
    )
}

export default Footer