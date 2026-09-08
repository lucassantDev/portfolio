import { Link } from "react-router-dom";
function AboutMe() {
    return (
        <>
            <section className="w-full h-screen border">
                <p className="ml-12 mt-12 mb-12 font-semibold text-gray-300 text-md font-space trasition duration-300 hover:text-gray-600">
                    <Link to="/">Inicio</Link> / <span className="text-gray-400">Sobre mim</span>
                </p>
                <h1 className="font-semibold text-2xl lg:text-6xl">Sobre Mim</h1>
                <p className="border lg:text-4xl">
                    Sou Lucas Ferreira, tenho 20 anos busco me tornar um desenvolvedor melhor cada dia que passa. <br />
                    Conclui o curso técnico de Desenvolvimento de Sistemas pelo SENAI em 2025! 
                </p>
            </section>
        </>
    )
}

export default AboutMe;