import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";

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

    ]

    return (
        <>
            <section className=" w-full h-screen border flex flex-col items-center justify-center">
                <h1 className='text-9xl font-bold bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent'>Skills</h1>
                <div className='p-24 flex justify-beetwen'>
                    {skills.map((skill) =>
                        <div className='w-48 h-48 flex items-center justify-evenly ml-2 mr-2 shadow-lg transition duration-150 hover:ring-2 hover:ring-blue-400 hover:-translate-y-2 '>
                            <div className={`text-5xl flex items-center ${skill.color}`}>{skill.icon}</div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Skills;