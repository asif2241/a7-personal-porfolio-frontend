import Image from 'next/image'
import React from 'react'

const MySkills = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 shadow-lg max-w-[1140px] w-full  mx-auto py-8 px-4  bg-white justify-center items-center my-5'>
            {/* text */}
            <div className='lg:flex-1 px-4 text-center'>
                <h3 className="text-2xl font-bold text-gray-900 ">Technical Skills</h3>
                <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, consequatur!</p>
            </div>
            {/* logo */}
            <div className='flex flex-wrap gap-5 lg:flex-1'>
                <div className='bg-white shadow-2xl p-3 rounded-xl'>
                    <Image width={50} height={50} alt="" src={"https://img.icons8.com/?size=100&id=HcQEdKCkXUs3&format=png&color=000000"}></Image>
                </div>
                <div className='bg-white shadow-2xl  p-3 rounded-xl'>
                    <Image width={50} height={50} alt="" src={"https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"}></Image>
                </div>
                <div className='bg-white shadow-2xl  p-3 rounded-xl'>
                    <Image width={50} height={50} alt="" src={"https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"}></Image>
                </div>
                <div className='bg-white shadow-2xl  p-3 rounded-xl'>
                    <Image width={50} height={50} alt="" src={"https://img.icons8.com/?size=100&id=54087&format=png&color=000000"}></Image>
                </div>

                <div className='bg-white shadow-2xl  p-3 rounded-xl'>
                    <Image width={50} height={50} alt="" src={"https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000"}></Image>
                </div>
                <div className='bg-white shadow-2xl  p-3 rounded-xl'>
                    <Image width={50} height={50} alt="" src={"https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"}></Image>
                </div>
                <div className='bg-white shadow-2xl  p-3 rounded-xl'>
                    <Image width={50} height={50} alt="" src={"https://img.icons8.com/?size=100&id=38561&format=png&color=000000"}></Image>
                </div>
                <div className='bg-white shadow-2xl  p-3 rounded-xl'>
                    <Image width={50} height={50} alt="" src={"https://img.icons8.com/?size=100&id=20906&format=png&color=000000"}></Image>
                </div>
                <div className='bg-white shadow-2xl  p-3 rounded-xl'>
                    <Image width={50} height={50} alt="" src={"https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"}></Image>
                </div>
                <div className='bg-white shadow-2xl  p-3 rounded-xl'>
                    <Image width={50} height={50} alt="" src={"https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000"}></Image>
                </div>
            </div>
        </div>
    )
}

export default MySkills