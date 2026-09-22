import { Link } from "react-router-dom";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

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
            cor: "text-yellow-300"
        },
        {
            id: 3,
            icone: <RiTailwindCssFill/>,
            nome: "Tailwind",
            cor: "text-sky-500"
        },
        {
            id: 4,
            icone: <FaDatabase />,
            nome: "MySQL",
            cor: "text-gray-600"
        },
        {
            id: 5,
            icone: <FaGitAlt/>,
            nome: "Git",
            cor: "text-orange-500"
        },
        {
            id: 6,
            icone: <FaSquareGithub />,
            nome: "Github",
            cor: "text-slate-900"
        },

       
    ]

    return (
        <>
            <section className="w-full h-fit">
                <p className="ml-12 mt-12 mb-12  font-semibold text-gray-300 text-md font-space transition duration-300 hover:text-gray-600">
                    <Link to="/">Inicio</Link> / <span className="text-gray-400">Tecnologias e Ferramentas</span>
                </p>
                <div className="w-full flex items-start flex-col justify-center">
                    {stacks.map((stack) => (
                        <div key={stack.id} className="my-4 lg:my-6 ml-6 w-fit flex items-center">
                            <div className={`ml-6 text-4xl lg:text-9xl ${stack.cor}`}>
                                {stack.icone}
                            </div>
                            <p className="text-5xl font-bold ml-4 text-gray-300 lg:text-9xl lg:ml-8">{stack.nome}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Stacks;