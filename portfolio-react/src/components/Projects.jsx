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

    return(
    <>
        <section className=' w-full section-h flex flex-col items-center justify-evenly'>
            <h1 className='text-[var(--color00)] text-2xl font-semibold md:font-semibold md:text-7xl'>Projetos</h1>

                <div className='grid grid-cols-2 gap-6 w-2/3 h-2/3'>
                    {projects.map(project => (
                            <div key={project.id} className='w-full h-4/5 rounded-lg overflow-hidden flex flex-col items-center justify-between'>
                            <h2 className='font-semibold text-3xl text-[var(--color01)] text-center py-4 mb-10'>
                                {project.title}
                            </h2>
                                <div className='relative group w-2/3 h-80 border-2 border-[var(--color00)] rounded-lg overflow-hidden bg-center bg-cover' style={{ backgroundImage: `url(${project.image})` }}>
                                    <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4' style={{ background: 'linear-gradient(to top, rgba(16, 16, 17, 0.85), transparent)' }}>
                                        <p className='text-[var(--color03)] text-center font-semibold text-sm w-full transform -translate-y-12'>
                                            {project.description}
                                        </p>
                                    </div>
                            </div>
                            <div className='flex gap-3 mr-24 mt-2'>
                                    <a href={project.repository} target='_blank' rel='noreferrer' className='rounded-lg w-24 bg-[var(--color01)] hover:bg-[var(--color05)] h-12 px-6 text-[var(--color03)] flex justify-center items-center'>Repositório</a>
                                    <a href={project.link} target='_blank' rel='noreferrer' className='rounded-lg w-24 bg-[var(--color01)] hover:bg-[var(--color05)] h-12 px-12 text-[var(--color03)] flex justify-center items-center'>Projeto</a>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    </>
        
)
}

export default Projects;