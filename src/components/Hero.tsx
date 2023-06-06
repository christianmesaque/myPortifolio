import Image from "next/image"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import curriculo from "../assets/curriculo.svg"
import "lucide-react"
import { ChevronsDown } from "lucide-react"

export default function Hero() {
    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="flex flex-col mx-4 md:mx-5">
                <p className="font-alt  text-sm md:text-2xl text-gray-200">OLÁ 👋 EU SOU O CHRISTIAN MESAQUE</p>
                <div className="flex gap-3 md:gap-12">
                    <h1 className="font-alt text-blue-100 text-5xl md:text-8xl uppercase">Fullstack</h1>
                    <div className="flex items-center gap-1 md:gap-4">
                        <a href="https://www.linkedin.com/in/christian-mesaque" target={"_blank"}><Image src={linkedin} width={32} alt="Linkedin" className="w-6 md:w-8"/></a>
                        <a href="https://github.com/christianmesaque" target={"_blank"}><Image src={github} width={32} alt="Github" className="w-6 md:w-8"/></a>
                        <a href="#"><Image src={curriculo} width={32} alt="Curriculo" className="w-6 md:w-8"/></a>
                    </div>
                </div>
                <h1 className="font-alt text-blue-100 text-6xl md:text-9xl uppercase">Developer</h1>
                <div className="text-gray-200 font-sans">
                    <p className="text-right md:text-lg text-xs">TENHO 20 ANOS SOU ESTUDANTE E DESENVOLVEDOR</p>
                    <p className="text-left md:text-center md:text-lg text-xs">DE SOFTWARE BUSCANDO A PRIMEIRA OPORTUNIDADE.</p>
                </div>
                <div className="inline-flex relative top-56 animate-bounce justify-center">
                    <ChevronsDown width={42} height={42}/>
                </div>
            </div>
        </div>
    )
}