import { Link } from "react-router-dom";

function Projects() {

    const myProjects = [
        {
            id: 1,
            nomeProjeto: "Pomodoro",
            descricao: "Projeto criado com Vue.js para aprender conceitos dessa tecnologia. Estrutura, "
        },
        {
            id: 2,
            nomeProjeto: "Lista de Compras",
            descricao: "Projeto do curso Full-Stack da Rocketseat, utilizando javascript, html e css. Manipulação do DOM, flexbox, criação de variáveis com css foram conceitos aprendidos nesse projeto"
        }
    ]
    
    return (
        <>
            <section className="border w-full h-fit">
                <p className="ml-12 mt-12 mb-12 font-semibold text-gray-300 text-md font-space trasition duration-300 hover:text-gray-600">
                    <Link to="/">Inicio</Link> / <span className="text-gray-400">Projetos</span>
                </p>

                <div className="border flex flex-col items-center justify-center gap-2">
                    {myProjects.map((project) => (
                        <div key={project.id} className="flex flex-col items-center justify-center w-3/4 h-4/5 border"></div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Projects;