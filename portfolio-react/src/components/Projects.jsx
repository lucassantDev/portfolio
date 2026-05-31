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
        <section className='border-2 w-full h-dvh flex flex-col items-center justify-evenly'>
            <h1 className='project-title'>Projetos</h1>

                {projects.map(project => (
                    // <h2>{project.title}</h2>
                    <div className='border-2  w-2/3 h-fit flex flex-col items-center rounded-xl'>
                        <h2 class='font-semibold'>
                            {project.title}
                        </h2>

                        <img src={project.image} alt="imagem referente ao projeto" className='object-cover w-2/3 h-1/2 border-1' />

                        <h3 class='text-center text-1xl w-2/3 border-2'>
                            {project.description}
                        </h3>

                        <div className='w-1/2 border-2'>
                            <a href={project.repository} target='_blank' class='bg-[var(--color01)] p-24 w-24 '>Repositório</a>
                            <a href={project.link} target='_blank' class='bg-[var(--color01)] p-24 w-24 '>Projeto</a>
                        </div>
                    </div> 
                ))}
        </section>
    </>
        
)
}

export default Projects;