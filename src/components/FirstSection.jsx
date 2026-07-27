import { useEffect, useState } from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import '../index.css'


function FirstSection(){ 
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 400)

        return () => clearTimeout(timer)
    }, [])

    function myLinks(event){
        const value = event.currentTarget.value

        if(value === 'linkedin'){
            console.log('botão do linkedin')
        }else{
            console.log('botão do github')
        }
    }

    return  <>
        <section className="w-full h-screen border flex flex-col items-center justify-center">
            <h1 className={`text-9xl font-bold transition duration-450 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`}>
                Lucas Santana
            </h1>
            <p className='mt-4 font-semibold'>um dev curioso pelo ecossistema da programação</p>
            <div className='flex w-64 h-24 items-center justify-evenly mt-6'>
                <button value="linkedin" className='p-5 border transition duration-150 hover:-translate-y-1' onClick={myLinks}>
                    <IoLogoLinkedin 
                    className='text-3xl'
                    />
                </button>
                <button value="github" className='p-5 border transition duration-150 hover:-translate-y-1' onClick={myLinks}>
                    <FaGithubSquare 
                    className='text-3xl'
                    />
                </button>
            </div>
        </section>
    </>
  
}

export default FirstSection;