import '../index.css'
import { useState } from 'react'

import listaDeCompras from '../assets/img/listaCompras.png';
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
        description: "Projeto desenvolvido através do curso da Rocketseat "
        }
    
    ])

    const [activeProject, setActiveProject] = useState(null)

    return(
    <>
        <section className=' w-full section-h flex flex-col items-center justify-evenly sm:flex-col'>
            <h1 className='firstSectionFont text-[var(--color00)] text-2xl pb-6 font-semibold md:font-semibold md:text-7xl '>Projetos</h1>

                <div className='w-fit p-1 flex flex-col items-center'>
                    {projects.map(project => (
                        <div key={project.id} className='w-full border-2 border-[var(--color00)] rounded-md h-7/8 p-2 flex items-center justify-center mt-4 mb-4'>

                            <div className='w-full h-64 rounded-md flex items-center justify-center'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-70 h-64 object-cover mt-2 rounded-md border-2 border-[var(--color00)] mb-2'
                                />
                            </div>

                            <div className='flex flex-col items-left'>
                                <h2 className='text-2xl font-semibold mb-4 text-[var(--color01)]'>
                                    {project.title}
                                </h2>

                                <p className='text-left'>{project.description}</p>
                                <div className='w-full h-24 flex items-center justify-left text-gray-200'>
                                    <a href={project.repository} target='_blank'  className='text-center w-36 bg-[var(--color01)] p-2 rounded-md hover:bg-[var(--color04)] hover:text-[var(--color05)]'>Repositório</a>
                                    <a href={project.link} target='_blank'  className='ml-2 text-center w-24 bg-[var(--color01)] p-2 rounded-md hover:bg-[var(--color04)] hover:text-[var(--color05)]'>Projeto</a>
                                </div>
                            </div>
                                
                        </div>
                    ))}
                </div>
        </section>
    </>
        
)
}

export default Projects;