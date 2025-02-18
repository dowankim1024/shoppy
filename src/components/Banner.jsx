import React from 'react';

export default function Banner() {
    return (
        <section className='h-96 bg-red-900 relative'>
            <div className='w-full h-full bg-cover bg-banner opacity-80'></div>
            <div className='absolute w-full top-32 text-center text-white drop-shadow-2xl'>
                <h2 className='text-6xl'>Dowan Kim Shoppy</h2>
                <p className='text-2xl'>사든가 말든가</p>
            </div>
        </section>
    );
}

