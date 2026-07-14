import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full py-5 px-3 '>
        <nav className='w-full flex flex-col md:flex-row items-center justify-between mx-auto max-w-7xl gap-5 border-b-3 border-accent/6'>
            <div className="">
                <Image 
                    src="/logo.webp"
                    alt='Svmkd logo'
                    width={450}
                    height={160}
                />
            </div>

            <div className="flex flex-col gap-2 items-center md:items-end">
                <h1 className='md:text-4xl text-3xl font-bold'>रामकली देवी सरस्वती विद्या मंदिर</h1>
                <p className='md:text-lg text-lg font-semibold text-accent'>सीनियर सेकेंडरी स्कूल, केशव धाम, वृन्दावन</p>
            </div>
        </nav>
    </header>
  )
}

export default Navbar