import { Link, useLoaderData } from 'react-router-dom';
import RunningCampaignCard from '../components/RunningCampaignCard';
import cover1 from '../assets/photos/coer-1.jpg';
import cover2 from '../assets/photos/cover-2.jpg';
import cover3 from '../assets/photos/cover-3.webp';

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
                                    <p className="mb-5 text-2xl font-semibold">
                                        Raising Money Is Easy Now!
                                    </p>
                                    <h1 className="mb-5 text-7xl font-bold">Great Crowdfunding Platforms</h1>
                                    <Link to={'/addNewCampaign'} className="btn btn-primary">Create Campaign</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
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
                                    <p className="mb-5 text-2xl font-semibold">
                                        Raising Money Is Easy Now!
                                    </p>
                                    <h1 className="mb-5 text-7xl font-bold">Join The Journey From Idea To Market</h1>
                                    <div className='flex gap-2 mt-5 justify-start'>
                                        <Link to={'/addNewCampaign'} className="btn btn-primary">Create Campaign</Link>
                                        <button className="btn btn-primary"><a href="#runningCampaign">Discover More</a></button>
                                    </div>
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
                                    <p className="mb-5 text-2xl font-semibold">
                                        Raising Money Is Easy Now!
                                    </p>
                                    <h1 className="mb-5 text-7xl font-bold">Change The Manner Artwork Is Valued</h1>
                                    <div className='flex gap-2 mt-5 justify-end'>
                                        <Link to={'/addNewCampaign'} className="btn btn-primary">Create Campaign</Link>
                                        <button className="btn btn-primary"><a href="#runningCampaign">Discover More</a></button>
                                    </div>
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
                <h1 className='text-6xl'> Running campaigns</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        campaigns.map(campaign => <RunningCampaignCard key={campaign._id} campaign={campaign} />)
                    }
                </div>
            </section>

            {/* extra section 1 */}
            <section></section>

            {/* extra section 2 */}
            <section></section>

        </div>
    );
};

export default Home;