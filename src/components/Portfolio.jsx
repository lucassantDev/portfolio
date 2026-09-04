import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Portfolio() {
    return (
        <>
            <section className="w-full h-screen flex flex-col items-center justify-center">
                <h1 className="mb-44 lg:mb-72 font-extrabold text-5xl lg:text-9xl">
                    portfólio
                </h1>

                <div className=" -mb-44 w-full h-24 lg:-mb-92 flex flex-col ">
                    <p className="text-sm font-semibold ml-6">Lucas Santana</p>
                    <div className="text-gray-400 flex items-center">
                        <p className="text-sm  ml-6 my-2">Desenvolvedor | Suporte</p>
                        <hr className="w-44 lg:w-2xl ml-2 mt-1"/>
                    </div>
                    <div className="flex items-center ml-6 gap-2"> 
                        <div className="flex justify-center cursor-pointer">
                            <FaLinkedin size={30} />
                            {/* <p className="text-sm">Linkedin</p> */}
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <FaGithubSquare size={30}/>
                            {/* <p className="text-sm text-gray-400">Github</p> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;