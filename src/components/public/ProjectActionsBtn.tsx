import Image from 'next/image'
import React from 'react'

const ProjectActionsBtn = () => {
    return (
        <div className="">
            <button className="btn">
                <Image width={20} height={20} alt="edit" src="https://img.icons8.com/?size=100&id=43150&format=png&color=000000">
                </Image>
            </button>
            <button className="btn">
                <Image width={20} height={20} alt="edit" src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000">
                </Image>
            </button>
        </div>
    )
}

export default ProjectActionsBtn