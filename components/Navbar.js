import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// interface Props {
// 	path?: string;
// }

export default function Navbar({path}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const activeMenu = 'text-kashmir-blue';

	console.log('this is the current path',path)


	return (
		<div className='w-full flex flex-row justify-between px-10 py-2.5 md:py-0 font-poppins'>
			<div className='my-auto max-w-[70px]'>
				<Link href='/'>
					{/* <StaticImage className="w-[40px] lg:w-full h-full" src='../images/mologoo.png' alt='Momo Logo' /> */}
                    <div className="relative w-[40px] lg:w-full h-full">
                    <Image
                        src="/mologoo.png"  
                        alt="Momo Logo"
                        width={200}  
                        height={100}
                        layout="responsive"  
                    />
                    </div>
				</Link>
			</div>

			<div className='md:flex flex-row gap-x-10 lg:gap-x-20 my-auto text-md lg:text-xl font-semibold hidden'>
				<div className={path === '/' ? activeMenu : ''}>
					<Link href='/'>Home</Link>
				</div>

				<div className={path === '/about' ? activeMenu : ''}>
					<Link href='/about'>About Us</Link>
				</div>

				<div className={path === '/contact' ? activeMenu : ''}>
					<Link href='/contact'>Contact</Link>
				</div>
			</div>

			<div className={path === '/' ? '-mt-40' : '-mt-40 invisible md:hidden lg:block'} id='top_ball'>
				<Image
					src='/nav_circle.png'
					alt='nav circle'
					width={300}
                    height={300}
				/>
			</div>

			<div className='hidden lg:block my-auto font-raleway font-semibold'>
				<a href="https://dit.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank">
				<button  className='bg-[#1F58A3] w-[9rem] max-h-[60px] max-w-[271px] whitespace-nowrap lg:w-auto text-xs lg:text-base px-4 lg:px-14 text-white py-2 lg:py-4 rounded-md cursor-pointer transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out'>
					Get Started
				</button>
				</a>
			</div>

			<div className='lg:hidden my-auto'>
				<button
					aria-label='Open Menu'
					title='Open Menu'
					className='focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none'
					onClick={() => setIsMenuOpen(true)}
				>
					<svg
						className='w-5 text-gray-600'
						viewBox='0 0 24 24'
					>
						<path
							fill='currentColor'
							d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
						/>
						<path
							fill='currentColor'
							d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
						/>
						<path
							fill='currentColor'
							d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
						/>
					</svg>
				</button>
				{isMenuOpen && (
					<div className='absolute top-0 left-0 w-full z-[10000]'>
						<div className='rounded border bg-white p-5 shadow-sm'>
							<div className='mb-4 flex items-center justify-between'>
								<div>
								
									<Image className="w-10 lg:w-full h-full" src='/mologoo.png' alt='Mocredits Logo' />
								</div>
								<div>
									<button
										aria-label='Close Menu'
										title='Close Menu'
										className='focus:shadow-outline -mt-2 -mr-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none'
										onClick={() =>
											setIsMenuOpen(false)
										}
									>
										<svg
											className='w-5 text-gray-600'
											viewBox='0 0 24 24'
										>
											<path
												fill='currentColor'
												d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
											/>
										</svg>
									</button>
								</div>
							</div>
							<nav>
								<div className='my-auto flex flex-col gap-y-4 font-semibold text-black'>
									<div className={path === '/' ? activeMenu: ''}>
										<Link href='/'>Home</Link>
									</div>

									<div className={path === '/about' ? activeMenu: ''}>
										<Link href='/about'>About Us</Link>
									</div>

									<div className={path === '/contact' ? activeMenu: ''}>
										<Link href='/contact'>Contact</Link>
									</div>
								</div>
							</nav>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
