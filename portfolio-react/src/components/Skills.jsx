

import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiN8N } from "react-icons/si";
import { RiPhpFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";


function Skills(){
    return (
        <>
            <section className="gap-8 w-full h-screen bg-[var(--color01)] flex flex-col items-center justify-center md:gap-12">
                <h1 className="text-2xl font-semibold text-[var(--color03)] md:font-semibold md:text-7xl">Skills</h1>
                <div className='w-1/2 grid grid-cols-2 gap-6 md:w-80 md:gap-12'>

                    <div className="skill-card mr-3 flex flex-col items-center text-[var(--color03)]">
                        <FaReact
                        className=" text-4xl md:text-6xl"
                        />
                        <p className="text-sm md:text-2xl">React</p>
                    </div>

                    <div className="skill-card mr-4 flex flex-col items-center text-[var(--color03)]">
                        <FiFigma
                        className="text-4xl md:text-6xl "
                        />
                        <p className="text-sm md:text-2xl">Figma</p>
                    </div>

                    <div className="skill-card mr-5 flex flex-col items-center text-[var(--color03)]">
                        <SiN8N
                        className="text-4xl md:text-6xl"
                        />
                        <p className="text-sm md:text-2xl">N8N</p>
                    </div>

                    <div className="skill-card flex flex-col items-center text-[var(--color03)]">
                        <RiPhpFill
                        className="text-4xl md:text-6xl"
                        />
                        <p className="text-sm md:text-2xl">PHP</p>
                    </div>

                    <div className="skill-card flex flex-col items-center text-[var(--color03)]">
                        <FaJsSquare
                        className="text-4xl md:text-6xl"
                        />
                        <p className="text-sm md:text-2xl">JS</p>
                    </div>

                    <div className="skill-card flex flex-col items-center text-[var(--color03)]">
                        <SiTailwindcss
                        className="text-4xl md:text-6xl"
                        />
                        <p className="text-sm md:text-2xl">Tailwind</p>
                    </div>

                    <div className="skill-card flex flex-col items-center text-[var(--color03)]">
                        <FaLaravel
                        className="text-4xl md:text-6xl"
                        />
                        <p className="text-sm md:text-2xl">Laravel</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;