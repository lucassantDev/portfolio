import { Link } from "react-router-dom";
import masterizandoTailwind from "../assets/img/certificate/masterizando_tailwind.jpg";
import formacaoFigma from "../assets/img/certificate/formacao_figma.jpg";

function Certificate() {

    const certificates = [
        {
            id: 2,
            titulo: "Masterizando com Tailwind",
            image: masterizandoTailwind,
            instituicao: "Rocketseat"
        },
        {
            id: 1,
            titulo: "Formação em Figma",
            image: formacaoFigma,
            instituicao: "Rocketseat"
        }
    ]

    return (
        <>
            <section className="border w-full h-fit">
                <p className="ml-12 mt-12 mb-12 font-semibold text-gray-300 text-md font-space trasition duration-300 hover:text-gray-600">
                    <Link to="/">Inicio</Link> / <span className="text-gray-400">Certificados</span>
                </p>
                <div className="w-full h-fit border py-12 flex flex-col items-center justify-evenly gap-12">
                    {certificates.map((certificate) => (
                        <div key={certificate.id} className="w-4/5 h-fit  flex flex-col items-center justify-evenly">
                            <img src={certificate.image} alt="" className="w-2/3 object-cover mt-6 shadow-xl"/>
                            <p className="text-blue-400 text-center text-2xl font-semibold mt-2">{certificate.titulo} • {certificate.instituicao}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Certificate;