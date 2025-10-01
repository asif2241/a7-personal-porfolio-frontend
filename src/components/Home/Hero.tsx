/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import programmerImg from "../../assets/photopea.png.png"

export const Hero = () => {
    return (
        <div className="hero bg-[linear-gradient(256.24deg,rgba(255,195,152,0.2)_26.56%,rgba(255,234,190,0.3)_100%)] lg:min-h-90vh lg:my-5">
            <div className="hero-content flex-col lg:gap-5 pb-0 lg:flex-row-reverse">
                <Image width={400} height={350} className=" rounded-lg  " src={programmerImg} alt="Hero Img"></Image>

                <div className="lg:flex-1 px-5 py-4">
                    <p>I'm glad you're here.</p>
                    <h1 className="text-5xl  font-bold">Hello I’m Asif <br /> A Professional Web Developer</h1>
                    <p className="py-6">
                        I don't just write code – I build business solutions. As a full-stack developer, I bridge the gap between technical implementation and business objectives, creating applications that drive growth, improve efficiency, and engage users.

                        From database design to pixel-perfect UIs, I own the entire development lifecycle to deliver robust, production-ready applications.
                    </p>
                    <button className="btn btn-primary">Hire Me</button>
                </div>
            </div>
        </div>
    )
}
