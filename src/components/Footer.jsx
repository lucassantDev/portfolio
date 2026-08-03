
function Footer(){

    let anoAtual = new Date().getFullYear();

    return(
        <>
            <footer className="flex items-center justify-center h-30 py-12 bg-slate-900">
                <p className="text-blue-700">
                    © {anoAtual} - lucassantDev Portfólio
                </p>
            </footer>
        
        </>
    )
}

export default Footer