import {useState, useEffect} from 'react';

function Projects() {


    // Lista de projetos que será exibida em formato de cards
    const projects = [
        {
            id: 1,
            title: 'Pomodoro',
            description: 'Projeto desenvolvido com Vue.js para lógica e Tailwind CSS para estilização.',
            repository: 'https://github.com/lucassantDev/front-pomodoro',
            test:'',
            stack: ['Vue', 'Tailwind']
        },
        {
            id: 2,
            title: 'Lista de Compras',
            description: 'Projeto da rocketseat com foco total na interatividade do javascript com a página.',
            test: '',
            repository: 'https://github.com/lucassantDev/lista-compras',
            stack: ['JavaScript', 'HTML', 'CSS']
        }
    ]

    
    const [projetoClicado, setProjetoClicado] = useState(null)
    function divProjeto(id){
        setProjetoClicado((atual) => (atual === id ? null: id))
    }

    function linkProjeto(link){
        window.open(link)
    }

    return (
        <>
            <section className='flex flex-col items-center justify-center h-screen w-full border bg-slate-900 px-2'>

                <h1 className='mb-6 text-3xl font-bold text-gray-300 md:text-4xl'>Projetos</h1>

                <div className='h-fit border p-8 flex flex-col gap-2 md:w-1/2 '>
                    {projects.map((project, index) => (
                        <div
                            key={project.id ?? index}
                            className='
                            h-fit w-64 shrink-0 rounded-lg border-2 border-slate-700 bg-slate-800 p-4 text-gray-200
                            md:w-full md:h-fit
                            '
                        >
                            <h2 className='mb-2 text-lg font-semibold'>{project.title}</h2>
                            {
                                projetoClicado === project.id && 
                                <p className='text-sm text-gray-400'>{project.description}</p>
                            }

                            {
                                projetoClicado === project.id && 
                                <div className='mt-3 flex flex-wrap gap-2'>
                                    {project.stack.map((tech) => (
                                        <span key={tech} className='rounded bg-slate-700 px-2 py-1 text-xs'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            }
                            <hr className='mt-2 bg-slate-800'/>
                            <div className='mt-4  flex flex-wrap'>
                                <button className='w-fit cursor-pointer p-2 mr-2 bg-blue-500 rounded-sm transition duration-300 hover:-translate-y-1' onClick={() => divProjeto(project.id)}>
                                    {projetoClicado === project.id ?  'Fechar' : 'Ver'}
                                </button>
                                <button className='w-fit cursor-pointer p-2 bg-blue-500 rounded-sm transition duration-300 hover:-translate-y-2' >Projeto</button> 
                                <button className='w-fit mt-2 mr-2 cursor-pointer p-2 bg-blue-500 rounded-sm  transition duration-300 hover:-translate-y-1'>Repositório</button> 
                            </div>
                        </div>
                        
                    ))}
                </div>
      

            </section>
        </>
    )
}

export default Projects;