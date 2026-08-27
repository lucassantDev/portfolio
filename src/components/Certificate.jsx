import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"
import masterizandoTailwind from "../assets/img/Masterizando_Tailwind.jpg"
import Figma from "../assets/img/Figma.jpg"

function Certificate() {

    const certificados = [
        {
            id: 1,
            instituicao: "Rocketseat",
            certificadoImg: masterizandoTailwind,
            titulo: "Masterizando o Tailwind"
        },
        {
            id: 2,
            instituicao: "Rocketseat",
            certificadoImg: Figma,
            titulo: "Especialização em Figma"
        }
    ]

    return(
    <>
        <section className="w-full h-screen py-12 flex flex-col items-center justify-evenly">
            
            <h1 className='mb-6 text-3xl font-bold text-gray-300 md:text-4xl'>Certificados</h1>
            
            {/* className="certificate-fade" */}
            <ScrollVelocityContainer >
                <ScrollVelocityRow
                    baseVelocity={4}
                    direction={1}
                    scrollReactivity={false}
                    pauseOnHover
                >
                <div className="flex ml-2 mr-2 gap-4">
                    {certificados.map((certificado) =>
                        <div key={certificado.id} className="flex flex-col gap-2">
                            <span className="text-center text-sm font-light text-gray-300">
                                {certificado.instituicao} • {certificado.titulo}
                            </span>
                            <img
                                src={certificado.certificadoImg}
                                alt={`Certificado da ${certificado.instituicao}`}
                                className="w-92 lg:w-2xl"
                            />
                            
                        </div>
                    )}
                </div>
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
            
        </section>
    
    </>
    )
}

export default Certificate;