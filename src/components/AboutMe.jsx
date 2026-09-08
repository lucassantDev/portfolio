import { Link } from "react-router-dom";
function AboutMe() {
    return (
        <>
            <section className="w-full h-screen border">
                <p className="ml-12 mt-12 mb-12 font-semibold text-gray-300 text-md font-space trasition duration-300 hover:text-gray-600">
                    <Link to="/">Inicio</Link> / <span className="text-gray-400">Sobre mim</span>
                </p>
                <div className="w-full h-  border flex flex-col items-center">
                    <img src="./src/img/DSCF4591.JPG" className="w-5/6 object-cover h-144" alt="" />
                    <h1 className="mt-6 border w-5/6 font-bold text-2xl lg:text-left lg:text-6xl">Sobre Mim</h1>
                    <p className="border w-5/6 lg:text-4xl">
                        Sou Lucas Ferreira, tenho 20 anos busco me tornar um desenvolvedor melhor cada dia que passa. <br />
                        Conclui o curso técnico de Desenvolvimento de Sistemas pelo SENAI em 2025 onde desenvolvi habilidades solidas em banco de dados, desenvolvimento frontend,
                        conehcimento em git e github, scrum e kamban
                    </p>
                </div>
            </section>
        </>
    )
}

export default AboutMe;