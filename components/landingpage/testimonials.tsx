'use client'
import { TestimonialsImage as testimo } from '@/lib/image'
import Image from 'next/image'

import PixelTransition from '../PixelTransition'
import RotatingText from '../RotatingText'
const Testimonials = () => {

    const Testimonials = [
        {
            name: '@beetree.in/kevin',
            image: testimo[0],
        },
        {
            name: '@beetree.in/dorny',
            image: testimo[1],
        },
        {
            name: '@beetree.in/kuru',
            image: testimo[2],
        },
        {
            name: '@beetree.in/webshot',
            image: testimo[3],
        },{
            name: '@beetree.in/designerruoo',
            image: testimo[4],
        }
    ]

    // Duplicate testimonials for seamless loop
    const TestimonialsImage =  [...Testimonials, ...Testimonials]

    return (
        <>
        <div className='w-full mx-auto -mt-20 '>
<div className='  text-3xl md:text-5xl  lg:text-6xl xl:text-6xl text-center w-full h-full flex flex-col gap-4  items-center justify-center'>
    <h1 className=' fontSourGummy'>Link in bio trusted by</h1>

            <RotatingText className=' fontSourGummy text-2xl md:text-3xl lg:text-4xl text-white bg-red-800 p-3  rounded-md  font-semibold xl:text-4xl hover:text-zinc-800/70  ' texts={['Influencer', 'Designer', 'Developer', 'Marketer','Photographer','Content Creator','Artist']}/>
</div>
        </div>
        <div className='w-full mx-auto mt-10 '>
            <style jsx>{`
                .scroll-container {
                    overflow: hidden;
                    white-space: nowrap;
                    position: relative;
                    width: 100%;
                }

                .scroll-content {
                    display: inline-flex;
                    gap: 1rem;
                    animation: scroll-loop 20s linear infinite;
                }

                .scroll-content > * {
                    flex-shrink: 0;
                    width: 300px;
                    height: 400px;
                }

                @keyframes scroll-loop {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .scroll-container:hover .scroll-content {
                    animation-play-state: paused;
                }

                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <div className='scroll-container hide-scrollbar'>
                <div className='scroll-content'>
                    {TestimonialsImage.map((image, index) => {
                        return (
                            <PixelTransition
                                key={`testimonial-${index}`}
                                firstContent={
                                    <Image
                                        src={image.image}
                                        alt="user"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        width={300}
                                        height={300}
                                    />
                                }
                                secondContent={
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            display: "grid",
                                            placeItems: "center",
                                            backgroundColor: "#111"
                                        }}
                                    >
                                        <div  className='fontRecursive text-xl flex  gap-1  items-center justify-center  ' style={{ fontWeight: 600, fontSize: "1rem", color: "#ffffff" }}>
                                            
                                            <p>
                                                {image.name}
                                                </p>
                                        </div>
                                    </div>
                                }
                                gridSize={12}
                                pixelColor='#FCF5ED'
                                once={false}
                                animationStepDuration={0.4}
                                className="custom-pixel-card"
                            />
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimonials