import { TextReveal } from "@/components/ui/text-reveal"
import { AuroraText } from "@/components/ui/aurora-text"

function AboutMe(){
    return(
        <>
        <section className='border-2 px-2 w-full h-screen flex flex-col justify-center'>
            <h2 className='text-3xl font-bold text-gray-300 mb-6 md:text-4xl'>Sobre Mim</h2>
            <AuroraText 
            className='
            text-2xl font-semibold
            md:text-7xl md:font-bold'
            colors={["oklch(86.5% 0.127 207.078)", "oklch(48.8% 0.243 264.376)"]}
            >
                Atualmente trabalho na empresa Fone Ninja como suporte.
                Em 2025, me formei pelo SENAI como Tecnico em Desenvolvimento de Sistemas!
                Hoje, com 20 anos, estudo para me tornar um desenvolvedor cada vez melhor, resolvendo problemas e agregando valor.
            </AuroraText>
        </section>
        </>
        
    );
            
}

export default AboutMe;
