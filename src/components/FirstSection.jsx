import { LinkedinIcon, GithubIcon } from 'lucide-react'
import lucassantDev from '../assets/img/lucassant-02.jpg'
import '../index.css'

function FirstSection(){ 


    const githubLink = ()=>{
        window.open('https://github.com/lucassantDev', 'target=blank')
    }

    const linkedinLink = () => {
        window.open('https://www.linkedin.com/in/lucassantdev', 'target=blank')
    }


    return  <>
        <section className="firstSection w-full h-screen flex flex-col items-center justify-evenly">
            <img src={lucassantDev} alt="imagem de Lucas Santana" className="rounded-xl object-cover w-48 h-72 md:w-80 md:h-96  lg:w-94"/>
            <h1 className='firstSectionFont text-[var(--color05)] p-2 text-center text-2xl font-semibold md:font-normal md:text-6xl md:text-center'>Um estudante curioso  <br />pelo mundo da tecnologia!</h1>

            {/* <img src={lucassantDev} alt="imagem de Lucas Santana" /> */}
            
            <div className='w-full flex items-center gap-2  md:w-3/4 md:flex md:items-center md:justify-evenly lg:w-4/5'>
                <div className='bg-[var(--linkedinButtonColor)] text-[var(--color03)] w-64 h-12 flex items-center justify-evenly md:border md:border-[var(--color05)] md:bg-white md:text-[var(--color05)] md:cursor-pointer md:flex md:items-center md:justify-evenly md:w-1/4 md:h-16 md:text-xl  md:hover:bg-[var(--linkedinButtonColor)] md:hover:text-white md:transition-colors duration-200' onClick={linkedinLink}>
                    Linkedin
                    <LinkedinIcon className="icon"/>

                </div>
                <div className=' bg-[var(--githubButtonColor)] text-[var(--color03)] w-64 h-12 flex items-center justify-evenly md:border md:border-[var(--color05)] md:bg-white md:text-[var(--color05)] md:cursor-pointer md:flex md:items-center md:justify-evenly md:w-1/4 md:h-16 md:text-xl  md:hover:bg-[var(--githubButtonColor)] md:hover:text-white md:transition-colors duration-200' onClick={githubLink}>
                    Github
                    <GithubIcon className='icon'/>
                </div>
            </div>
        </section>

        
    </>
  
}

export default FirstSection;