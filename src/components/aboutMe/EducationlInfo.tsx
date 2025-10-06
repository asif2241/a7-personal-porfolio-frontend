"use client"
import React from 'react'
import { Fade } from 'react-awesome-reveal';

const EducationlInfo = () => {

    const education = [
        {
            id: 1,
            degree: "SSC (Secondary School Certificate)",
            institution: "Dhurung Khulshi Lions High School",
            board: "Chittagong",
            gpa: "4.95 out of 5.00",
            group: "Science",
            passingYear: "2017",
            duration: "2015 - 2017",
            description: "Completed secondary education with excellent academic performance in Science group."
        },
        {
            id: 2,
            degree: "HSC (Higher Secondary Certificate)",
            institution: "Hathazari Govt College",
            board: "Chittagong",
            gpa: "5.00 out of 5.00",
            group: "Science",
            passingYear: "2020",
            duration: "2018 - 2020",
            description: "Achieved perfect GPA in Higher Secondary education with Science background."
        },
        {
            id: 3,
            degree: "BBA in Marketing",
            institution: "Govt College Of Commerce, Chattogram",
            board: "National University",
            gpa: "Running",
            group: "Business Administration",
            passingYear: "Expected 2024",
            duration: "2021 - Present",
            description: "Currently pursuing Bachelor of Business Administration with major in Marketing.",
            isRunning: true
        }
    ];

    return (
        <div className="bg-white rounded-2xl  p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>

            <ol className="relative border-l border-gray-200">
                {education.map((edu, index) => (
                    <Fade key={edu.id} direction='left' delay={index * 100}>
                        <li className="mb-10 ml-6">
                            {/* Timeline Dot */}
                            <span className={`absolute flex items-center justify-center w-6 h-6 -left-3 ring-8 ring-white ${edu.isRunning
                                ? 'bg-green-500 animate-pulse'
                                : 'bg-blue-600'
                                } rounded-full`}>
                                {!edu.isRunning && (
                                    <span className="text-white text-xs font-bold">
                                        {index + 1}
                                    </span>
                                )}
                            </span>

                            {/* Content */}
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {edu.degree}
                                    </h3>
                                    <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                                        {edu.passingYear}
                                    </span>
                                </div>

                                {/* Institution */}
                                <p className="text-md font-medium text-blue-600 mb-2">
                                    {edu.institution}
                                </p>

                                {/* Details Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
                                    <div>
                                        <span className="font-medium">Board:</span> {edu.board}
                                    </div>
                                    <div>
                                        <span className="font-medium">GPA:</span>
                                        <span className={edu.gpa.includes('5.00') ? 'text-green-600 font-bold ml-1' : 'text-gray-700 ml-1'}>
                                            {edu.gpa}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Group:</span> {edu.group}
                                    </div>
                                    <div>
                                        <span className="font-medium">Duration:</span> {edu.duration}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-600">
                                    {edu.description}
                                </p>

                                {/* Status Badge */}
                                {edu.isRunning && (
                                    <div className="mt-3">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                                            Currently Enrolled
                                        </span>
                                    </div>
                                )}
                            </div>
                        </li>
                    </Fade>
                ))}
            </ol>
        </div>
    );
}

export default EducationlInfo