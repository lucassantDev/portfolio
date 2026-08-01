import { useState } from 'react'

function Projects(){

    const projects = [
        {
            id: 1,
            title: 'Pomodoro',
            description: 'Projeto desenvolvido com Vue.js para lógica e Tailwind CSS para estilização.',
            stack: ['Vue', 'Tailwind']
        },
        {
            id: 2,
            title: 'Lista de Compras',
            description: 'Projeto da rocketseat com foco total na interatividade do javascript com a página.',
            stack: ['JavaScript', 'HTML', 'CSS']
        }, 
    ]

    return(
    <>
        <section className='w-full h-screen flex flex-col items-center bg-slate-700 before:w-64 before:h-px before:bg-emerald-300 '>
                <h1 className='text-3xl font-bold text-emerald-300 mt-14'>Projetos</h1>
        </section>
    </>
        
)
}

export default Projects;