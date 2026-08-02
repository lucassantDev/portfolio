
function Footer(){

    let anoAtual = new Date().getFullYear();

    return(
        <>
            <footer className="flex items-center justify-center h-30 py-12 bg-slate-800">
                <p className="text-emerald-300">
                    © {anoAtual} - lucassantDev Portfólio
                </p>
            </footer>
        
        </>
    )
}

export default Footer