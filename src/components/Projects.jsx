
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
            repository: '',
            stack: ['JavaScript', 'HTML', 'CSS']
        }
    ]

    return (
        <>
            <section className='flex flex-col items-center justify-center h-screen w-full border bg-slate-900 px-2'>

                <h1 className='mb-6 text-3xl font-bold text-gray-300 md:text-4xl'>Projetos</h1>

                <div className='border flex flex-col gap-2 md:w-96'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id ?? index}
                            className='
                            h-64 w-64 shrink-0 rounded-lg border-2 border-slate-700 bg-slate-800 p-4 text-gray-200
                            md:w-96 md:h-96
                            '
                        >
                            <h2 className='mb-2 text-lg font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-400'>{project.description}</p>

                            {/* Lista das tecnologias usadas no projeto */}
                            <div className='mt-3 flex flex-wrap gap-2'>
                                {project.stack.map((tech) => (
                                    <span key={tech} className='rounded bg-slate-700 px-2 py-1 text-xs'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <hr className='mt-2 bg-slate-800'/>
                            <div className='mt-4'>
                                <a href={project.repository} traget='_blank'><button className='cursor-pointer p-2 bg-blue-500 rounded-sm transition duration-300 hover:-translate-y-1'>projeto</button></a> 
                                <a href={project.repository} traget='_blank'><button className='cursor-pointer p-2 bg-blue-500 rounded-sm ml-2 transition duration-300 hover:-translate-y-1'>repositório</button></a> 
                            </div>
                        </div>
                        
                    ))}
                </div>

            </section>
        </>
    )
}

export default Projects;