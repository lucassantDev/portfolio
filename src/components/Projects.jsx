import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react'
import Pomodoro from '../assets/img/pomodoro.png';
import ListaCompras from '../assets/img/lista-de-compras.png'

function Projects() {


    // Lista de projetos que será exibida em formato de cards
    const projects = [
        {
            id: 1,
            title: 'Pomodoro',
            img: Pomodoro,
            description: 'Projeto desenvolvido com Vue.js para lógica e Tailwind CSS para estilização.',
            repository: 'https://front-pomodoro-smoky.vercel.app/',
            test: 'front-pomodoro-smoky.vercel.app',
            stack: ['Vue', 'Tailwind']
        },
        {
            id: 2,
            title: 'Lista de Compras',
            img: ListaCompras,
            description: 'Projeto da rocketseat com foco total na interatividade do javascript com a página.',
            test: 'https://lucassantdev.github.io/lista-compras/',
            repository: 'https://github.com/lucassantDev/lista-compras',
            stack: ['JavaScript', 'HTML', 'CSS']
        }
    ]

    
    const [projetoClicado, setProjetoClicado] = useState(null)
    function divProjeto(id){
        setProjetoClicado((atual) => (atual === id ? null: id))
    }


    return (
        <>
            <section className='flex flex-col items-center justify-center h-screen w-full  bg-slate-900 px-2'>

                <h1 className='mb-6 text-3xl font-bold text-gray-300 md:text-4xl'>Projetos</h1>

                <div className='h-fit  p-8 flex flex-col gap-2 md:w-1/2 '>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id ?? index}
                            layout
                            transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
                            className='
                            h-fit w-72 shrink-0 rounded-lg border-2 border-slate-700 bg-slate-800 p-4 text-gray-200
                            md:w-full md:h-fit
                            '
                        >
                            <h2 className='mb-2 text-lg font-semibold'>{project.title}</h2>
                            <AnimatePresence initial={false}>
                                {projetoClicado === project.id && (
                                    <motion.div
                                        key='project-details'
                                        initial={{ opacity: 0, height: 0, y: -10 }}
                                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                                        exit={{ opacity: 0, height: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className='overflow-hidden'
                                    >
                                        <img src={project.img} className='w-full' />
                                        <p className='text-sm text-gray-400'>{project.description}</p>

                                        <div className='mt-3 flex flex-wrap gap-2'>
                                            {project.stack.map((tech) => (
                                                <span key={tech} className='rounded bg-slate-700 px-2 py-1 text-xs'>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <hr className='mt-2 bg-slate-800'/>
                            <div className='mt-4 flex flex-wrap'>
                                <button className='w-fit cursor-pointer p-2 mr-2 bg-blue-500 rounded-sm transition duration-300 hover:-translate-0.5' onClick={() => divProjeto(project.id)}>
                                    {projetoClicado === project.id ?  'Fechar' : 'Ver'}
                                </button>
                                <a href={project.test} target='_blank' className='w-fit cursor-pointer p-2 bg-blue-500 rounded-sm transition duration-300 hover:-translate-y-0.5'>Projeto</a> 
                                <a href={project.repository} target='_blank' className='w-fit flex items-center justify-center px-2 cursor-pointer ml-2 bg-blue-500 rounded-sm transition duration-300 hover:-translate-y-0.5 '>Repositório</a> 
                
                            </div>
                        </motion.div>
                        
                    ))}
                </div>
      

            </section>
        </>
    )
}

export default Projects;