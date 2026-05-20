
import { LinkedinIcon, GithubIcon } from 'lucide-react'
import lucassantDev from '../assets/img/lucassant-02.jpg'

function FirstSection(){ 


    const githubLink = ()=>{
        window.open('https://github.com/lucassantDev', 'target=blank')
    }

    const linkedinLink = () => {
        window.open('https://www.linkedin.com/in/lucassantdev', 'target=blank')
    }


    return  <>
        <section className="w-full h-screen flex flex-col items-center justify-evenly">
            <img src={lucassantDev} alt="imagem de Lucas Santana" className="w-90 h-96 object-cover rounded-xl"/>
            <h1 className='text-4xl text-center font-semibold text-[var(--color04)] p-2'>Um estudante curioso  <br />pelo mundo da tecnologia!</h1>

            {/* <img src={lucassantDev} alt="imagem de Lucas Santana" /> */}
            
            <div className='w-3/4 flex items-center justify-evenly'>
                <div className='cursor-pointer flex items-center justify-evenly w-1/4 h-16 text-xl border border-[var(--color05)] bg-white text-[var(--color05)] hover:bg-[var(--linkedinButtonColor)] hover:text-white transition-colors duration-200' onClick={linkedinLink}>
                    Linkedin
                    <LinkedinIcon className="icon"/>

                </div>
                <div className='cursor-pointer flex items-center justify-evenly w-1/4 h-16 text-xl border border-[var(--color05)] bg-white text-[var(--color05)] hover:bg-[var(--githubButtonColor)] hover:text-white transition-colors duration-200' onClick={githubLink}>
                    Github
                    <GithubIcon className='icon'/>
                </div>
            </div>
        </section>

        
    </>
  
}

export default FirstSection;