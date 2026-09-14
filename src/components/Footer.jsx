
function Footer() {

    const dataAtual = new Date().getFullYear();

    return (
        <>
            <footer className="w-full h-44 flex items-center justify-center font-bold text-blue-950">
                {dataAtual} © - lucassantDev
            </footer>
        
        </>
    )
}

export default Footer;