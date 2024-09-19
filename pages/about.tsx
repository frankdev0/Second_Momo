// import { useStaticQuery, graphql } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";
import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import { Navbar, Footer, Testimonial } from "../components";
// import Img from "gatsby-image";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

interface HomeProps {
    location: {
      pathname: string;
      search: string;
      hash: string;
    };
  }

// export default function About({ location }) {
    const About: React.FC<HomeProps> = () => {
    const router = useRouter();
    const { pathname } = router;
    // const data = useStaticQuery(graphql`
    // query {
    //     file(relativePath: { eq: "blue_rectangle.png" }) {
    //     childImageSharp {
    //         # Specify the image processing specifications right in the query.
    //         fluid {
    //         ...GatsbyImageSharpFluid_tracedSVG
    //         }
    //     }
    //     }
    // }`);

    return (
        <main className='w-full h-screen flex flex-col font-poppins'>
            <title>About MoMo</title>

            {/* <Navbar path={location.pathname} /> */}
            <Navbar path={pathname} />

            {/* Hero */}
            <div
                className='flex flex-col-reverse md:flex-row w-full mt-20 justify-center px-6 lg:px-0'
            >
                <div className='flex flex-row md:ml-20 mb-48 md:mb-0'>
                    <div className='flex flex-col gap-y-4 lg:ml-20 md:mt-10 md:text-left text-center'>
                        <div className='text-3xl md:text-4xl 2xl:text-6xl capitalize'>
                            WHAT MAKES MOCREDITS TOPNOTCH
                        </div>
                        <div className='text-[#808080] 2xl:text-xl'>
                            {/* We provide fast low interest loans. You can count on us to meet your urgent financial needs. */}
                            <ul>
                            <li>(1) Our fast loan approval rate</li>
                                <li>(2) our expertise customer service.</li>
                                <li>(3) Access to business loans of up to 500,000.</li>
                                </ul>
                        </div>
                        <div className='flex flex-row gap-x-2 -mt-8'>
                            <div>
                            {/* <a href='https://apps.apple.com/ng/app/sporty-credit/id6450298959'>
                                <StaticImage
                                    src='../app.svg'
                                    alt='Apple Logo'
                                    width={180}
                                />
                                </a> */}
                                <a href='https://apps.apple.com/ng/app/sporty-credit/id6450298959'>
                                    <Image src="/app.svg" alt="Apple Logo" width={180} height={180} layout="fixed"/>
                                </a>
                            </div>

                            <div className='my-auto'>
                            {/* <a href="https://.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank">
                                <StaticImage
                                    src='../google-play-badge.png'
                                    alt='Google Play Store'
                                    width={200}
                                />
                                </a> */}
                                <a href="https://dit.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank" rel="noopener noreferrer">
                                    <Image src="/google-play-badge.png" alt="Google Store" width={200} height={60} layout="fixed"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='px-10 md:px-0 md:mr-28 my-2' id="bounce">
                    <StaticImage
                        src='../groupeddevicex.png'
                        alt=''
                        width={800}
                    />
                </div> */}
                <div className='px-10 md:px-0 md:mr-28 my-2' id="bounce">
                    <Image src="/groupeddevicex.png" alt="" width={800} height={600} layout="responsive"/>
                </div>
            </div>

            <div className="h-auto relative -mt-52 md:mt-0 lg:-mt-20 xl:-mt-52 2xl:-mt-40 ">
                {/* <div className="absolute">
                    <StaticImage className="z-0 w-screen py-24 h-[50rem] md:h-auto" src="../blue_rectangle.png" alt="" />
                </div> */}
                <div className="absolute">
                <Image src="/blue_rectangle.png" alt="" width={1440} height={900}  className="z-0 w-screen py-24 h-[50rem] md:h-auto"/>
            </div>
                <div className='flex flex:col md:flex-row text-white w-full gap-x-10 overflow-hidden -mt-10 md:mt-0'>
                    <div className='flex flex-col my-auto py-40 px-10 md:px-20'>
                        <div className='flex flex-row mt-10'>
                            <div className='text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl capitalize w-2/3 z-10'>
                                What Motivate Users to Download Our Mobile App
                            </div>

                            {/* <div className="xl:-translate-x-20 2xl:-translate-x-44">
                                <StaticImage src='../white_star.svg' alt='' />
                            </div> */}

                            <div className="xl:-translate-x-20 2xl:-translate-x-44">
                                <Image src="/white_star.svg" alt="" width={300} height={300} layout="responsive"/>
                            </div>
                        </div>

                        <div className="hidden lg:flex z-50 text-justify w-2/3 mt-4">
                            {/* A quick onboarding process that includes sizable payments made in a short period of time. Momo Loan App aims to assist users achieve their personal and business goals by providing digital financial services. Our platform is built specially for you… it is seamless, and easy to navigate. */}
                            Nothing excites our customers than our fast approval rate. You could actually get your loan disbursed in 5mins. its that fast.
                        </div>

                        <div className='flex flex-row gap-x-20 2xl:gap-x-60'>
                            {/* <div className="mt-8 hidden md:block">
                                <StaticImage
                                    alt={""}
                                    // width={750}
                                    src={"../momoloannew.jpg"}
                                    className="rounded-md w-[20rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[65rem] lg:h-[15rem] xl:h-[30rem]"
                                />
                            </div> */}

                            <div className="mt-8 hidden md:block">
                                <Image src="/momoloannew.jpg" alt="" width={650} height={400} layout="responsive" className="rounded-md"/>
                            </div>


                            <div className='hidden md:flex flex-col gap-y-6 2xl:gap-y-20 my-auto 2xl:mt-40 z-10 text-sm lg:text-base xl:text-xl 2xl:text-3xl'>
                                <div className="flex flex-row overflow-hidden gap-x-8">
                                    {/* <div className="overflow-hidden my-auto">
                                        <StaticImage className='w-6 h-6' src="../moneybag.svg" alt="" />
                                    </div> */}
                                    <div className="overflow-hidden my-auto">
                                        <Image src="/moneybag.svg" alt="" width={24} height={24} layout="fixed"/>
                                    </div>

                                    <div className="overflow-hidden">
                                        Flexible Terms
                                    </div>

                                </div>

                                <div className="flex flex-row overflow-hidden gap-x-8">

                                    {/* <div className="overflow-hidden my-auto">
                                        <StaticImage className='w-6 h-6' src="../cash.svg" alt="" />
                                    </div> */}
                                    <div className="overflow-hidden my-auto">
                                        <Image src="/cash.svg" alt="" width={24} height={24} layout="fixed"/>
                                    </div>

                                    <div className="overflow-hidden">
                                        No Hidden Charges
                                    </div>

                                </div>

                                <div className="flex flex-row overflow-hidden gap-x-8">

                                    {/* <div className="overflow-hidden my-auto">
                                        <StaticImage className='w-6 h-6' src="../secure.svg" alt="" />
                                    </div> */}
                                    <div className="overflow-hidden my-auto">
                                        <Image src="/secure.svg" alt="" width={24} height={24} layout="fixed"/>
                                    </div>

                                    <div className="overflow-hidden">
                                        Secure and Safe
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="mt-10 md:hidden">
                            <StaticImage
                                alt={""}
                                // width={750}
                                src={"../momoloannew.jpg"}
                                className="rounded-md w-[20rem] lg:w-[55rem] lg:h-[15rem] xl:h-[30rem]"
                            />
                        </div> */}

                        <div className="rounded-md relative w-[20rem] lg:w-[55rem] lg:h-[15rem] xl:h-[30rem]">
                            <Image
                                src="/momoloannew.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover" // Adjust as necessary to maintain aspect ratio
                            />
                        </div>

                        <div className='md:hidden flex flex-col gap-y-6 z-10 mt-10 text-base'>
                            <div className='flex flex-row gap-x-10'>
                                {/* <div>
                                    <StaticImage className="w-5 h-5" src="../moneybag.svg" alt="" />
                                </div> */}
                                <div className="w-5 h-5 relative">
                                    <Image
                                        src="/moneybag.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        layout="fixed"
                                    />
                                </div>
                                <div>Flexible Terms</div>
                            </div>

                            <div className='flex flex-row gap-x-10'>
                                {/* <div>
                                    <StaticImage className="w-5 h-5" src="../cash.svg" alt="" />
                                </div> */}
                                <div className="w-5 h-5 relative">
                                <Image
                                    src="/cash.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    layout="fixed"
                                />
                            </div>
                                <div>No Hidden Charges</div>
                            </div>

                            <div className='flex flex-row gap-x-10'>
                                {/* <div>
                                    <StaticImage className="w-5 h-5" src="../secure.svg" alt="" />
                                </div> */}
                                <div className="w-5 h-5 relative">
                                    <Image
                                        src="/secure.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        layout="fixed"
                                    />
                                </div>
                                <div>Secure and Safe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-y-4 mt-10 md:-mt-10 lg:mt-10 2xl:mt-20'>
                <div className="text-2xl md:text-4xl text-center">Explore Loan Offers for Different Purpose</div>

                <div className='flex flex-col md:flex-row w-full text-white justify-center'>
                    <div className="relative text-center">
                        {/* <StaticImage placeholder="blurred" src="../momoimage.e copy.png" alt="" className="max-h-[338px]" /> */}
                        <div className="max-h-[338px] relative w-full">
                        <Image
                            src="/momoimage.e copy.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                        <div className="absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30px] md:text-2xl lg:text-[40px] whitespace-nowrap">Car Loans</div>
                    </div>

                    <div className="relative text-center">
                        {/* <StaticImage placeholder="blurred" src="../imagein.png" alt="" className="max-h-[338px]" /> */}
                        <div className="max-h-[338px] relative w-full">
                            <Image
                                src="/imagein.png"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30px] md:text-2xl lg:text-[40px] whitespace-nowrap">Education Loans</div>
                    </div>

                    <div className="relative text-center">
                        {/* <StaticImage placeholder="blurred" src="../momoina.png" alt="" className="max-h-[338px]" /> */}
                        <div className="max-h-[338px] relative w-full">
                        <Image
                            src="/momoina.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                        <div className="absolute font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30px] md:text-2xl lg:text-[40px] whitespace-nowrap">Business Loans</div>
                    </div>

                </div>
            </div>

          

            <div className='flex flex-col md:flex-row mx-auto gap-x-10 my-10 md:my-28 px-20 relative'>
                <div className='flex flex-col gap-y-4'>
                    <div className="text-xl md:text-3xl font-medium md:w-4/5">
                        {/* Start Lending Money
                        to Sort Out Important Bills */}
                        START GRWOING YOUR BUSINESS TODAY THROUGH OUR BUSINESS LOAN OFFER
                    </div>

                    <div className="text-[#727272] xl:w-2/3">
                        {/* With our simple and easy loan application process, you can access loans with just one-clicks. Download Now. */}
                        You are just a click away from growing your business. Download mocredits to get started
                    </div>


                    <div className='flex flex-row gap-x-2 -mt-6 md:-mt-12'>
                        <div>
                        {/* <a href='https://apps.apple.com/ng/app/sporty-credit/id6450298959'>
                            <StaticImage
                                src='../app.svg'
                                alt='Apple Logo'
                                width={180}
                            />
                            </a> */}
                            <a href='https://apps.apple.com/ng/app/sporty-credit/id6450298959'>
                            <Image
                                src="/app.svg"
                                alt="Apple Logo"
                                width={180}
                                height={180} // Adjust based on actual aspect ratio
                                layout="fixed"
                            />
                        </a>
                        </div>

                        <div className='my-auto'>
                        {/* <a href="https://it.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank">
                            <StaticImage
                                src='../google-play-badge.png'
                                alt='Google Play Store'
                                width={200}
                            />
                            </a> */}
                            <a href="https://it.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/google-play-badge.png"
                                    alt="Google Play Store"
                                    width={200}
                                    height={60} // Adjust based on actual aspect ratio
                                    layout="fixed"
                                />
                            </a>
                        </div>
                    </div>


                </div>

                {/* <div className="">
                    <StaticImage src='../momoimage.jpg' alt='' width={900} className="rounded-lg" />
                </div> */}
                <div className="rounded-lg relative w-[900px]">
                <Image
                    src="/momoimage.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>

                <div className="hidden translate-y-10 lg:block absolute bottom-10">
                    {/* <StaticImage src='../redstar.png' alt='' /> */}
                    <div>
                    <Image
                        src="/redstar.png"
                        alt=""
                        width={50} // Estimate or check the actual size
                        height={50} // Maintain aspect ratio
                        layout="fixed"
                    />
                </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default About;