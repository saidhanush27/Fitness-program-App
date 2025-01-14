import React from 'react';
import batman from './batman.jpg'; // Import the image

export default function Hero() {
    const scrollToGenerate = () => {
        const element = document.getElementById('generate');
        if (element) {
            console.log('Scrolling to the generate section...');
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    

    return (
        <div 
            className='min-h-screen flex flex-col gap-10 items-center justify-center text-center relative bg-cover bg-center'
            style={{
                backgroundImage: `url(${batman})`, // Use the imported image
            }}
        >
            {/* Overlay for better text visibility */}
            <div className='absolute inset-0 bg-black bg-opacity-60'></div>

            {/* Content */}
            <div className='relative z-10 flex flex-col gap-4 items-center'>
                <p className='text-white text-xl sm:text-2xl md:text-3xl font-semibold'>Welcome to</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white'>
                    Dhanush's &nbsp;<span className='text-blue-400'>Fitness Program</span>
                </h1>
            </div>

            {/* Adjusted p tag with added space and line-break behavior */}
            <p className='relative z-10 text-sm md:text-base font-light text-white' style={{
                wordSpacing: '0.2rem',
                lineHeight: '1.8',
                maxWidth: '600px',
                margin: '0 auto',
                textAlign: 'center',
                letterSpacing: '0.1rem',
            }}>
                I fully accept the risk of getting 
                <span className='text-blue-400 font-medium'> absolutely swole</span> 
                and transforming into a 
                <span className='text-blue-400 font-medium'> muscle-bound monster</span>, 
                so jacked that even doors will be jealous of my gains!
            </p>

            {/* Scroll down arrow */}
            <div 
                onClick={scrollToGenerate} 
                className="mt-8 text-white cursor-pointer text-4xl font-bold"
                style={{ animation: 'bounce 1.5s infinite' }}
            >
                &#8595; {/* Down arrow symbol */}
            </div>
        </div>
    );
}

