import '../index.css'
import { useState } from 'react'

import listaDeCompras from '../assets/img/projeto-listaDeCompras.png';
import pomodoro from '../assets/img/pomodoro.png';

function Projects(){

     const [projects] = useState([
        {
        id: 1,
        title: "Pomodoro",
        image: pomodoro,
        link: '' ? '' : 'Ainda não há link do projeto' ,
        repository: "https://github.com/lucassantDev/front-pomodoro",
        description: "Trabalho desenvolvido para estudar a stack Vue.js"
        },
        {
        id: 2,
        title: "Lista de compras",
        image: listaDeCompras,
        link: "https://lucassantdev.github.io/lista-compras/",
        repository: "https://github.com/lucassantDev/lista-compras", 
        description: "Projeto desenvolvido através do curso da Rocketseat Full-Stack. A ideia principal desse projeto era a manipulação do DOM com JavaScritp"
        }
    
    ])

    const [activeProject, setActiveProject] = useState(null)

    return(
    <>
        <section className=' w-full section-h flex flex-col items-center justify-evenly sm:flex-col'>
            <h1 className='firstSectionFont text-[var(--color00)] text-2xl pb-6 font-semibold md:font-semibold md:text-7xl '>Projetos</h1>

                <div className='flex flex-col md:grid md:grid-cols-2 gap-6 w-2/3'>
                    {projects.map(project => (
                        <div key={project.id} className=''>
                            <h2 className=''>
                                {project.title}
                            </h2>

                            <div className='w-1/2 -h-1/2' style={{ backgroundImage: `url(${project.image})` }}></div>
                            <p className='text-[var(--color03)] text-center font-semibold text-sm w-full'>
                                {project.description}
                            </p>

                            <div className='w-full flex flex-col items-center gap-3 px-4 py-4'>
                                <div className='flex p-10 flex-col sm:flex-row items-center justify-between w-full gap-3'>
                                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                                        <a href={project.repository} target='_blank'  className=''>Repositório</a>
                                        <a href={project.link} target='_blank'  className=''>Projeto</a>
                                    </div>

                                </div>

                                <p className='text-left sm:text-center'>{project.description}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    </>
        
)
}

export default Projects;