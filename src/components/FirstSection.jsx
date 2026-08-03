import lucassantDev from '../assets/img/lucas.jpeg';
import { TextAnimate } from "@/components/ui/text-animate";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

function FirstSection(){ 

    return  <>
        <section 
        className="
        px-2 w-full h-140 flex flex-col justify-center bg-slate-900
        md:h-216
        ">
            <TextAnimate animation="blurIn" as="h1" className=' text-gray-300 text-2xl mb-6 font-bold md:text-4xl'>
                Lucas Santana
            </TextAnimate>
            <img src={lucassantDev} 
            className='
                h-1/2 object-cover rounded-sm
                md:w-2/3 md:h-124 md:object-cover md:rounded-none
            '
            />
            <h2 
            className="
                text-3xl font-bold mt-6
                md:text-8xl
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