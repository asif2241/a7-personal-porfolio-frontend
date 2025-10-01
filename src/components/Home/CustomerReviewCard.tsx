"use client"
import Image from 'next/image'
import React from 'react'
import iii from "../../assets/ptocrop.png"

export interface IReviewCard {
    id: string,
    name: string,
    companyAndPosition: string,
    feedback: string,
    image: string

}

export const CustomerReviewCard = ({ ...reviewCard }: IReviewCard) => {
    return (
        <div className="flex gap-5 max-w-[500px] min-h-[250px]  bg-pink-100  items-center px-4 py-2 rounded-3xl ">
            <div className='mb-10'>
                <Image width={400} height={400}
                    src={reviewCard.image}
                    alt=""
                />
            </div>
            <div className='flex flex-col items-start justify-center text-left '>
                <h3 className="font-semibold text-lg text-gray-800">
                    {reviewCard.name}
                </h3>
                <span className='font-light text-sm'>{reviewCard.companyAndPosition}</span>
                <p className="text-gray-800">
                    {reviewCard.feedback}
                </p>
            </div>
        </div>
    )
}
