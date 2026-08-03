import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { AuroraText } from "@/components/ui/aurora-text"

function Skills(){

    const skills = [
        {
            id: 1,
            stack: 'JavaScript',
            icon: <RiJavascriptFill/>,
            color: ['oklch(90.5% 0.182 98.111)', 'oklch(66.6% 0.179 58.318)']
        },
        {
            id: 2,
            stack: 'React',
            icon: <FaReact/>,
            color: ['oklch(37.9% 0.146 265.522)', 'oklch(48.8% 0.243 264.376)']
        },
        {
            id: 3,
            stack: 'MySQL',
            icon: <GrMysql />,
            color: ['oklch(87% 0 none)', 'oklch(70.5% 0.015 286.067)']
        },
        {
            id: 4,
            stack: 'Git',
            icon: <FaGitAlt />,
            color: ['oklch(64.6% 0.222 41.116)', 'oklch(83.7% 0.128 66.29)']
        },
        {
            id: 5,
            stack: 'Tailwind',
            icon: <RiTailwindCssFill />,
            color: ['oklch(86.5% 0.127 207.078)', 'oklch(60.9% 0.126 221.723)'] 
        },
        {
            id: 6,
            stack: 'PHP',
            icon: <FaPhp />,
            color: ['oklch(71.4% 0.203 305.504)', 'oklch(28.3% 0.141 291.089)', 'oklch(54.1% 0.281 293.009)']
        },

    ]


    return (
        <>
            <section className="
            border-2 px-2 w-full h-screen flex flex-col justify-center items-center bg-slate-900
            ">
                <h1 className='text-3xl font-bold text-gray-300 mb-6 md:text-4xl'>Tecnologias</h1>
                <div className='
                w-fit grid grid-cols-2 gap-4 rounded-md 
                md:grid md:py-6 md:'>
                    {skills.map((skill) =>
                    <div className='flex flex-col justify-center items-center mt-4 mb-4'>
                            <div className={`text-1xl items-center mb-2 text-gray-300 md:text-3xl `}>{skill.icon}</div>
                            <AuroraText 
                            className='
                            text-2xl font-bold
                            md:text-7xl' 
                            colors={[skill.color]}>
                                {skill.stack}
                            </AuroraText>
                            </div>

                        //  bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent
                    )}
                </div>
            </section>
        </>
    )
}

export default Skills;