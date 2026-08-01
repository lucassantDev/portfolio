import { useEffect, useState } from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import lucassantDev from '../assets/img/lucas.jpeg';
import { TextAnimate } from "@/components/ui/text-animate";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"

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
        <section 
        className="
        border-2 px-2 w-full h-screen flex flex-col justify-center 
        md:h-dvh
        ">
            <TextAnimate animation="blurIn" as="h1" className='text-slate-800 text-2xl mb-4 font-semibold md:text-4xl'>
                Lucas Santana
            </TextAnimate>
            <img src={lucassantDev} 
            className='
                h-1/2 object-cover rounded-sm
                md:w-3/4 md:h-120 md:object-cover md:rounded-none
            '
            />
            <h2 
            className="
                text-2xl font-bold mt-4
                md:text-7xl
            ">
                    {" "}
                <DiaTextReveal
                    // repeat
                    // delay={1}
                    delay={0.5}
                    duration={4}
                    colors={[ '#f6f6f6', 'oklch(42.4% 0.199 265.638)']}
                    textColor='oklch(54.6% 0.245 262.881)'
                    text={["um dev curioso pelo mundo da tecnologia!"]}
                />
            </h2>
        
        </section>
    </>
  
}

export default FirstSection;