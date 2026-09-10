import { Link } from "react-router-dom";

function Certificate() {

    const certificates = [
        {
            id: 1,
            titulo: "Masterizando com Tailwind",
            instituicao: "Rocketseat"
        },
        {
            id: 2,
            titulo: "Figma",
            instituicao: "Rocketseat"
        }
    ]

    return (
        <>
            <section className="border w-full h-screen">
                <p className="ml-12 mt-12 mb-12 font-semibold text-gray-300 text-md font-space trasition duration-300 hover:text-gray-600">
                    <Link to="/">Inicio</Link> / <span className="text-gray-400">Certificados</span>
                </p>
                <div className="w-full h-fit flex flex-col items-center justify-center">
                    {certificates.map((certificate) => (
                        <div key={certificate.id} className="w-4/5 h-44 border">
                            <img src="" alt="" />
                            <p className="text-gray-300 text-3xl font-bold">{certificate.titulo}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Certificate;