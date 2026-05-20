import '../style/AboutMe.css'

function AboutMe(){
    return(
        <>
        <section className='flex flex-col items-center justify-center w-full h-screen bg-[var(--color05)] text-[var(--color04)] gap-8'>
                <h1 className='font-semibold text-7xl text-xl'>Sobre Mim</h1>
                <p className='text-4xl w-2/3 text-center'>
                    Me chamo Lucas Santana, tenho 20 anos, sou de Recife e atualmente estou no 3° período de Análise e Desenvolvimento de Sistemas na Faculdade Senac. <br/> <br/>

                    Recentemente conclui o curso Técnico de Desenvolvimento de Sistemas pelo SENAI, o que me ajudou tanto na parte técnica quanto na parte social. <br/> <br/>

                    Com o desejo de me tornar um desenvolvedor mais completo, busco me aperfeiçoar no ecossistema javascript, aprendendo e aplicando conceitos de react e nodejs! 
                </p>
        </section>
        </>
        
    );
            
}

export default AboutMe