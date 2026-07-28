import { useEffect, useState } from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import lucassantDev from '../assets/img/lucassantana.jpg';
import '../index.css';


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
        <section className="w-full h-screen flex flex-col items-center justify-center bg-slate-700 px-12">
            <img src={lucassantDev} className='w-48 rounded-full mt-6 border-3 border-emerald-500 select-none'/>
            <h1 className={`
                firstSectionFont text-3xl text-center font-bold bg-linear-to-r from-slate-200 to-emerald-500 bg-clip-text text-transparent select-none my-6
                md:text-8xl md:font-normal
                `}>
                Lucas Santana
            </h1>
            <p className='
                p-2 text-1xl text-center font-semibold bg-emerald-500 pl-2 pr-2 rounded-xl text-slate-50
                md:text-2xl md:font-normal
            '>Um dev curioso pela programação</p>
            <div className='flex w-64 h-24 items-center justify-evenly md:mt-6'>

                <button value="linkedin" 
                className='
                w-14 h-14 flex items-center justify-center border-2 border-emerald-200 bg-emerald-500 rounded-full transition duration-150 hover:-translate-y-1
                md:cursor-pointer md:w-18 md:h-18 
                '
                onClick={myLinks}>
                    <IoLogoLinkedin 
                    className='text-3xl text-slate-200 md:text-4xl'
                    />
                </button>

                <button value="github" 
                className='
                    w-14 h-14 flex items-center justify-center border-2 border-emerald-200 bg-emerald-500 rounded-full transition duration-150 hover:-translate-y-1
                    md:cursor-pointer md:cursor-pointer md:w-18 md:h-18
                    ' 
                    onClick={myLinks}>
                    <FaGithubSquare 
                    className='text-3xl text-slate-200 md:text-4xl'
                    />
                </button>
            </div>
        </section>
    </>
  
}

export default FirstSection;