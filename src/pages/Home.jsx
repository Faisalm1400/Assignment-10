import { Link, useLoaderData } from 'react-router-dom';
import RunningCampaignCard from '../components/RunningCampaignCard';
import cover1 from '../assets/photos/coer-1.jpg';
import cover2 from '../assets/photos/cover-2.jpg';
import cover3 from '../assets/photos/cover-3.webp';
import { Slide } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter';
import { GiLaurelCrown } from "react-icons/gi";
import { FaChartPie } from "react-icons/fa";

const Home = () => {

    const campaigns = useLoaderData();

    return (
        <div>
            {/* banner section */}
            <section>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div
                            className="hero min-h-screen"
                            style={{
                                backgroundImage: `url(${cover1})`,
                            }}>
                            <div className="hero-overlay"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-lg space-y-2">
                                    <Slide
                                        delay={500}
                                        duration={1000}
                                        direction='down'
                                    >
                                        <p className="mb-5 text-2xl font-semibold">
                                            Raising Money Is Easy Now!
                                        </p>
                                    </Slide>
                                    <Slide
                                        delay={600}
                                        duration={1000}
                                        direction='left'
                                    >
                                        <h1 className="mb-5 text-7xl font-bold">Great Crowdfunding Platforms</h1>
                                    </Slide>
                                    <Slide
                                        delay={700}
                                        duration={1000}
                                        direction='up'
                                    >
                                        <div>
                                            <Link to={'/addNewCampaign'} className="btn btn-primary">Create Campaign</Link>
                                        </div>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div
                            className="hero min-h-screen"
                            style={{
                                backgroundImage: `url(${cover2})`,
                            }}>
                            <div className="hero-overlay"></div>
                            <div className=" hero-content flex justify-start text-neutral-content w-full pl-24">
                                <div className="max-w-lg space-y-2">
                                    <Slide
                                        delay={500}
                                        duration={1000}
                                        cascade damping={0.2}
                                    >
                                        <p className="mb-5 text-2xl font-semibold">
                                            Raising Money Is Easy Now!
                                        </p>
                                        <h1 className="mb-5 text-7xl font-bold">Join The Journey From Idea To Market</h1>
                                        <div className='flex gap-2 mt-5 justify-start'>
                                            <Link to={'/addNewCampaign'} className="btn btn-primary">Create Campaign</Link>
                                            <button className="btn btn-primary"><a href="#runningCampaign">Discover More</a></button>
                                        </div>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div
                            className="hero min-h-screen w-full"
                            style={{
                                backgroundImage: `url(${cover3})`,
                            }}>
                            <div className="hero-overlay"></div>
                            <div className="hero-content flex justify-end pr-24 text-neutral-content text-right w-full">
                                <div className="max-w-lg space-y-2">
                                    <Slide
                                        delay={500}
                                        duration={1000}
                                        cascade damping={0.2}
                                        direction='right'
                                    >
                                        <p className="mb-5 text-2xl font-semibold">
                                            Raising Money Is Easy Now!
                                        </p>
                                        <h1 className="mb-5 text-7xl font-bold">Change The Manner Artwork Is Valued</h1>
                                        <div className='flex gap-2 mt-5 justify-end'>
                                            <Link to={'/addNewCampaign'} className="btn btn-primary">Create Campaign</Link>
                                            <button className="btn btn-primary"><a href="#runningCampaign">Discover More</a></button>
                                        </div>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* running campaign section */}
            <section id='runningCampaign' className='p-8 space-y-8'>
                <h1 className='text-6xl'><Typewriter
                    words={["Running campaigns"]}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={70}
                    delaySpeed={2000}
                /></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        campaigns.map(campaign => <RunningCampaignCard key={campaign._id} campaign={campaign} />)
                    }
                </div>
            </section>

            {/* extra section 1 */}
            <section className="bg-base-100 py-16">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
                        Why You Should Choose Crowdcube
                    </h2>
                    <p className="text-center max-w-2xl mx-auto mb-12">
                        We are dedicated to empowering individuals and businesses to achieve their fundraising goals. With a user-friendly platform and unparalleled support, we ensure your success every step of the way.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Success Rates Section */}
                        <div className="flex items-start">
                            <div className="mr-4 text-center align-middle">
                                <GiLaurelCrown className='text-6xl' />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Highest Success Rates</h3>
                                <p className="">
                                    Our platform boasts the highest success rates in the industry by providing personalized guidance and comprehensive resources to maximize your campaign's reach and impact.
                                </p>
                            </div>
                        </div>
                        {/* Funding Section */}
                        <div className="flex items-start">
                            <div className="mr-4">
                            <FaChartPie className='text-6xl' />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold ">Millions In Funding</h3>
                                <p className="">
                                    Our platform has helped raise millions in funding for countless creative ideas, startups, and personal causes, making us a trusted choice for fundraisers worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* extra section 2 */}
            <section></section>

        </div>
    );
};

export default Home;