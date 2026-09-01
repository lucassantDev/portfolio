import lucassantDev from '../assets/img/lucas.jpeg';
import { TextAnimate } from "@/components/ui/text-animate";
import { AuroraText } from "@/components/ui/aurora-text";

function FirstSection(){ 

    return  <>
        <section className="w-full h-screen flex flex-col items-center justify-center bg-slate-900 border">
            {/* <img src="../src/assets/img/lucas.jpeg" alt="imagem de Lucas" className="rounded-full w-60 mb-2 lg:w-" /> */}
            <h1 className="text-4xl lg:text-9xl font-bold text-animation  text-gray-300">Lucas Santana</h1>
            <div className="w-4/5 lg:w-2/3  flex items-center justify-evenly text-animation">
                <hr className="border w-24 lg:w-92 text-gray-400" />
                <p className="font-semibold text-gray-400">Desenvolvedor |  Suporte</p>
                <hr className="border w-24 lg:w-92 text-gray-400" />
            </div>
        </section>
    </>
  
}

export default FirstSection;