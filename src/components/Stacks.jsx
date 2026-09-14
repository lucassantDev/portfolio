import { Link } from "react-router-dom";

function Stacks() {
    return (
        <>
            <section className="border w-full h-screen ">
                <p className="ml-12 mt-12 mb-12 font-semibold text-gray-300 text-md font-space trasition duration-300 hover:text-gray-600">
                    <Link to="/">Inicio</Link> / <span className="text-gray-400">Tecnologias e Ferramentas</span>
                </p>
            </section>
        </>
    )
}

export default Stacks;