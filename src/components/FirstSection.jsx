import { useEffect, useState } from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import lucassantDev from '../assets/img/lucas.jpeg';
import { AuroraText } from "@/components/ui/aurora-text";
import { KineticText } from "@/components/ui/kinetic-text";
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
        <section className="border-2 w-full h-screen flex flex-col items-center justify-center px-12">

            <img src={lucassantDev} className='h-1/2 object-cover rounded-sm'/>
            <h1 className="text-xl font-semibold">
                    {" "}
                <DiaTextReveal
                    // repeat
                    // delay={1}
                    delay={0.5}
                    duration={6}
                    colors={[ '#f6f6f6']}
                    text={["um dev curioso pelo mundo da tecnologia!"]}
                />
            </h1>
        
        </section>
    </>
  
}

export default FirstSection;