import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";

function Skills(){

    const skills = [
        {
            id: 1,
            stack: 'JavaScript',
            icon: <RiJavascriptFill/>,
            color: 'text-yellow-400'
        },
        {
            id: 2,
            stack: 'React',
            icon: <FaReact/>,
            color: 'text-blue-600'
        },
        {
            id: 3,
            stack: 'MySQL',
            icon: <GrMysql />,
            color: 'text-gray-500'
        },
        {
            id: 4,
            stack: 'Git',
            icon: <FaGitAlt />,
            color: 'text-orange-600'
        },
        {
            id: 5,
            stack: 'Tailwind',
            icon: <RiTailwindCssFill />,
            color: 'text-cyan-600'
        },
        {
            id: 6,
            stack: 'PHP',
            icon: <FaPhp />,
            color: 'text-purple-800'
        },

    ]


    return (
        <>
            <section className="w-full h-screen flex flex-col items-center bg-slate-700 before:w-64 before:h-px before:bg-emerald-300">
                <h1 className='text-3xl font-bold text-emerald-300 mt-12 md:text-4xl'>Tecnologias</h1>
                <div className='mt-12 p-10 border-2 border-emerald-300 grid grid-cols-2 gap-4 rounded-md md:grid-cols-3'>
                    {skills.map((skill) =>
                        <div className='
                        w-24 h-24 pt-2 bg-slate-50 rounded-md flex flex-col items-center justify-evenly ml-2 mr-2 shadow-lg transition duration-150 hover:ring-2 hover:ring-emerald-300 hover:-translate-y-2 
                        md:w-44 md:h-44
                        '>
                        <div className={`text-4xl flex items-center md:text-5xl ${skill.color}`}>{skill.icon}</div>
                        <p className='text-sm text-slate-400'>{skill.stack}</p>
                        </div>

                        //  bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent
                    )}
                </div>
            </section>
        </>
    )
}

export default Skills;