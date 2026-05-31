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
        <section className='border-2 w-full section-h flex flex-col items-center justify-evenly'>
            <h1 className='text-[var(--color00)] text-2xl font-semibold md:font-semibold md:text-7xl'>Projetos</h1>

                <div class='flex flex-col w-2/3 justify-evenly md:flex lg:flex'>
                    {projects.map(project => (
                        // <h2>{project.title}</h2>
                        <div className='border-2 border-[var(--color00)] w-96 flex flex-col items-center rounded-xl p-6 gap-4'>
                            <h2 className='font-semibold text-2xl text-[var(--color01)]'>
                                {project.title}
                            </h2>
                            <img src={project.image} alt="imagem referente ao projeto" className='object-cover w-2/3 h-1/2 border-1 rounded-lg border-[var(--color01)]' />
                            <h3 className='text-center text-1xl w-2/3 border-2'>
                                {project.description}
                            </h3>
                            <div className='w-2/3 h-12 border-2 flex items-center justify-evenly'>
                                <a href={project.repository} target='_blank' className='rounded-lg bg-[var(--color01)] hover:bg-[var(--color05)] h-8 w-28 text-[var(--color03)] flex justify-center items-center'>Repositório</a>
                                <a href={project.link} target='_blank' className='rounded-lg bg-[var(--color01)] hover:bg-[var(--color05)] h-8 w-28 text-[var(--color03)] flex justify-center items-center'>Projeto</a>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    </>
        
)
}

export default Projects;