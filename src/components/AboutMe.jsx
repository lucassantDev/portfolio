import { Link } from "react-router-dom";
import LucasImg from "../assets/img/lucas.jpeg"
function AboutMe() {
    return (
        <>
            <section className="w-full h-fit">
                <p className="ml-12 mt-12 mb-12 font-semibold text-gray-300 text-md font-space trasition duration-300 hover:text-gray-600">
                    <Link to="/">Inicio</Link> / <span className="text-gray-400">Sobre mim</span>
                </p>
                <div className="w-full h-fit py-12 flex flex-col items-center">
                    <img src={LucasImg} className="lg:mb-8 w-5/6 shadow-md lg:shadow-xl object-cover lg:h-144" alt="Imagem de Lucas Santana" />
                    <h1 className="mt-6 w-5/6 font-semibold lg:font-extrabold text-xl lg:text-left lg:text-6xl">Sobre Mim</h1>
                    <p className="w-5/6 lg:text-4xl font-semibold text-gray-500">
                        Sou Lucas Ferreira, tenho 20 anos busco me tornar um desenvolvedor melhor cada dia que passa. <br /> <br/>
                        Conclui o curso técnico de Desenvolvimento de Sistemas pelo SENAI em 2025 onde desenvolvi habilidades solidas em banco de dados, desenvolvimento frontend,
                        conhecimento em git e github, scrum e kamban.
                    </p>
                </div>
            </section>
        </>
    )
}

export default AboutMe;