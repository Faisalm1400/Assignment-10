import { useLoaderData } from "react-router-dom";

const CampaignDetails = () => {
    const loadedCampaign = useLoaderData();

    const { image, title, type, description, minDonation, deadline } = loadedCampaign;


    return (
        <div className="flex justify-center align-middle mt-20">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        className="rounded-xl" />
                </figure>
                <div className="flex justify-center">
                    <div className="badge badge-secondary uppercase rounded-none">{type}</div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-lg font-sans">{description}</p>
                    <div className="card-actions">
                        <div className="badge badge-outline font-semibold">{deadline}</div>
                        <div className="badge badge-outline font-semibold"><span className="">Goal:</span> ${minDonation}</div>
                    </div>
                    <div>
                        <button className="btn btn-primary">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;