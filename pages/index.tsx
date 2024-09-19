// import { StaticImage } from "gatsby-plugin-image";
import React from "react";
// import { useMediaQuery } from "react-responsive";
// import { Carousel } from "react-responsive-carousel";
// import { Navbar, Footer, Testimonial } from "../components";
// import Img from "gatsby-image";
// import { graphql, useStaticQuery } from "gatsby";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

interface HomeProps {
    location: {
      pathname: string;
      search: string;
      hash: string;
    };
  }

// export default function Home({ location}) {
const Home: React.FC<HomeProps> = () => {
// export default function Home() {

const router = useRouter();
  const { pathname } = router;

    // const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    // const isBigScreen = useMediaQuery({ minWidth: 1824 })
    // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    // const isPortrait = useMediaQuery({ orientation: 'portrait' })
    // const isRetina = useMediaQuery({ minResolution: '2dppx' })

    // const data = useStaticQuery(graphql`
    // query {
    //     file(relativePath: { eq: "new_hero.png" }) {
    //     childImageSharp {
    //         # Specify the image processing specifications right in the query.
    //         fluid {
    //         ...GatsbyImageSharpFluid_tracedSVG
    //         }
    //     }
    //     }
    // }`);

    return (
        <main className='w-full h-screen flex flex-col overflow-x-hidden font-raleway'>
            <title>Mocredits Home</title>

            <Navbar path={pathname} />
            {/* <Navbar /> */}

            {/* Hero */}
            <section className="pb-64 md:pb-96 font-poppins overflow-hidden md:overflow-visible">
                <div className="flex flex-col static h-96">
                    <div className='relative'>
                        <div className="z-0 w-screen absolute">
                            <Image
                                src='/new_hero.png'
                                alt='Hero image'
                                width={450}
                                height={800}
                                className='w-screen max-h-[740px]'
                            />

                            {/* <Img
                                alt="landing page image"
                                fluid={data.file.childImageSharp.fluid}
                                className='w-screen md:max-h-[740px]'
                            /> */}
                            <div className='w-screen md:max-h-[740px] relative'>
                            {/* <Image
                                src="/path/to/your/image.jpg" // Update the path to your image
                                alt="landing page image"
                                layout="fill"
                                objectFit="cover"  // This will cover the area of the div without distorting the aspect ratio
                                quality={100}  // Optional: Adjust quality if needed
                            /> */}
                        </div>
                        </div>
                    </div>

                    <div className="relative mt-10 mx-auto md:mx-0 inset-0 md:inset-y-1/4 lg:inset-0 lg:my-auto flex justify-center md:justify-start p-10 lg:mr-28 text-dark text-center md:text-left">
                        <div className='flex flex-col inset-y-[-64px] absolute px-10 lg:px-0 lg:w-1/3 gap-y-2 md:gap-y-4'>
                            <div className="md:text-5xl   pt-11 lg:pt-0">Loan Up to</div>
                            <div className="md:text-5xl  mb-1">5 Hundred Thousand Naira</div>

                            <div className="text-[0.65rem] md:text-base w-screen md:w-auto px-10 md:px-0 mb-16">
                                Loan as low as 10,000 and as high as 500,000 with mocredits. We specialzie in providing Nigerians citizens business loans to build their financial horizone of their businesses.
                               ` {/* Get up to 5 million Naira with MoMo Credit. It's easy and with no collateral. You can build your credit worthiness to 5,000,000. With MoMo Credit you are just a click away from getting that money to sort out your pressing needs.’` */}
                            </div>

                            <div className="hidden w-full md:flex -mt-18 md:-mt-14">
                                <div className='flex flex-row gap-x-2'>
                                    <div>
                                        <a href="https://apps.apple.com/ng/app/spit/id6450298959">
                                        {/* <StaticImage
                                            src='../app.svg'
                                            alt='Apple Logo'
                                            width={180}
                                        /> */}
                                        <Image
                                        src="/app.svg"  // Adjust the path as needed
                                        alt="Apple Logo"
                                        width={180}
                                        height={180} // You need to specify the height, it should maintain the aspect ratio
                                        layout="fixed"
                                    />
                                        </a>
                                        
                                    </div>

                                    <div className='my-auto'>
                                    <a href="https://t.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank">
                                        {/* <StaticImage
                                            src='../google-play-badge.png'
                                            alt='Google Store'
                                            width={200}
                                        /> */}
                                        <Image
                                          src="/google-play-badge.png"
                                          alt="Google Store"
                                          width={200}
                                          height={200} // Adjust the height based on the actual aspect ratio of the image
                                          layout="fixed"
                                      />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="md:hidden w-full flex -mt-6 justify-center">
                                <div className='flex flex-row gap-x-2'>
                                    <div>
                                        <a href="https://apps.apple.com/ng/app/dit/id6450298959">
                                        {/* <StaticImage
                                            src='../app.svg'
                                            alt='Apple Logo'
                                            width={90}
                                        /> */}
                                        <Image
                                          src="/app.svg"
                                          alt="Apple Logo"
                                          width={90}
                                          height={90} // Maintain aspect ratio
                                          layout="fixed"
                                      />
                                        </a>
                                    </div>

                                    <div className='my-auto'>
                                    <a href="https://it.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank">
                                        {/* <StaticImage
                                            src='../google-play-badge.png'
                                            alt='Google Store'
                                            width={110}
                                        /> */}
                                        <Image
                                          src="/google-play-badge.png"
                                          alt="Google Store"
                                          width={110}
                                          height={110} // Maintain aspect ratio
                                          layout="fixed"
                                      />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className='flex flex-col-reverse md:flex-row md:pl-0 gap-x-6 md:mt-10' id='twophones1'>

                <div className='flex flex-row px-20 mt-20'>
                    <div className="md:hidden">
                        {/* <StaticImage
                            src='../bigiphonex.png'
                            alt='iPhone1'
                            // width={550}
                            className='w-[246px] h-[502px]'
                        /> */}
                        <div className="w-[246px] h-[502px] relative">
                        <Image
                            src="/bigiphonex.png"
                            alt="iPhone1"
                            layout="fill"  // Makes the image fill the container
                            objectFit="cover" // Adjust as needed; 'cover' or 'contain' are common values
                        />
                    </div>
                    </div>

                    {/* <div className='md:hidden mt-6'>
                        <StaticImage
                            src='../iPhone 1 Pro.png'
                            alt='iPhone2'
                        // width={500}
                        // className='w-[183px] h-[374px]'
                        />
                    </div> */}
                </div>



                <div className="hidden md:block">
                    {/* <StaticImage
                        src='../bigiphonex.png'
                        alt='iPhone1'
                        // width={550}
                        className='w-[246px] h-[502px]'
                    /> */}
                    <div className="w-[246px] h-[502px] relative">
                      <Image
                          src="/bigiphonex.png"
                          alt="iPhone1"
                          layout="fill"
                          objectFit="cover"
                      />
                  </div>
                </div>

                <div className='hidden md:block mt-28 ml-6'>
                    {/* <StaticImage
                        src='../iphonex.png'
                        alt='iPhone2'
                        // width={500}
                        className='w-[183px] h-[374px]'
                    /> */}

                  <div className="w-[183px] h-[374px] relative">
                      <Image
                          src="/iphonex.png"
                          alt="iPhone2"
                          layout="fill"
                          objectFit="cover"
                      />
                  </div>
                </div>

                <div className='flex flex-col gap-y-2 md:ml-10 mt-10 px-8 text-center md:text-left md:pr-40'>
                    <div className='capitalize text-2xl md:text-3xl font-medium min-w-[300px]'>
                        {/* With MoMo you can quickly sort out urgent bills */}
                        Urgent Cash Within 5mins is Guaranteed
                    </div>
                    <div className='text-justify mt-2 text-[#808080]'>
                        You dont need to beg for urgent cash anymore, just apply on Mocredits and get credited instantly.
                        {/* MoMo Credit offers loan for your urgent bills.
                        With MoMo Credit you can get loan to pay for your DSTV subscription, pay for your light bill, etc... */}
                    </div>
                </div>

                {/* <div className='hidden md:block relative'>
                    <StaticImage
                        src='../redstar.png'
                        alt=''
                        width={110}
                        className="mr-20"
                    />
                </div> */}

              <div className='hidden md:block relative'>
                  <Image
                      src="/redstar.png"
                      alt=""
                      width={110}
                      height={110} // Assuming square aspect ratio for simplicity
                      className="mr-20"
                  />
              </div>

                {/* <div className='md:hidden relative mt-4 ml-4'>
                    <StaticImage
                        src='../redstar.png'
                        alt=''
                        width={50}
                        className="mr-20"
                    />
                </div> */}
                <div className='md:hidden relative mt-4 ml-4'>
                <Image
                    src="/redstar.png"
                    alt=""
                    width={50}
                    height={50} // Assuming square aspect ratio for simplicity
                    className="mr-20"
                />
            </div>
            </div>


            <div className='flex flex-col md:px-40 lg:px-40 py-20 px-6'>
                <div className='capitalize text-[#1F58A3] text-center text-2xl md:text-3xl font-medium pb-2'>
                    {/* Benefits of using the Momo Credit App */}
                    WHY IS MOCREDITS BETTER THAN LOAN SHARKS
                </div>

               

                <div className="flex flex-col lg:flex-row -mx-4 overflow-hidden mt-5">

                    <div className="my-4 px-4 overflow-hidden sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
                        <div className='flex flex-col gap-y-4'>
                            {/* <div className='m-auto'>
                                <StaticImage
                                    src='../icon_1.svg'
                                    alt=''
                                    width={45}
                                />
                            </div> */}

                              <div className='m-auto'>
                                  <Image
                                      src="/icon_1.svg"
                                      alt=""
                                      width={45}
                                      height={45} // Adjust height according to actual aspect ratio
                                  />
                              </div>

                            <div className='flex flex-col gap-y-2 text-center'>
                                <div className='text-xl md:text-xl text-[#1F58A3] font-semibold'>
                                    {/* No Hidden Charges */}
                                    FAST LOAN DISBURSEMENT
                                </div>
                                <div className="text-[#808080] text-center">
                                    {/* With Momo Credit there is no hidden charges, no collateral. */}
                                    Get your loan disbursed in 5mins after a quick stressfree application.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-4 px-4 overflow-hidden sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
                        <div className='flex flex-col gap-y-4'>
                            {/* <div className='m-auto'>
                                <StaticImage
                                    src='../icon_2.svg'
                                    alt='secure'
                                    width={45}
                                />
                            </div> */}
                            <div className='m-auto'>
                              <Image
                                  src="/icon_2.svg"
                                  alt="secure"
                                  width={45}
                                  height={45} // Adjust height according to actual aspect ratio
                              />
                          </div>

                            <div className='flex flex-col gap-y-2 text-center'>
                                <div className='text-xl md:text-xl text-[#1F58A3] font-semibold'>
                                   BUSINESS LOAN OPPORTUNITY
                                </div>
                                <div className="text-[#808080] text-center">
                                    Gain access to our high business loan offer of over 200,000 by repaying before due date.
                                    {/* MoMo Credit is safe, secure and easy to use. */}
                                    <div className="invisible">This is just a placeholder</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-4 px-4 overflow-hidden sm:w-full md:w-full lg:w-1/3 xl:w-[35%]">
                    <div className='flex flex-col gap-y-4'>
                        {/* <div className='m-auto'>
                            <StaticImage
                                src='../icon_4.svg'
                                alt=''
                                width={45}
                            />
                        </div> */}

                          <div className='m-auto'>
                              <Image
                                  src="/icon_4.svg"
                                  alt=""
                                  width={45}
                                  height={45} // Adjust height according to actual aspect ratio
                              />
                          </div>

                        <div className='flex flex-col gap-y-2 text-center'>
                            <div className='text-xl md:text-xl text-[#1F58A3] font-semibold'>
                                GOOD LOAN COLLECTION ETHICS
                            </div>
                            <div className="text-[#808080] text-center">
                                {/* MoMo Credit has the most customer friendly terms and conditions any customer can ask for. */}
                                We are dedicated to servcie of our customers as we are binded by Nigerian laws to carry out our loan collection using ethical method.
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>

            <div
                className='flex flex-col md:flex-row w-full mt-10 justify-center md:h-[600px] h-[850px]'
                id='urgent2k'
            >
                <div className='flex flex-col md:flex-row justify-center w-full mx-auto'>
                    {/* <div className='flex flex-col items-center gap-y-4 md:ml-20  md:text-left text-center ' id="bounce">
                        <StaticImage
                            src='../bouncingiphonex.png'
                            alt=''
                        width={350}
                        />
                    </div> */}
                    <div className='flex flex-col items-center gap-y-4 md:ml-20  md:text-left text-center ' id="bounce">
                  <Image
                      src="/bouncingiphonex.png"
                      alt=""
                      width={350}
                      height={350} // Adjust height according to actual aspect ratio
                  />
              </div>

                   
                        <div className='flex flex-col items-center gap-y-4 md:ml-20 p-10 md:text-left text-center md:w-1/2 md:min-w-[500px]'>
                            <div className='text-2xl md:text-3xl capitalize font-medium xl:w-[70%]'>
                            {/* Say Goodbye to "Urgent 2K" */}
                            WITH MOCREDITS YOUR URGENT 10K IS ASSURED
                            </div>
                            <div className='md:w-2/3'>
                            {/* With MoMo Credit no more calling anybody to send you "urgent 2k" because MoMo Credit have you covered and just a click away. */}
                            You do not need to go through the embarrsasment of begging relatives for money. A simple application processs with mocredits gives you the amount you want with ease.
                            </div>
                            <div className='flex flex-row gap-x-2 -mt-8'>
                            <div>
                                {/* <a href='https://apps.apple.com/ng/app/spit/id6450298959'>
                                <StaticImage
                                src='../app.svg'
                                alt='Apple Logo'
                                width={180}
                                />
                                </a> */}
                                <a href='https://apps.apple.com/ng/app/spit/id6450298959'>
                                  <Image
                                      src="/app.svg"
                                      alt="Apple Logo"
                                      width={180}
                                      height={180} // Adjust height according to actual aspect ratio
                                  />
                              </a>
                            </div>
                            <div className='my-auto'>
                            {/* <a href="https://dit.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank">
                                <StaticImage
                                src='../google-play-badge.png'
                                alt='Google Store'
                                width={200}
                                />
                                </a> */}
                                <a href="https://dit.fra1.cdn.digitaloceanspaces.com/apk/app.apk" target="_blank" rel="noopener noreferrer">
                                  <Image
                                      src="/google-play-badge.png"
                                      alt="Google Store"
                                      width={200}
                                      height={200} // Adjust height according to actual aspect ratio
                                  />
                              </a>
                            </div>
                            </div>
                        </div>
                    

                </div>
            </div>

            

            <Footer />
        </main >
    );
}

export default Home;