import React from 'react';
import Image from 'next/image'

import logo from '../../public/logo.svg'

const HeaderApp = () => {
    return (
        <div className='p-5 flex justify-between bg-soft-red rounded-lg max-w-lg w-full'>
            <div>
                <p className='mb-1 text-white'>My balance</p>
                <p className='text-white font-bold text-lg'>$921.48</p>
            </div>
            <div>
                <Image src={logo} alt='logo' />
            </div>
        </div>
    );
};

export default HeaderApp;