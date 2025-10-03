/* eslint-disable react/no-unescaped-entities */
import { Fade } from "react-awesome-reveal";
import whyChooseImg from "../../assets/pexels-fotios-photos-16129705 (1).jpg";
import Image from "next/image"


const WhyChooseMe = () => {
    return (
        <div>
            <div
                style={{ backgroundImage: "url('/coloredshape.svg')" }}
                className="lg:h-[800px] w-full object-cover bg-cover flex justify-center items-center  "
            >
                <div className="max-w-[1500px] w-full  mx-auto  flex flex-col-reverse lg:flex-row justify-between">
                    {/* text content  */}

                    <div className="text-white justify-center lg:w-[50%] w-full lg:pt-20 py-5 px-5">
                        <Fade cascade damping={0.5}>
                            <button className="bg-transparent  border-2 font-semibold text-xl py-2 px-4 border-white my-5">
                                Why Choose Me
                            </button>
                            <h2 className="lg:text-4xl text-3xl font-semibold mb-5">
                                Building more than just websites— <br />I build reliable, scalable, and impactful digital experiences.
                            </h2>
                            <p className="text-lg font-light mb-5">
                                With a passion for clean code, modern UI/UX, and performance optimization, I bring end-to-end development expertise to the table. From responsive frontends to robust backend systems, I focus on delivering real-world results that drive engagement and solve problems. Whether you're a startup or an individual client, my work is tailored to meet your goals with precision and efficiency.
                            </p>
                        </Fade>
                        <div >
                            <Fade cascade damping={0.5}>
                                <div>
                                    <Image width={100} height={100}
                                        src="https://img.icons8.com/?size=100&id=4waEOQFOTv0s&format=png&color=000000"
                                        alt=""
                                    />
                                </div>

                            </Fade>
                        </div>
                    </div>

                    {/* img  */}
                    <div className=" lg:w-[50%]   flex items-center p-5 justify-center  ">
                        <Image width={600} height={400} className=" rounded-2xl lg:max-w-[600px] md:w-9/12" src={whyChooseImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseMe;
