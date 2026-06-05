import '../index.css'
import { useState } from 'react'

import listaCompras from '../assets/img/projeto-listaDeCompras.png';
import Agrosense from '../assets/img/projeto-agrosense.png';

function Projects(){

     const [projects] = useState([
        {
        id: 1,
        title: "Agrosense",
        image: Agrosense,
        link: "https://agrosenseweb.vercel.app/",
        repository: "https://github.com/lucassantDev/agrosense-scripts",
        description: "Trabalho Agrosense desenvolvido para apresentação do projeto integrador do 2° semestre da Faculdade Senac. Utilizando React para sua estruturação!"
        },
        {
        id: 2,
        title: "Lista de compras",
        image: listaCompras,
        link: "https://lucassantdev.github.io/lista-compras/",
        repository: "https://github.com/lucassantDev/lista-compras", 
        description: "Projeto desenvolvido através do curso da Rocketseat Full-Stack. A ideia principal desse projeto era a manipulação do DOM com JavaScritp"
        }
    
    ])

    const [activeProject, setActiveProject] = useState(null)

    return(
    <>
        <section className=' w-full section-h flex flex-col items-center justify-evenly'>
            <h1 className='text-[var(--color00)] text-2xl font-semibold md:font-semibold md:text-7xl'>Projetos</h1>

                <div className='flex flex-col md:grid md:grid-cols-2 gap-6 w-2/3'>
                    {projects.map(project => (
                        <div key={project.id} className='w-full h-126 rounded-lg overflow-hidden flex flex-col items-center justify-between hover:border-[var(--color01)] transition-all'>
                            <h2 className='text-xl md:font-semibold md:text-3xl md:text-[var(--color01)] md:text-center md:py-4 md:mb-6'>
                                {project.title}
                            </h2>

                            <div className='relative group w-full h-72 md:h-80 border-2 border-[var(--color00)] rounded-lg overflow-hidden bg-center bg-cover' style={{ backgroundImage: `url(${project.image})` }}>
                                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 bg-gradient-to-t from-slate-950/90 to-transparent'>
                                    <p className='text-[var(--color03)] text-center font-semibold text-sm w-full'>
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            <div className='w-full flex flex-col items-center gap-3 px-4 py-4'>
                                <div className='flex p-10 flex-col sm:flex-row items-center justify-between w-full gap-3'>
                                    <div className='flex w-full gap-3 flex-col sm:flex-row'>
                                        <a href={project.repository} target='_blank' rel='noreferrer' className='rounded-lg flex-1 h-12 bg-[var(--color01)] hover:bg-[var(--color05)] text-[var(--color03)] flex justify-center items-center transition-colors'>Repositório</a>
                                        <a href={project.link} target='_blank' rel='noreferrer' className='rounded-lg flex-1 h-12 bg-[var(--color01)] hover:bg-[var(--color05)] text-[var(--color03)] flex justify-center items-center transition-colors'>Projeto</a>
                                    </div>

                                    <button type='button' onClick={() => setActiveProject(activeProject === project.id ? null : project.id)} className='md:hidden inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color01)] text-white shadow-lg transition-transform hover:scale-105'>
                                        ?
                                    </button>
                                </div>

                                <div className={`w-full overflow-hidden rounded-lg border border-[var(--color00)] bg-slate-950/90 text-[var(--color03)] text-sm transition-all duration-300 ${activeProject === project.id ? 'max-h-40 opacity-100 py-4 px-4' : 'max-h-0 opacity-0 py-0 px-4'}`}>
                                    <p className='text-center'>{project.description}</p>
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