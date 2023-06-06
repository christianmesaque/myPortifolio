import doctorcare from "../assets/doctorcare.png"
import capsula from "../assets/capsula.png"
import Image from "next/image"

export default function Projects() {
    return (
        <div>
            <h1 className="md:text-4xl text-3xl font-alt my-20 text-center uppercase text-gray-200">PROJETOS</h1>
            <div className="grid grid-row-2 md:grid-cols-2 my-10 mx-2">
                <div className="flex flex-col items-center">
                    <Image src={doctorcare} width={650} alt="Mockup DoctorCare" />
                    <div className="flex flex-col items-center">
                        <a href="#"><h1 className="md:text-4xl text-3xl font-alt uppercase text-gray-200 hover:text-gray-700 transition-colors">Site doctorcare</h1></a>
                        <p className="text-gray-100 uppercase">HTML, CSS e Javascript</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={capsula} width={650} alt="Mockup Capsula" />
                    <div className="flex flex-col items-center">
                        <a href="#"><h1 className="md:text-4xl text-3xl font-alt uppercase text-gray-200 hover:text-gray-700 transition-colors">Cápsula do tempo</h1></a>
                        <p className="text-gray-100 uppercase">React, Typescript, Node JS e tailwindCSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}