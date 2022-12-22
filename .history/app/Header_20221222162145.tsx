import Image from 'next/image'
import React from 'react'
import jotia_mascot from '../public/jotai-mascot.png'
import github_icon from '../public/github.png'

function Header() {
    return (
        <div className='header-cont'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.19 99.77" className="text-black dark:text-white w-full max-w-[12rem] lg:max-w-[16rem] 2xl:max-w-[18rem]"><title>Jotai</title><path d="M42.36,5.32H61.82V70.23a29.46,29.46,0,0,1-4,15.61A27.19,27.19,0,0,1,46.64,96.07a36.26,36.26,0,0,1-16.59,3.61,37.56,37.56,0,0,1-15.25-3A24.3,24.3,0,0,1,4,87.59Q0,81.5,0,72.23H19.59c.06,3.69,1.13,6.57,3.21,8.61a11.21,11.21,0,0,0,8.25,3.07q11.22,0,11.31-13.68Z" fill="currentColor"></path><path d="M105,99.77q-10.59,0-18.29-4.52A30.54,30.54,0,0,1,74.82,82.61a40.52,40.52,0,0,1-4.18-18.84,40.75,40.75,0,0,1,4.18-18.93A30.6,30.6,0,0,1,86.71,32.2,35.52,35.52,0,0,1,105,27.68a35.58,35.58,0,0,1,18.3,4.52,30.57,30.57,0,0,1,11.88,12.64,40.76,40.76,0,0,1,4.19,18.93,40.52,40.52,0,0,1-4.19,18.84A30.51,30.51,0,0,1,123.3,95.25Q115.59,99.78,105,99.77ZM127.14,5.32v10.5H82.87V5.32Zm-22,79.45a12,12,0,0,0,10.89-6q3.7-6,3.7-15.13T116,48.48a12,12,0,0,0-10.89-6,12.15,12.15,0,0,0-11,6q-3.73,6-3.73,15.16t3.73,15.13A12.16,12.16,0,0,0,105.09,84.77Z" fill="currentColor"></path><path d="M186.3,28.59V43.14H173.16V77q0,4,1.82,5.4a7.5,7.5,0,0,0,4.73,1.41,14.72,14.72,0,0,0,2.72-.25l2.09-.38,3,14.41c-1,.3-2.33.66-4.09,1.06a34.13,34.13,0,0,1-6.41.75q-10.55.47-16.93-4.56T153.8,79.5V43.14h-9.55V28.59h9.55V11.86h19.36V28.59Z" fill="currentColor"></path><path d="M216,99.73q-10,0-16.59-5.23t-6.59-15.59q0-7.81,3.68-12.27a21.19,21.19,0,0,1,9.66-6.53A54.78,54.78,0,0,1,219,57.41a98.57,98.57,0,0,0,13-1.91q3.92d

            <div className='link-cont'>
                <div className='des-cont'>
                    <Image
                        src={jotia_mascot}
                        alt='bhoot'
                        width={80}
                        height={70}
                    />
                    <p className='defi'>Primitive and flexible state management for React</p>
                </div>
                <Image
                    src={github_icon}
                    alt='bhoot'
                    width={40}
                    height={40}
                />
            </div>
        </div>
    )
}

export default Header