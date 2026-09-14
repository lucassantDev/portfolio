import { Link } from "react-router-dom";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Stacks() {
    
    const stacks = [
        {
            id: 1,
            icone: <FaReact />,
            nome: "React",
            cor: "text-blue-500"
        },
         {
            id: 2,
            icone: <IoLogoJavascript />,
            nome: "Javascript",
            cor: "text-yellow-500"
        },
        {
            id: 3,
            icone: <RiTailwindCssFill/>,
            nome: "Tailwind",
            cor: "text-sky-500"
        },
        {
            id: 4,
            icone: <FaGitAlt/>,
            nome: "Git",
            cor: "text-orange-500"
        },
        {
            id: 5,
            icone: <FaGithub/>,
            nome: "Github",
            cor: "text-slate-900"
        },
       
    ]

    return (
        <>
            <section className="border w-full h-screen">
                <p className="ml-12 mt-12 mb-12 font-semibold text-gray-300 text-md font-space trasition duration-300 hover:text-gray-600">
                    <Link to="/">Inicio</Link> / <span className="text-gray-400">Tecnologias e Ferramentas</span>
                </p>
                <div className="border w-full ">
                    {stacks.map((stack) => (
                        <div key={stack.id} className="my-2 w-full border flex items-center">
                            <div className={`ml-6 text-4xl ${stack.cor}`}>
                                {stack.icone}
                            </div>
                            <p className="text-sm font-bold ml-2 text-gray-300">{stack.nome}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Stacks;