import '../style/Skills.css';

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
            <section className="section-skills">
                <h1>Skills</h1>
                <div className='div-stack '>
                    <div className="stack">
                        <FaReact
                        className="icon"
                        />
                        <p className="stack-name">React</p>
                    </div>
                    <div className="stack">
                        <FiFigma
                        className="icon"
                        />
                        <p className="stack-name">Figma</p>
                    </div>
                    <div className="stack">
                        <SiN8N
                        className="icon"
                        />
                        <p className="stack-name">N8N</p>
                    </div>
                    <div className="stack">
                        <RiPhpFill
                        className="icon"
                        />
                        <p className="stack-name">PHP</p>
                    </div>
                    <div className="stack">
                        <FaJsSquare
                        className="icon"
                        />
                        <p className="stack-name">JS</p>
                    </div>
                    <div className="stack">
                        <SiTailwindcss
                        className="icon"
                        />
                        <p className="stack-name">Tailwind</p>
                    </div>
                    <div className="stack">
                        <FaLaravel
                        className="icon"
                        />
                        <p className="stack-name">Laravel</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;