import { useEffect, useState } from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import '../index.css'


function FirstSection(){ 
    function myLinks(event){
        const value = event.currentTarget.value

        if(value === 'linkedin'){
            window.open('https://www.linkedin.com/in/lucassantdev/')
        }else{
            window.open('https://github.com/lucassantDev')
        }
    }

    return  <>
        <section className="w-full h-screen flex flex-col items-center justify-center bg-slate-700">
            <img src="../src/assets/img/lucassantana.jpg" class='w-48 rounded-full mb-12'/>
            <h1 className={`firstSectionFont text-3xl font-bold bg-gradient-to-r from-slate-200 to-emerald-500 bg-clip-text text-transparent select-none `}>
                Lucas Santana
            </h1>
            <p className='mt-6 text-1xl font-normal bg-emerald-500 p-2 mb-6 pl-4 pr-4 rounded-xl text-slate-50'>um dev curioso pela programação</p>
            <div className='flex w-64 h-24 items-center justify-evenly'>
                <button value="linkedin" className='p-5 border-2 border-emerald-200 bg-emerald-500 rounded-full transition duration-150 hover:-translate-y-1' onClick={myLinks}>
                    <IoLogoLinkedin 
                    className='text-3xl text-slate-200'
                    />
                </button>
                <button value="github" className='p-5 border-2 border-emerald-200 bg-emerald-500 rounded-full transition duration-150 hover:-translate-y-1' onClick={myLinks}>
                    <FaGithubSquare 
                    className='text-3xl text-slate-200'
                    />
                </button>
            </div>
        </section>
    </>
  
}

export default FirstSection;