import lucassantDev from '../assets/img/lucas.jpeg';
import { TextAnimate } from "@/components/ui/text-animate";
import { AuroraText } from "@/components/ui/aurora-text";

function FirstSection(){ 

    return  <>
        <section 
        className="
        px-2 w-full h-140 flex flex-col items-center justify-center bg-slate-900
        md:h-216
        ">
            <TextAnimate animation="blurInUp" by="character" duration={0.5} once as="h1" className=' text-gray-300 text-2xl mb-6 font-bold md:text-4xl'>
                Lucas Santana
            </TextAnimate>
            <img src={lucassantDev} 
            className='
                h-1/2 object-cover rounded-sm w-72
                md:w-3/4 md:h-124 md:object-cover md:rounded-md
            '
            />
            <h2 
            className="
                text-4xl font-bold mt-8 text-center w-4/5
                md:text-9xl md:w-2/3
            ">
                    {" "}
                <AuroraText 
                className='
                text-2xl font-bold
                md:text-7xl md:font-bold'
                colors={["oklch(86.5% 0.127 207.078)", "oklch(48.8% 0.243 264.376)"]}
                >
                    um dev curioso pelo mundo da tecnologia
                </AuroraText>
            </h2>
        
        </section>
    </>
  
}

export default FirstSection;