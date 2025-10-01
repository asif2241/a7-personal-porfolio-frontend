"use client"
import Image from 'next/image'
import React from 'react'

export const CustomerReviewCard = () => {
    return (
        <div className="flex gap-5 w-[400px] h-[200px] bg-pink-100  items-center px-4 rounded-3xl">
            <div>
                <Image width={200} height={200}
                    src="https://img.icons8.com/?size=100&id=zFA1PA28L4WT&format=png&color=000000"
                    alt=""
                />
            </div>
            <div>
                <h3 className="font-semibold text-lg text-gray-800">
                    Visa Consultation
                </h3>
                <span className='py-2 font-light text-lg'>Mubin Jam</span>
                <p className="text-gray-800">
                    There are many variations of passages of but the majority have
                    in some form
                </p>
            </div>
        </div>
    )
}
