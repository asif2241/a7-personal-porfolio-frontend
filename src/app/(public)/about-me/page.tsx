import Image from 'next/image';
import React from 'react';
import AsifImg from "../../../assets/WhatsApp Image 2025-02-17 at 09_bria (1).png"
import MySkills from '@/components/Home/MySkills';
import EducationlInfo from '@/components/aboutMe/EducationlInfo';
import { Metadata } from 'next';
import { Fade, Slide } from 'react-awesome-reveal';


export const metadata: Metadata = {
    title: "About Me",
    description: "Meet Asif, a passionate Full Stack Developer specializing in React, Next.js, and Node.js. Discover my skills, philosophy, and professional journey."
}

const AboutPage = () => {


    const personalInfo = {
        name: "Asiful Islam Shaheen",
        title: "Full Stack Developer",
        email: "asifislam2241@gmail.com",
        phone: "+880 1585414596",
        location: "Chattogram, Bangladesh",
        bio: "Passionate full-stack developer with expertise in modern web technologies. I love building scalable applications and solving complex problems.",
        github: "https://github.com/asif2241",
        linkedin: "https://linkedin.com/in/asif2241",
        portfolio: "https://asifahmed.vercel.app"
    };




    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Fade direction='up'>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
                    </Fade>
                    <Slide>
                        <p className="text-xl text-gray-600">Get to know more about my journey and skills</p>
                    </Slide>
                </div>

                {/* Personal Info Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Profile Image */}
                        <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
                            <Image width={200} height={200} alt='Profile Image' src={AsifImg} className="text-gray-500 text-lg"></Image>
                        </div>

                        {/* Personal Details */}
                        <div className="flex-1">
                            <Fade direction='down'>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{personalInfo.name}</h2>
                            </Fade>
                            <p className="text-xl text-blue-600 font-semibold mb-4">{personalInfo.title}</p>
                            <Slide direction='right' delay={100}>
                                <p className="text-gray-700 mb-6 leading-relaxed">{personalInfo.bio}</p>
                            </Slide>

                            {/* Contact Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-500">📧</span>
                                    <a href={`mailto:${personalInfo.email}`} className="text-gray-700 hover:text-blue-600">
                                        {personalInfo.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-500">📱</span>
                                    <span className="text-gray-700">{personalInfo.phone}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-500">📍</span>
                                    <span className="text-gray-700">{personalInfo.location}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-500">🔗</span>
                                    <a href={personalInfo.github} className="text-gray-700 hover:text-blue-600">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    <EducationlInfo></EducationlInfo>

                    {/*  */}

                </div>

                {/* Skills Section */}

                <MySkills></MySkills>
            </div>
        </div>
    );
};

export default AboutPage;