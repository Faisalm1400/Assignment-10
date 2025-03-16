import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const CampaignDetails = () => {
    const loadedCampaign = useLoaderData();
    const { user } = useContext(AuthContext);

    const { image, title, type, description, minDonation, deadline } = loadedCampaign;

    const handleDonate = () => {
        if (!user) {
            alert("Please log in to donate.");
            return;
        }

        const donationInfo = {
            campaignId: loadedCampaign._id,
            campaignTitle: title,
            donorEmail: user.email,
            amount: minDonation,
        };

        fetch('http://localhost:5000/donated', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donationInfo)
        })
            .then(res => res.json())
            .then(data => {
                alert('Donation successful!');
                console.log('Donation info stored in DB', data);
            })
            .catch((error) => {
                console.error('Error saving donation info:', error);
            });
    };


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
                        <button className="btn btn-primary" onClick={handleDonate}>Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;