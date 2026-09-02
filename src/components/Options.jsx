import { Link } from "react-router-dom";

function Options() {
    return (
        <>
            <section className="w-full h-screen border flex flex-col items-start justify-center gap-12">
                <Link to="/sobre-mim"><h1 className="ml-12 text-blue-400 font-bold lg:text-blue-800 text-2xl lg:text-9xl lg:cursor-pointer lg:transition duration-200 hover:text-blue-400">sobre mim</h1></Link>
                <Link to="/tecnologias"><h1 className="ml-12 text-blue-400 font-bold lg:text-blue-800 text-2xl lg:text-9xl lg:cursor-pointer lg:transition duration-200 hover:text-blue-400">tecnologias e ferramentas</h1></Link>
                <Link to="/certificados"><h1 className="ml-12 text-blue-400 font-bold lg:text-blue-800 text-2xl lg:text-9xl lg:cursor-pointer lg:transition duration-200 hover:text-blue-400">certificados</h1></Link>
                <Link to="/projetos"><h1 className="ml-12 text-blue-400 font-bold lg:text-blue-800 text-2xl lg:text-9xl lg:cursor-pointer lg:transition duration-200 hover:text-blue-400">projetos</h1></Link>
            </section>
        </>
    )
}

export default Options;